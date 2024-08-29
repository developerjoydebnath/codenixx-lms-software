import DebouncedInput from "@/components/data-table/DebouncedInput";
import React from "react";

function Filter({ column, table }) {
    const firstValue = table.getPreFilteredRowModel().flatRows[0]?.getValue(column.id);

    const columnFilterValue = column.getFilterValue();

    const sortedUniqueValues = React.useMemo(
        () => (typeof firstValue === "number" ? [] : Array.from(column.getFacetedUniqueValues().keys()).sort()),
        [column.getFacetedUniqueValues(), column, firstValue]
    );
    return typeof firstValue === "number" ? (
        <div>
            <div className="flex space-x-2">
                <DebouncedInput
                    type="number"
                    min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
                    max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
                    value={columnFilterValue?.[0] ?? ""}
                    onChange={(value) => column.setFilterValue((old) => [value, old?.[1]])}
                    placeholder="Min"
                    className="rounded border shadow shadow-base-150 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
                <DebouncedInput
                    type="number"
                    min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
                    max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
                    value={columnFilterValue?.[1] ?? ""}
                    onChange={(value) => column.setFilterValue((old) => [old?.[0], value])}
                    placeholder="Max"
                    className="rounded border shadow shadow-base-150 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
            </div>
        </div>
    ) : (
        <>
            <datalist id={`${column.id}list`}>
                {sortedUniqueValues.slice(0, 5000).map((value) => (
                    <option value={value} key={value} />
                ))}
            </datalist>
            <DebouncedInput
                type="text"
                value={columnFilterValue ?? ""}
                onChange={(value) => column.setFilterValue(value)}
                placeholder="Search..."
                // placeholder={`Search... (${column.getFacetedUniqueValues().size})`}
                className="rounded border shadow-base-150"
                // list={`${column.id}list`}
            />
        </>
    );
}

export default Filter;
