
type SepartorToType = {
    s: string
    d: number
}

type Format<T extends string> =
    T extends `${string}%${infer Separator extends keyof SepartorToType}${infer Tail}`
    ? (arg: SepartorToType[Separator]) => Format<Tail>
    : string


type Format2<T extends string> = T extends `${string}%${infer M}${infer R}`
    ? M extends keyof SepartorToType
    ? (x: SepartorToType[M]) => Format2<R>
    : Format2<R>
    : string
