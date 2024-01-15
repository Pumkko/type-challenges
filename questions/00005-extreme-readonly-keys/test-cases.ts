import type { Equal, Expect } from '@type-challenges/utils'

import { Equal } from "@type-challenges/utils"


type TAllReadonly<T extends object> = {
    readonly [key in keyof T]: T[key]
}


export type GetReadonlyKeys<T extends object, TAR = TAllReadonly<T>> = {
    [key in keyof T as key extends keyof TAR ? Equal<T[key], TAR[key]> extends true ? key : never : never]: T[key]
}

type T = GetReadonlyKeys<Todo1>

type cases = [
  Expect<Equal<'title', GetReadonlyKeys<Todo1>>>,
  Expect<Equal<'title' | 'description', GetReadonlyKeys<Todo2>>>,
]

interface Todo1 {
  readonly title: string
  description: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  readonly description: string
  completed?: boolean
}
