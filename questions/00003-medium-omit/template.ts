type MyOmit<T extends object, K extends keyof T> = {
    [key in keyof T as key extends K ? never : key]: T[key]
}
