
type Currying<T> = T extends (a: infer A, b: infer B)  => true ? 
    true
: false


type T = Currying<(a: number) => true>

declare function Currying<T extends Function>(fn: T): any
