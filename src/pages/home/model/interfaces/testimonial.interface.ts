export interface Testimonial {
  author: string
  date: string
  id: string
  segments: TestimonialSegment[]
}

export interface TestimonialSegment {
  isAccent?: boolean
  text: string
}
