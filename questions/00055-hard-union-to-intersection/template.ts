

type UnionToFunction<U> = U extends U ? (u: U) => void : never


type UnionToIntersection<U> = UnionToFunction<U> extends (u: infer U) => void ? U : never


