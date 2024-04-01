const changeToString = (parametro: any) => {
    const result: string = parametro.toString()
    return typeof result;
}

console.log(changeToString(false))