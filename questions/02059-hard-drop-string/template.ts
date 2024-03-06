type StringToCharUnion<S extends string> = S extends `${infer Root}${infer Tail}` ? Root | StringToCharUnion<Tail> : S


type DropString<S extends string, R extends string, UR = StringToCharUnion<R>> = 
    S extends `${infer Root}${infer Tail}` 
        ? Root extends UR
            ? DropString<Tail, R>
            : `${Root}${DropString<Tail, R>}`
        : S

