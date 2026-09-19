import type { IconLabel, OptionWithIcon } from '@/shared/model'

import { footerBadges, footerParagraphs, footerSocials } from '../../model'

import s from './Footer.module.scss'

const createSocialMarkup = ({ icon, label, value }: OptionWithIcon): string => `
  <li>
    <a class="${s.footer__socialLink}" href="${value}" aria-label="${label}">
      <img src="${icon}" alt="${label}" />
    </a>
  </li>
`

const createBadgeMarkup = ({ icon, label }: IconLabel): string => `
  <li class="${s.footer__badge}">
    <img src="${icon}" alt="${label}" />
  </li>
`

export const Footer = (): HTMLElement => {
  const root = document.createElement('footer')
  const year = new Date().getFullYear()

  root.className = s.footer
  root.innerHTML = `
    <div class="${s.footer__body}">
      <div class="${s.footer__head}">
        <a class="${s.footer__logo}" href="/">
          <img src="/logos/logo-on-dark.svg" alt="Doktorabc" />
        </a>
        <ul class="${s.footer__socials}">
          ${footerSocials.map(createSocialMarkup).join('')}
        </ul>
      </div>
      <span class="${s.footer__divider}"></span>
      <div class="${s.footer__content}">
        <ul class="${s.footer__badges}">
          ${footerBadges.map(createBadgeMarkup).join('')}
        </ul>
        <div class="${s.footer__text}">
          ${footerParagraphs.map(text => `<p>${text}</p>`).join('')}
        </div>
        <p class="${s.footer__copy}">${year} © DoktorABC All rights reserved</p>
      </div>
    </div>
  `

  return root
}
