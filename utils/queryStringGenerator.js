export const queryStringGenerator = (data) => {
    const params = new URLSearchParams(data);
    const queryString = params.toString();
    return queryString;
};
