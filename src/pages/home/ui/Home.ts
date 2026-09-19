import { Hero, Testimonials, ThreeSteps } from './parts'

import s from './Home.module.scss'

export const Home = (): HTMLElement => {
  const root = document.createElement('div')

  root.className = s.home
  root.append(Hero(), Testimonials(), ThreeSteps())

  return root
}
