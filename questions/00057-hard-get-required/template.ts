type OptionalType<Key extends PropertyKey, T> = {
    [P in Key]?: T
}

// Really happy i got this one on the first try
type GetRequired<T extends object> = {
    [Key in keyof T as OptionalType<Key, T[Key]> extends Pick<T, Key> ? never : Key]: T[Key]
}