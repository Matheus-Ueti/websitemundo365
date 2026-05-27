# ─────────────────────────────────────────────
# Multi-stage Dockerfile for Mundo365 Landing Page
# Next.js 16 · React 19 · Node 22 Alpine
# ─────────────────────────────────────────────

# ──── Stage 1 — Install dependencies ────────
FROM node:22-alpine AS deps
WORKDIR /app

# Copy lockfiles first for better layer caching
COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts

# ──── Stage 2 — Build the application ───────
FROM node:22-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build-time env (override via docker-compose or CLI)
ARG NEXT_PUBLIC_SITE_URL=http://localhost:3000
ENV NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL}

# Next.js telemetry opt-out
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# ──── Stage 3 — Production runner ───────────
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy only what's needed to run
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs

EXPOSE 8080
ENV PORT=8080
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
