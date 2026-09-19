import type { ThreeStep } from '../interfaces'

export const threeSteps: ThreeStep[] = [
  {
    accent: 'Online-Fragebogen aus',
    id: 'questionnaire',
    image: '/home/three-steps/phone.png',
    label: 'Füllen Sie einen vertraulichen ',
    value: '1'
  },
  {
    accent: 'Therapieempfehlung',
    id: 'therapy',
    image: '/home/three-steps/doctor.png',
    isFeatured: true,
    label: 'Erhalten Sie eine ärztlich geprüfte ',
    value: '2'
  },
  {
    accent: '1–48 Stunden',
    id: 'delivery',
    image: '/home/three-steps/document.png',
    label: 'Diskrete Lieferung nach Hause innerhalb von ',
    value: '3'
  }
]
