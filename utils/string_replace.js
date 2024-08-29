export const StringReplace = (string, from_symbol, to_symbol) => {
    return string && string.replace(RegExp(from_symbol, "g"), to_symbol);
};
