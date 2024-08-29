import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { flexRender } from "@tanstack/react-table";

function Cell({ cell, globalFilter }) {
    const { isDragging, setNodeRef, transform } = useSortable({
        id: cell.column.id,
    });

    const style = {
        opacity: isDragging ? 0.8 : 1,
        position: "relative",
        transform: CSS.Translate.toString(transform), // translate instead of transform to avoid squishing
        transition: "width transform 0.2s ease-in-out",
        width: cell.column.getSize(),
        zIndex: isDragging ? 1 : 0,
    };

    // console.log(cell.renderValue());
    // console.log(cell);

    return cell.renderValue() || cell.column.columnDef.key_type === "action" ? (
        <td
            className="py-2 pl-2 text-start text-base-400 first:pl-5 last:pr-5"
            key={cell.id}
            style={style}
            ref={setNodeRef}
        >
            <span className={`text-[8px] sm:text-xs xmd:text-sm 3xl:text-base`}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </span>
            {/* {cell.renderValue()} */}
        </td>
    ) : (
        <td
            key={cell.id}
            style={style}
            ref={setNodeRef}
            className="py-2.5 pl-2 text-start text-base-400 first:pl-5 last:pr-5"
        >
            <span className="text-[8px] sm:text-xs xmd:text-sm 3xl:text-base">n/a</span>
        </td>
    );
}

export default Cell;
