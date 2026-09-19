import { HeaderBenefits, HeaderMain } from '../parts'

import s from './Header.module.scss'

export const Header = (): HTMLElement => {
  const root = document.createElement('header')

  root.className = s.header
  root.append(HeaderBenefits(), HeaderMain())

  return root
}
