type Pop<T extends any[]> = T extends [... infer TA, unknown] ? TA : []
