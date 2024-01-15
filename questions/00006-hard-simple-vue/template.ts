declare function SimpleVue<
    TData extends Record<string, unknown>,
    TComputed extends Record<string, unknown>,
    TMethod extends Record<string, unknown>
>(options: {
    data: (this: never) => TData,
    computed: {
        [key in keyof TComputed]: (this: TData) => TComputed[key]
    }
    methods: {
        [key in keyof TMethod]: (this: TData & TComputed & {
            [key in keyof TMethod]: () => TMethod[key]
        }) => TMethod[key]
    }

}): any
