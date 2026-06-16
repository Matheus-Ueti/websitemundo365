export const HERO_LOTTIE_SRC =
  'https://lottie.host/8c15d878-eef7-4119-b54e-b11d5ed2bafe/hkvUWhAvYo.lottie'

export const HERO_LOTTIE_WASM_PATH = '/dotlottie-player.wasm'

/** Layout do player no hero — ajuste aqui em vez de espalhar classes nos componentes. */
export const heroLottieLayout = {
  container:
    'relative w-full min-w-0 aspect-square flex items-center justify-start origin-left scale-[1.15] sm:scale-[1.25] lg:scale-[1.35] -translate-x-10 sm:-translate-x-14 lg:-translate-x-20 -translate-y-6 sm:-translate-y-8 lg:-translate-y-10',
  minHeights: 'min-h-[320px] sm:min-h-[400px] lg:min-h-[520px]',
  desktopWrapper:
    'relative hidden lg:flex items-start justify-start min-h-[520px] overflow-visible w-full max-w-none -ml-8 xl:-ml-14 -mt-6',
  desktopInner: 'w-[115%] max-w-none',
} as const
