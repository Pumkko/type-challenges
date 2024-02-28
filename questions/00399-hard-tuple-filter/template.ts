type FilterOut<T extends any[], F> = T extends [] 
    ? [] 
    : T extends [infer Root, ...infer Tail] 
        ? [Root] extends [F]
            ? FilterOut<Tail, F>
            : [Root, ...FilterOut<Tail, F>]
        : never
