//intersection types
// we can define 2 or more types (type1 and type2) by using type keyword and can assign those types to another variable by simply intersecting them by & symbol (type3 = type1 & type2)

// we can do this by interfaces also

//function overloading => refer pics

//index types (object specific) => we can add as many properties as we can, without specifying them in advance


//flexible objects type definition
type DataStore={
    [prop:string]:number|string
}
//we can add any number of properties satifying this type