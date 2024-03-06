// M => minuend, S => subtrahend

// Kinda complicated but the idea's there
// The idea is to turn the left hand side of the substract into an array
// Then shift that array as many times as needed using the right and side value
// We then just take the length of the resulting array

type ShiftArrayNTimes<T extends unknown[], N extends number, SubArray extends unknown[] = []> =
    T extends [infer _, ...infer Tail]
        ? SubArray['length'] extends N 
            ? T
            : ShiftArrayNTimes<Tail, N, [0, ...SubArray]>
        : SubArray['length'] extends N 
            ? []
            : never

type Subtract < M extends number, S extends number, ArrayOfM = ArrayOfSize<M> > = 
    ArrayOfM extends unknown[] 
        ? ShiftArrayNTimes<ArrayOfM, S>['length']
        : never

