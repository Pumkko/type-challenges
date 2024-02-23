type TrimLeft<S extends string> = 
    S extends `${' ' | '\n' | '\t'}${infer Sub}` ? TrimLeft<Sub> : S
