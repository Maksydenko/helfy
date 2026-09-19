import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

import { Breakpoint } from '@/shared/config'

import { type ThreeStep, threeSteps } from '../../../model'

import s from './ThreeSteps.module.scss'

import 'swiper/css'

const createStepMarkup = ({
  accent,
  image,
  isFeatured,
  label,
  value
}: ThreeStep): string => `
  <div class="swiper-slide">
    <article class="${s.threeSteps__item}${isFeatured ? ` ${s.threeSteps__item_featured}` : ''}">
      <p class="${s.threeSteps__number}">${value}</p>
      <p class="${s.threeSteps__description}">
        ${label}<span class="${s.threeSteps__accent}">${accent}</span>
      </p>
      <div class="${s.threeSteps__img}">
        <img src="${image}" alt="" />
      </div>
    </article>
  </div>
`

const initThreeStepsSlider = (root: HTMLElement): void => {
  const slider = root.querySelector(`.${s.threeSteps__slider}`)
  const pagination = root.querySelector(`.${s.threeSteps__pagination}`)
  const prev = root.querySelector(`.${s.threeSteps__prev}`)
  const next = root.querySelector(`.${s.threeSteps__next}`)

  if (
    !(slider instanceof HTMLElement) ||
    !(pagination instanceof HTMLElement) ||
    !(prev instanceof HTMLElement) ||
    !(next instanceof HTMLElement)
  ) {
    return
  }

  new Swiper(slider, {
    breakpoints: {
      [Math.ceil(Breakpoint.LG)]: { slidesPerView: 2 },
      [Math.ceil(Breakpoint.XL)]: { slidesPerView: 3 }
    },
    modules: [Navigation, Pagination],
    navigation: { nextEl: next, prevEl: prev },
    pagination: { clickable: true, el: pagination },
    slidesPerView: 1.2,
    spaceBetween: 24,
    watchOverflow: true
  })
}

export const ThreeSteps = (): HTMLElement => {
  const root = document.createElement('section')

  root.className = s.threeSteps
  root.innerHTML = `
    <div class="${s.threeSteps__body}">
      <img class="${s.threeSteps__decor}" src="/home/three-steps/decor.svg" alt="" />
      <div class="${s.threeSteps__content}">
        <div class="${s.threeSteps__text}">
          <p class="${s.threeSteps__label}">So funktioniert es</p>
          <h2 class="${s.threeSteps__title}">
            In 3 einfachen Schritten.
            <span class="${s.threeSteps__title_accent}">Vollständig online.</span>
          </h2>
        </div>
        <div class="swiper ${s.threeSteps__slider}">
          <div class="swiper-wrapper">
            ${threeSteps.map(createStepMarkup).join('')}
          </div>
        </div>
        <div class="${s.threeSteps__controls}">
          <button class="${s.threeSteps__arrow} ${s.threeSteps__prev}" type="button">
            <img src="/icons/chevron.svg" alt="Prev" />
          </button>
          <div class="${s.threeSteps__pagination}"></div>
          <button class="${s.threeSteps__arrow} ${s.threeSteps__next}" type="button">
            <img src="/icons/chevron.svg" alt="Next" />
          </button>
        </div>
      </div>
    </div>
  `

  initThreeStepsSlider(root)

  return root
}
