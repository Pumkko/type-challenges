import { Equal } from "@type-challenges/utils"


type TAllReadonly<T extends object> = {
    readonly [key in keyof T]: T[key]
}


export type GetReadonlyKeys<T extends object, TAR = TAllReadonly<T>> = {
    [key in keyof T as key extends keyof TAR ? Equal<T[key], TAR[key]> extends true ? key : never : never]: T[key]
}