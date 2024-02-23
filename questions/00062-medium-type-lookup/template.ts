type LookUp<U, Key extends 'dog' | 'cat'> = 
    U extends U  
        ?U extends { type: 'dog' | 'cat' } 
            ?U['type'] extends Key ? U : never
        : never
    :never 
