import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

import { Breakpoint } from '@/shared/config'

import {
  type Testimonial,
  testimonials,
  type TestimonialSegment
} from '../../../model'

import s from './Testimonials.module.scss'

import 'swiper/css'

const createSegmentMarkup = (segment: TestimonialSegment): string => {
  if (!segment.isAccent) {
    return segment.text
  }

  return `<span class="${s.testimonials__accent}">${segment.text}</span>`
}

const createCardMarkup = ({ author, date, segments }: Testimonial): string => `
  <div class="swiper-slide">
    <article class="${s.testimonials__card}">
      <p class="${s.testimonials__author}">${author}</p>
      <p class="${s.testimonials__date}">${date}</p>
      <p class="${s.testimonials__text}">
        ${segments.map(createSegmentMarkup).join('')}
      </p>
      <p class="${s.testimonials__ellipsis}">....</p>
      <p class="${s.testimonials__verified}">
        <img src="/icons/check-circle.svg" alt="" />
        Verifizierte Bewertung
      </p>
    </article>
  </div>
`

const initTestimonialsSlider = (root: HTMLElement): void => {
  const slider = root.querySelector(`.${s.testimonials__slider}`)
  const pagination = root.querySelector(`.${s.testimonials__pagination}`)
  const prev = root.querySelector(`.${s.testimonials__prev}`)
  const next = root.querySelector(`.${s.testimonials__next}`)

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
      [Math.ceil(Breakpoint.LG)]: { slidesPerView: 3, spaceBetween: 20 },
      [Math.ceil(Breakpoint.SM)]: { slidesPerView: 2, spaceBetween: 20 },
      [Math.ceil(Breakpoint.XL)]: { slidesPerView: 4, spaceBetween: 24 }
    },
    modules: [Navigation, Pagination],
    navigation: { nextEl: next, prevEl: prev },
    pagination: { clickable: true, el: pagination },
    slidesPerView: 1.2,
    spaceBetween: 20,
    watchOverflow: true
  })
}

export const Testimonials = (): HTMLElement => {
  const root = document.createElement('section')

  root.className = s.testimonials
  root.innerHTML = `
    <div class="${s.testimonials__body}">
      <h2 class="${s.testimonials__title}">
        <span class="${s.testimonials__title_accent}">Mehr als 750,000</span>
        zufriedene Patienten
      </h2>
      <div class="swiper ${s.testimonials__slider}">
        <div class="swiper-wrapper">
          ${testimonials.map(createCardMarkup).join('')}
        </div>
      </div>
      <div class="${s.testimonials__controls}">
        <button class="${s.testimonials__arrow} ${s.testimonials__prev}" type="button">
          <img src="/icons/chevron.svg" alt="Prev" />
        </button>
        <div class="${s.testimonials__pagination}"></div>
        <button class="${s.testimonials__arrow} ${s.testimonials__next}" type="button">
          <img src="/icons/chevron.svg" alt="Next" />
        </button>
      </div>
    </div>
  `

  initTestimonialsSlider(root)

  return root
}
