import {
    getCoreRowModel,
    getFacetedMinMaxValues,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { useEffect, useRef, useState } from "react";

// needed for table body level scope DnD setup
import DraggableTableHead from "@/components/data-table/DraggableTableHead";
import {
    DndContext,
    KeyboardSensor,
    MouseSensor,
    TouchSensor,
    closestCenter,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";
import { SortableContext, arrayMove, horizontalListSortingStrategy } from "@dnd-kit/sortable";

import Cell from "@/components/data-table/Cell";
import ExportFile from "@/components/data-table/ExportFile";
import TableFooter from "@/components/data-table/TableFooter";
import TableGlobalSearch from "@/components/data-table/TableGlobalSearch";
import { fuzzyFilter } from "@/components/data-table/fuzzyFilter";

function DataTable({
    data,
    columns,
    exportVisible = true,
    searchVisible = true,
    footerVisible = true,
    data_key = [],
    t_row,
    loading,
    extraButton = <div></div>,
}) {
    const [columnFilters, setColumnFilters] = useState([]);
    const [globalFilter, setGlobalFilter] = useState("");

    const [columnOrder, setColumnOrder] = useState(() => columns.map((c) => c.id));
    const [innerWidth, setInnerWidth] = useState(0);
    const divRef = useRef(null);

    // get the inner size to make table scrollable while overflowed out of screen
    useEffect(() => {
        const updateInnerWidth = () => {
            if (divRef.current) {
                const width = window.innerWidth;
                setInnerWidth(width);
            }
        };

        // Call the update function initially and whenever the window is resized
        updateInnerWidth();
        window.addEventListener("resize", updateInnerWidth);

        // Clean up the event listener when component unmounts
        return () => {
            window.removeEventListener("resize", updateInnerWidth);
        };
    }, []);

    // table instance
    const table = useReactTable({
        data,
        columns,
        filterFns: {
            fuzzy: fuzzyFilter,
        },
        state: {
            columnFilters,
            globalFilter,
            columnOrder,
        },
        onColumnFiltersChange: setColumnFilters,
        onColumnOrderChange: setColumnOrder,
        onGlobalFilterChange: setGlobalFilter,
        globalFilterFn: fuzzyFilter,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        getFacetedMinMaxValues: getFacetedMinMaxValues(),
        enableColumnResizing: true,
        columnResizeMode: "onChange",
        debugTable: false,
        debugHeaders: false,
        debugColumns: false,
    });

    // get the filtered data
    const filteredData = table.getSortedRowModel().rows.map((d) => d.original);

    // get the specific fields to export
    const exportData = filteredData?.map((item) => {
        const filteredItem = {};
        data_key.forEach((k) => {
            if (item?.hasOwnProperty(k)) {
                filteredItem[k] = item[k];
            }
        });
        return filteredItem;
    });

    // reorder columns after drag & drop
    function handleDragEnd(event) {
        const { active, over } = event;
        if (active && over && active.id !== over.id) {
            setColumnOrder((columnOrder) => {
                const oldIndex = columnOrder.indexOf(active.id);
                const newIndex = columnOrder.indexOf(over.id);
                return arrayMove(columnOrder, oldIndex, newIndex); // this is just a splice util
            });
        }
    }

    // used for drag and drop
    const sensors = useSensors(useSensor(MouseSensor, {}), useSensor(TouchSensor, {}), useSensor(KeyboardSensor, {}));

    // used for drag and drop
    useEffect(() => {
        if (table.getState().columnFilters[0]?.id === "fullName") {
            if (table.getState().sorting[0]?.id !== "fullName") {
                table.setSorting([{ id: "fullName", desc: false }]);
            }
        }
    }, [table.getState().columnFilters[0]?.id]);

    return (
        <div ref={divRef} className="">
            {/* global_search & export file */}
            <div className="flex justify-between gap-x-2">
                {/* file export  */}
                <div className="flex flex-col items-start gap-x-2 sm:flex-row sm:items-center">
                    {exportVisible ? <ExportFile data={exportData} columnOrder={columns} table={table} /> : <div></div>}
                    {extraButton}
                </div>

                {/* global_search_box  */}
                {searchVisible && (
                    <TableGlobalSearch
                        value={globalFilter ?? ""}
                        onChange={(value) => setGlobalFilter(String(value))}
                        className="w-full max-w-[250px]"
                        placeholder="Search Globally ..."
                    />
                )}
            </div>
            <div
                className="mb-4 mt-2 w-full overflow-hidden rounded-lg"
                // style={{
                //     width: innerWidth > 992 ? `${innerWidth - 350}px` : "100%",
                // }}
            >
                <div className="w-full overflow-auto rounded-lg border">
                    <DndContext
                        collisionDetection={closestCenter}
                        modifiers={[restrictToHorizontalAxis]}
                        // eslint-disable-next-line react/jsx-no-bind
                        onDragEnd={handleDragEnd}
                        sensors={sensors}
                    >
                        <table className="w-full rounded-lg" id="table">
                            <thead className="w-full bg-secondary">
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <tr key={headerGroup.id}>
                                        <th className="w-1 px-0.5 text-[8px] font-medium text-base-400 hover:bg-base-150 dark:font-medium dark:hover:bg-base-50 sm:px-1 sm:text-xs sm:font-semibold dark:sm:font-medium xmd:text-sm md:px-2">
                                            SL
                                        </th>
                                        <SortableContext items={columnOrder} strategy={horizontalListSortingStrategy}>
                                            {headerGroup.headers.map((header) => (
                                                <DraggableTableHead key={header.id} header={header} table={table} />
                                            ))}
                                        </SortableContext>
                                    </tr>
                                ))}
                            </thead>
                            {!loading && data?.length > 0 ? (
                                <tbody>
                                    {filteredData?.length > 0 ? (
                                        table.getRowModel().rows.map((row) => {
                                            return (
                                                <tr
                                                    className={`border-t hover:bg-secondary/30 dark:hover:bg-body/30`}
                                                    key={row.id}
                                                >
                                                    <td className="w-fit py-2 text-center text-[8px] text-base-400 sm:text-xs xmd:text-sm 3xl:text-base">
                                                        {row?.index + 1}
                                                    </td>
                                                    {row.getVisibleCells().map((cell) => {
                                                        return (
                                                            <SortableContext
                                                                key={cell.id}
                                                                items={columnOrder}
                                                                strategy={horizontalListSortingStrategy}
                                                            >
                                                                <Cell cell={cell} globalFilter={globalFilter} />
                                                            </SortableContext>
                                                        );
                                                    })}
                                                </tr>
                                            );
                                        })
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan={table?.getAllColumns()?.length + 1}
                                                className="py-2.5 text-center text-base-400"
                                            >
                                                No Data Found!
                                            </td>
                                        </tr>
                                    )}
                                    {t_row}
                                </tbody>
                            ) : !loading ? (
                                <tbody>
                                    <tr>
                                        <td
                                            colSpan={table?.getAllColumns()?.length + 1}
                                            className="py-2.5 text-center text-[8px] text-base-400 sm:text-xs xmd:text-sm 3xl:text-base"
                                        >
                                            No Data Found!
                                        </td>
                                    </tr>
                                </tbody>
                            ) : (
                                <tbody className="animate-pulse">
                                    <tr className="border-b">
                                        <td className="py-3 pl-2 pr-0 text-left text-[8px] text-base-400 sm:pr-3 sm:text-xs xmd:pr-5 xmd:text-sm 3xl:text-base">
                                            <div className="h-4 w-5 rounded bg-secondary sm:h-5 xmd:h-6"></div>
                                        </td>
                                        {table.getAllColumns()?.map((d) => (
                                            <td
                                                key={d.id}
                                                className="py-3 pl-2 pr-0 text-left text-[8px] text-base-400 sm:pr-3 sm:text-xs xmd:pr-5 xmd:text-sm 3xl:text-base"
                                            >
                                                <div className="h-4 rounded bg-secondary sm:h-5 xmd:h-6"></div>
                                            </td>
                                        ))}
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-3 pl-2 pr-0 text-left text-[8px] text-base-400 sm:pr-3 sm:text-xs xmd:pr-5 xmd:text-sm 3xl:text-base">
                                            <div className="h-4 w-5 rounded bg-secondary sm:h-5 xmd:h-6"></div>
                                        </td>
                                        {table.getAllColumns()?.map((d) => (
                                            <td
                                                key={d.id}
                                                className="py-3 pl-2 pr-0 text-left text-[8px] text-base-400 sm:pr-3 sm:text-xs xmd:pr-5 xmd:text-sm 3xl:text-base"
                                            >
                                                <div className="h-4 rounded bg-secondary sm:h-5 xmd:h-6"></div>
                                            </td>
                                        ))}
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-3 pl-2 pr-0 text-left text-[8px] text-base-400 sm:pr-3 sm:text-xs xmd:pr-5 xmd:text-sm 3xl:text-base">
                                            <div className="h-4 w-5 rounded bg-secondary sm:h-5 xmd:h-6"></div>
                                        </td>
                                        {table.getAllColumns()?.map((d) => (
                                            <td
                                                key={d.id}
                                                className="py-3 pl-2 pr-0 text-left text-[8px] text-base-400 sm:pr-3 sm:text-xs xmd:pr-5 xmd:text-sm 3xl:text-base"
                                            >
                                                <div className="h-4 rounded bg-secondary sm:h-5 xmd:h-6"></div>
                                            </td>
                                        ))}
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-3 pl-2 pr-0 text-left text-[8px] text-base-400 sm:pr-3 sm:text-xs xmd:pr-5 xmd:text-sm 3xl:text-base">
                                            <div className="h-4 w-5 rounded bg-secondary sm:h-5 xmd:h-6"></div>
                                        </td>
                                        {table.getAllColumns()?.map((d) => (
                                            <td
                                                key={d.id}
                                                className="py-3 pl-2 pr-0 text-left text-[8px] text-base-400 sm:pr-3 sm:text-xs xmd:pr-5 xmd:text-sm 3xl:text-base"
                                            >
                                                <div className="h-4 rounded bg-secondary sm:h-5 xmd:h-6"></div>
                                            </td>
                                        ))}
                                    </tr>
                                    <tr>
                                        <td className="py-3 pl-2 pr-0 text-left text-[8px] text-base-400 sm:pr-3 sm:text-xs xmd:pr-5 xmd:text-sm 3xl:text-base">
                                            <div className="h-4 w-5 rounded bg-secondary sm:h-5 xmd:h-6"></div>
                                        </td>
                                        {table.getAllColumns()?.map((d) => (
                                            <td
                                                key={d.id}
                                                className="py-3 pl-2 pr-0 text-left text-[8px] text-base-400 sm:pr-3 sm:text-xs xmd:pr-5 xmd:text-sm 3xl:text-base"
                                            >
                                                <div className="h-4 rounded bg-secondary sm:h-5 xmd:h-6"></div>
                                            </td>
                                        ))}
                                    </tr>
                                </tbody>
                            )}
                        </table>
                    </DndContext>
                </div>
            </div>
            {/* table footer */}
            {footerVisible && <TableFooter table={table} data={data} />}
        </div>
    );
}

export default DataTable;
