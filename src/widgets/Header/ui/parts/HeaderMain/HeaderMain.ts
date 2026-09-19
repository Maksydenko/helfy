import s from './HeaderMain.module.scss'

export const HeaderMain = (): HTMLElement => {
  const root = document.createElement('div')

  root.className = s.headerMain
  root.innerHTML = `
    <a class="${s.headerMain__logo}" href="/">
      <img src="/logos/logo.svg" alt="Doktorabc" />
    </a>
  `

  return root
}
