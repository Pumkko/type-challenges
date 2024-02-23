type TrimLeft<S extends string> = 
    S extends ` ${infer Sub}` ? TrimLeft<Sub> : 
        S extends `\n${infer Sub}` ? TrimLeft<Sub> : 
            S extends `\t${infer Sub}` ? TrimLeft<Sub> : S
