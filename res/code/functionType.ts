interface SearchFunc {
    (source: string, subString: string): boolean;
}

const mySearch: SearchFunc = (source: string, subString: string) => {
    let result = source.search(subString);
    return result > -1;
}
