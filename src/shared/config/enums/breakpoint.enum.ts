import type { ValueOf } from '@/shared/model/types/valueOf.type'

export const Breakpoint = {
  LG: 1023.98,
  MD: 767.98,
  SM: 639.98,
  XL: 1279.98,
  XSM: 389.98,
  XXL: 1535.98,
  XXXL: 1919.98
} as const
export type Breakpoint = ValueOf<typeof Breakpoint>
