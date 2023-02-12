export type Join<T extends number | string, D extends number | string> = `${T}-${D}`

export type Keys<T> = {
  [key in keyof T]: T[key] extends number | string ? key : Keys<T[key]>
}[keyof T]

export type Values<T, K extends keyof T> = T[K]

export type Test = Values<{
  name: string,
  address: {
    number: string
  }
}, 'address'>

export const colors = {
  blue: {
    100: "10000"
  }
}
