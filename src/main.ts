import { Home } from '@/pages/home'

import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'

import '@/app/styles/globals.scss'

const root = document.querySelector('#app')

if (!(root instanceof HTMLElement)) {
  throw new Error('Root element `#app` was not found.')
}

root.className = 'appShell'

const mount = (): void => {
  const body = document.createElement('div')
  const main = document.createElement('main')

  body.className = 'appShell__body'
  main.className = 'appShell__main'
  main.append(Home())
  body.append(main)
  root.replaceChildren(Header(), body, Footer())
}

mount()

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    root.replaceChildren()
  })
  import.meta.hot.accept()
}
