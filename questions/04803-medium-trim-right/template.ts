type TrimRight<S extends string> = 
    S extends `${infer Sub} ` ? TrimRight<Sub> : 
        S extends `${infer Sub}\n` ? TrimRight<Sub> : 
            S extends `${infer Sub}\t` ? TrimRight<Sub> : S