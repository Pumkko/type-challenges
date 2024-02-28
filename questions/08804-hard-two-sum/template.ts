type ArrayOfSize<Size extends number, TArray extends number[] = []>
    = TArray['length'] extends Size ? TArray : ArrayOfSize<Size, [0, ...TArray]>

type SumNumbers<A extends number, B extends number> = [...ArrayOfSize<A>, ...ArrayOfSize<B>]['length']


type TwoSum<T extends number[], U extends number> =
    T extends [infer F extends number, infer S extends number, ...infer Tail extends number[]]
        ? SumNumbers<F, S> extends U
            ? true
            : TwoSum<[F, ...Tail], U> extends true 
                ? true 
                : TwoSum<[S, ...Tail], U>

    : false