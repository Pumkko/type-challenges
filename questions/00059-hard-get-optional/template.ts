// Really happy i got this one on the first try
type GetOptional<T extends object> = {
    [Key in keyof T as OptionalType<Key, T[Key]> extends Pick<T, Key> ? Key : never]: T[Key]
}