import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { IconArrowNarrowDown, IconArrowNarrowUp, IconArrowsMove } from "@tabler/icons-react";
import { flexRender } from "@tanstack/react-table";

function DraggableTableHead({ header, table }) {
    const { attributes, isDragging, listeners, setNodeRef, transform } = useSortable({
        id: header.column.id,
    });

    const style = {
        opacity: isDragging ? 0.8 : 1,
        position: "relative",
        transform: CSS.Translate.toString(transform), // translate instead of transform to avoid squishing
        transition: "width transform 0.2s ease-in-out",
        whiteSpace: "nowrap",
        width: header.column.getSize(),
        zIndex: isDragging ? 1 : 0,
    };

    return (
        <th
            className="pl-2 first:pl-5 hover:bg-base-150 dark:hover:bg-base-50"
            colSpan={header.colSpan}
            style={style}
            ref={setNodeRef}
        >
            {header.isPlaceholder ? null : (
                <>
                    <div
                        {...{
                            className: header.column.getCanSort()
                                ? "cursor-pointer select-none text-sm text-base-400 py-2.5 items-center hover:text-base-500 flex justify-between"
                                : "text-sm text-base-400 py-2.5 items-center hover:text-base-500 flex justify-between",
                            onClick: header.column.getToggleSortingHandler(),
                        }}
                    >
                        <div className="flex items-center text-[8px] font-medium dark:font-medium sm:text-xs sm:font-semibold dark:sm:font-medium xmd:text-sm">
                            {flexRender(header.column.columnDef.header, header.getContext())}
                            {{
                                asc: <IconArrowNarrowUp size={14} />,
                                desc: <IconArrowNarrowDown size={14} />,
                            }[header.column.getIsSorted()] ?? null}
                        </div>
                        <button
                            type="button"
                            className="mr-2 hidden cursor-grab rounded-sm border-dark bg-base-100 p-0.5 active:cursor-grabbing md:block"
                            {...attributes}
                            {...listeners}
                        >
                            <IconArrowsMove size={20} stroke={1.5} />
                        </button>
                    </div>
                    {/* <div className="mb-1 mr-2 md:block hidden">
                        {header.column.getCanFilter() ? (
                            <Filter column={header.column} table={table} />
                        ) : null}
                    </div> */}
                </>
            )}
            {header.column.getCanResize() && (
                <div
                    onMouseDown={header.getResizeHandler()}
                    onTouchStart={header.getResizeHandler()}
                    className={`resizer hidden md:block ${header.column.getIsResizing() ? "isResizing" : ""}`}
                />
            )}
        </th>
    );
}

export default DraggableTableHead;
