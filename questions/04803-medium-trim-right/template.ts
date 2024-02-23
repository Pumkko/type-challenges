type TrimRight<S extends string> = 
    S extends `${infer Sub}${' ' | '\n' | '\t'}` ? TrimRight<Sub> : S