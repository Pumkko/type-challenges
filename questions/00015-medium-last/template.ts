type Last<T extends any[]> = T extends [...unknown[], infer TLast] ? TLast : never
