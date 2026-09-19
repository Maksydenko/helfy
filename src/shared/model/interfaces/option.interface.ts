export interface Option<T = string, K = string> {
  id: string
  label: K
  value: T
}

export interface OptionWithIcon<T = string> extends Option<T> {
  icon: string
}

export interface OptionWithImage<T = string> extends Option<T> {
  image: string
}
