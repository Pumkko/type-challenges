type ShouldCapitalize<First extends string, Second extends string, Tail extends string> =
    `${First}${Second}` extends '🤣' ? `${First}${Second}${MyCapitalize<CapitalizeWordInner<Tail>>}` :
    First extends keyof AlrightIWontUseTheBuiltInCapitalizeType
    ? `${First}${CapitalizeWordInner<`${Second}${Tail}`>}`
    : `${First}${MyCapitalize<Second>}${CapitalizeWordInner<Tail>}`


type CapitalizeWordInner<S extends string> = S extends `${infer First}${infer Second}${infer Tail}`
    ? ShouldCapitalize<First, Second, Tail>
    : S


type CapitalizeWords<S extends string> = MyCapitalize<CapitalizeWordInner<S>>


// Found this solution which is certainly cleaner than mine
type CapitalizeWords2<S extends string, Prev extends string='',Res extends string = ''> = S extends `${infer L}${infer R}`
  ? Uppercase<Prev> extends Lowercase<Prev>
    ? CapitalizeWords2<R,L,`${Res}${Uppercase<L>}`>
    : CapitalizeWords2<R,L,`${Res}${L}`>
  : Res