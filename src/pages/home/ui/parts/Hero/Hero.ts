import type { HeroBenefit } from '@/pages/home/model/interfaces'

import { heroBenefits } from '@/pages/home/model/constants'

import s from './Hero.module.scss'

const STAR_COUNT = 5

const createStarsMarkup = (): string =>
  Array.from(
    { length: STAR_COUNT },
    () => '<img src="/icons/star.svg" alt="Star" />'
  ).join('')

const createBenefitMarkup = ({ label, note }: HeroBenefit): string => `
  <li class="${s.hero__item}">
    <span class="${s.hero__check}">
      <img src="/icons/check.svg" alt="Check" />
    </span>
    <p class="${s.hero__label}">
      ${label}${note ? `<span class="${s.hero__note}"> ${note}</span>` : ''}
    </p>
  </li>
`

const createBenefitsMarkup = (): string => {
  let markup = ''

  for (const benefit of heroBenefits) {
    markup += createBenefitMarkup(benefit)
  }

  return markup
}

export const Hero = (): HTMLElement => {
  const root = document.createElement('section')

  root.className = s.hero
  root.innerHTML = `
    <div class="${s.hero__img}">
      <img src="/home/hero/man.png" alt="Man" />
    </div>
    <div class="${s.hero__body}">
      <div class="${s.hero__content}">
        <div class="${s.hero__text}">
          <h1 class="${s.hero__title}">
            Online-Arzt- und<br />Apothekenservice
          </h1>
          <p class="${s.hero__subtitle}">
            Behandlungen online verschrieben und nach Hause geliefert.
          </p>
        </div>
        <ul class="${s.hero__list}">
          ${createBenefitsMarkup()}
        </ul>
        <a class="${s.hero__cta}" href="#">Jetzt Rezept anfordern!</a>
      </div>
      <div class="${s.hero__rating}">
        <img src="/home/hero/guarantee.png" alt="Trusted Shops Guarantee" />
        <div class="${s.hero__ratingText}">
          <p>Käuferschutz</p>
          <p>4,81 Sehr gut</p>
        </div>
        <span class="${s.hero__stars}">${createStarsMarkup()}</span>
      </div>
    </div>
  `

  return root
}
