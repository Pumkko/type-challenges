

type InferFromConstructor<T> = T extends { (): infer C } ? C : T extends { new (...args: unknown[]): infer C2 } ? C2 : never



declare function VueBasicProps<TProps extends object, TData, TComputed, TMethod>(options: {
    props: TProps,
    data: (this: {
        [key in keyof TProps]: TProps[key] extends object
        ? 'type' extends keyof TProps[key]
        ? InferFromConstructor<TProps[key]['type']>
        : any
        : any
    }) => TData,
    computed: TComputed,
    methods: TMethod
}): any
