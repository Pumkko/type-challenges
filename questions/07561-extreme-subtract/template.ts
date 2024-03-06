// M => minuend, S => subtrahend

// Kinda complicated but the idea's there
// The idea is to turn the left hand side of the substract into an array
// Then shift that array as many times as needed using the right and side value
// We then just take the length of the resulting array

type ShiftArrayNTimes<T extends unknown[], N extends number, SubArray extends unknown[] = []> =
    T extends [] 
        ? SubArray['length'] extends N
            ? []
            : never
        : SubArray['length'] extends N
            ? T
            : T extends [infer DiscardRoot, ...infer Tail]
                ? ShiftArrayNTimes<[...Tail], N, [DiscardRoot, ...SubArray]>
                : T

type TestShift = ShiftArrayNTimes<[1,2,3,4], 3>

type Subtract < M extends number, S extends number, ArrayOfM = ArrayOfSize<M> > = 
    ArrayOfM extends unknown[] 
        ? ShiftArrayNTimes<ArrayOfM, S>['length']
        : never

