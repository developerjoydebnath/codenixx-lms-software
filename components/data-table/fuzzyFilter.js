export const fuzzyFilter = (row, columnId, filteredValue) => {
    const rowValue = row?.getValue(columnId)
        ? typeof row?.getValue(columnId) === "number"
            ? row?.getValue(columnId)?.toString()
            : row?.getValue(columnId)
        : "n/a";

    return rowValue?.toLowerCase()?.includes(filteredValue?.toLowerCase().trim());
};
