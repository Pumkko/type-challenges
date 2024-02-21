type Chainable<TChain extends object = object> = {
  option<TKey extends PropertyKey, TValue>(key: TKey extends keyof TChain ? never : TKey, value: TValue): Chainable<Omit<TChain, TKey> & Record<TKey, TValue> >
  get(): TChain
}