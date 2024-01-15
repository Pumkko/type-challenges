type MyPick<T extends object, K extends keyof T> = {
    [key in keyof T as key extends K ? key : never]: T[key]
}
