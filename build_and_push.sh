#!/bin/bash
set -e

# ─────────────────────────────────────────────
# Mundo365 Landing Page — Build & Push to ACR
# ─────────────────────────────────────────────

# Registry (login server do ACR)
REGISTRY="mundo365-bhcsfuayc7dfbme4.azurecr.io"
IMAGE="mundo365-landing"
VERSION="${1:-v1.0.0}"

echo ""
echo "🚀 Mundo365 Landing — Build & Push (${VERSION})"
echo "   Registry: ${REGISTRY}"
echo "   Imagem:   ${REGISTRY}/${IMAGE}:${VERSION}"
echo "───────────────────────────────────────────"

# ──── Pré-requisito: az login ────────────────
echo ""
echo "🔐 Verificando login no Azure CLI..."
if ! az account show &>/dev/null; then
  echo "⚠️  Você não está logado no Azure CLI."
  echo "   Abrindo o navegador para autenticação..."
  az login
fi
echo "✅ Azure CLI autenticado como: $(az account show --query user.name -o tsv)"

# ──── Login no ACR ───────────────────────────
# O login server tem hífen (mundo365-bhcsfuayc7dfbme4.azurecr.io)
# mas o nome real do recurso é só "mundo365" (sem hífen).
# Extraímos o nome real via az acr list.
echo ""
echo "🔐 Autenticando Docker no ACR..."

ACR_NAME=$(az acr list --query "[?loginServer=='${REGISTRY}'].name" -o tsv 2>/dev/null)

if [ -z "$ACR_NAME" ]; then
  echo "❌ ACR '${REGISTRY}' não encontrado na subscription atual."
  echo "   Subscription ativa: $(az account show --query name -o tsv)"
  echo "   Verifique com: az acr list --output table"
  exit 1
fi

echo "   Nome real do ACR: ${ACR_NAME}"
az acr login --name "$ACR_NAME"
echo "✅ Docker autenticado no registry."

# ──── Build ──────────────────────────────────
echo ""
echo "📦 Building ${IMAGE}:${VERSION} (linux/amd64)..."
docker build \
  --platform linux/amd64 \
  --build-arg NEXT_PUBLIC_SITE_URL=https://www.mundo365.com.br \
  -t "${REGISTRY}/${IMAGE}:${VERSION}" \
  -t "${REGISTRY}/${IMAGE}:latest" \
  -f Dockerfile \
  .

# ──── Push ───────────────────────────────────
echo ""
echo "📤 Pushing ${IMAGE}:${VERSION}..."
docker push "${REGISTRY}/${IMAGE}:${VERSION}"

echo "📤 Pushing ${IMAGE}:latest..."
docker push "${REGISTRY}/${IMAGE}:latest"

# ──── Verificação ────────────────────────────
echo ""
echo "🔍 Verificando imagem no registry..."
az acr repository show-tags \
  --name "$ACR_NAME" \
  --repository "${IMAGE}" \
  --output table

echo ""
echo "✅ Sucesso! ${REGISTRY}/${IMAGE}:${VERSION} está no ACR."
echo ""