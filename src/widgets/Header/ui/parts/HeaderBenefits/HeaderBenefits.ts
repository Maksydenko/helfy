import type { IconLabel } from '@/shared/model'

import { headerBenefits } from '../../../model'

import s from './HeaderBenefits.module.scss'

const createBenefitItemMarkup = ({ icon, label }: IconLabel): string => `
  <li class="${s.headerBenefits__item}">
    <div class="${s.headerBenefits__icon}">
      <img src="${icon}" alt="${label}" />
    </div>
    <p class="${s.headerBenefits__label}">${label}</p>
  </li>
`

const createBenefitsListMarkup = (isDecorative: boolean): string => `
  <ul
    class="${s.headerBenefits__list}"
    ${isDecorative ? 'aria-hidden="true"' : ''}
  >
    ${headerBenefits.map(createBenefitItemMarkup).join('')}
  </ul>
`

export const HeaderBenefits = (): HTMLElement => {
  const root = document.createElement('div')

  root.className = s.headerBenefits
  root.innerHTML = `
    <p class="${s.headerBenefits__title}">
      <span class="${s.headerBenefits__title_pc}">Why Doktorabc?</span>
      <span class="${s.headerBenefits__title_mobile}">Why Us?</span>
    </p>
    <span class="${s.headerBenefits__divider}"></span>
    <div class="${s.headerBenefits__viewport}">
      <div class="${s.headerBenefits__scroll}">
        ${createBenefitsListMarkup(false)}
        ${createBenefitsListMarkup(true)}
      </div>
    </div>
  `

  return root
}
