



type AlrightIWontUseTheBuiltInCapitalizeType = {
    a: "A"
    b: "B"
    c: "C"
    d: "D"
    e: "E"
    f: "F"
    g: "G"
    h: "H"
    i: "I"
    j: "J"
    k: "K"
    l: "L"
    m: "M"
    n: "N"
    o: "O"
    p: "P"
    q: "Q"
    r: "R"
    s: "S"
    t: "T"
    u: "U"
    v: "V"
    w: "W"
    x: "X"
    y: "Y"
    z: "Z"
}



type MyCapitalize<S extends string> = S extends `${infer First}${infer Tail}` ?
    First extends keyof AlrightIWontUseTheBuiltInCapitalizeType ? `${AlrightIWontUseTheBuiltInCapitalizeType[First]}${Tail}` : S : S
