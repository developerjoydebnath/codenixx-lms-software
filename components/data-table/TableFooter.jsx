import Pagination from "@/components/Pagination";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from "@/components/ui/select";
import React from "react";

function TableFooter({ table, data }) {
    const [size, setSize] = React.useState(10);
    const [currentPage, setCurrentPage] = React.useState(0);
    const [pageCount, setPageCount] = React.useState(Math.ceil(data?.length / size));

    // set the total page after search
    React.useEffect(() => {
        setPageCount(table.getPageCount());
    }, [table.getPageCount()]);

    React.useEffect(() => {
        setCurrentPage(0);
    }, [data]);

    // set the page to the last if current page is grater then the total page
    React.useEffect(() => {
        if (currentPage > pageCount) {
            setCurrentPage(0);
        }
    }, [pageCount]);

    // get the total data length
    const totalData = Object.keys(table.getRowModel().rowsById)?.length;

    // page change handler
    const handlePageChange = (event) => {
        table.setPageIndex(event.selected);
        setCurrentPage(event.selected);
    };

    return (
        <div>
            <div className="flex flex-col items-end justify-between 2xl:flex-row 2xl:items-center">
                <div className="order-2 flex items-center space-x-7 2xl:order-1">
                    {/* items per page  */}
                    <div className="flex items-center gap-x-2">
                        <p className="text-sm leading-5 text-base-400">Result per page</p>
                        <div className="">
                            <Select
                                onValueChange={(e) => {
                                    table.setPageSize(e);
                                    setSize(e);
                                    setPageCount(Math.ceil(data?.length / e));
                                }}
                                value={size}
                            >
                                <SelectTrigger className="gap-2">{size}</SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {[10, 20, 30, 50, 100].map((pageSize) => (
                                            <SelectItem key={pageSize} value={pageSize}>
                                                {pageSize}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* go to specific page */}
                    <div className="flex items-center gap-1">
                        <p className="me-1 text-sm leading-5 text-base-400">Go to page</p>
                        <Input
                            type="number"
                            defaultValue={table.getState().pagination.pageIndex + 1}
                            onChange={(e) => {
                                const pageNo = e.target.value ? Number(e.target.value) - 1 : 0;
                                if (pageNo > pageCount) {
                                    table.setPageIndex(0);
                                    setCurrentPage(0);
                                }
                                table.setPageIndex(pageNo);
                                setCurrentPage(pageNo);
                            }}
                            className="w-12 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        />
                    </div>
                </div>

                {/* pagination  */}
                <Pagination
                    className="order-1 mx-0 my-0 mb-4 2xl:order-2 2xl:mb-0"
                    pageCount={pageCount}
                    handlePageChange={handlePageChange}
                    currentPage={currentPage}
                />
            </div>

            {/* current page / total page  */}
            <div className="mt-4 flex items-center justify-end gap-1 text-sm text-base-400 2xl:justify-start">
                Page {currentPage + 1} of {pageCount}
            </div>

            {/* total data  */}
            <div className="mt-4 flex items-center justify-end gap-1 text-sm text-base-400 2xl:justify-start">
                Total data {totalData}
            </div>
        </div>
    );
}

export default TableFooter;
