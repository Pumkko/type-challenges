type Get<T, K extends string> =
    K extends keyof T 
    ? T[K] 
    : K extends `${infer Base}.${infer Sub}` 
        ? Base extends keyof T 
            ? Get<T[Base], Sub>
            : never
        : never
