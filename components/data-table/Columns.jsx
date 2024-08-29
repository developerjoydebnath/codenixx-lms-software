import { fuzzySort } from "@/components/data-table/fuzzySort";

export const column = () => {
    return [
        {
            accessorKey: "firstName",
            cell: (info) => info.getValue(),
            footer: (props) => props.column.id,
            id: "firstName",
        },
        {
            accessorFn: (row) => row.lastName,
            id: "lastName",
            cell: (info) => info.getValue(),
            header: () => <div>Last Name</div>,
            footer: (props) => props.column.id,
        },
        {
            accessorFn: (row) => `${row.firstName} ${row.lastName}`,
            id: "fullName",
            header: "Full Name",
            cell: (info) => info.getValue(),
            footer: (props) => props.column.id,
            filterFn: "fuzzy",
            sortingFn: fuzzySort,
        },
        {
            accessorKey: "age",
            header: () => "Age",
            footer: (props) => props.column.id,
            id: "age",
        },

        {
            accessorKey: "visits",
            header: () => <span>Visits</span>,
            footer: (props) => props.column.id,
            id: "visits",
        },
        {
            accessorKey: "status",
            header: "Status",
            footer: (props) => props.column.id,
            id: "status",
        },
        {
            accessorKey: "progress",
            header: "Profile Progress",
            footer: (props) => props.column.id,
            id: "progress",
        },
    ];
};
