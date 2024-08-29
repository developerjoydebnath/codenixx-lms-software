import { cn } from "@/lib/utils";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, handlePageChange, currentPage, className }) => {
    return (
        <div className={cn("mx-2 my-5 flex justify-end", className)}>
            <ReactPaginate
                containerClassName="pagination"
                className="pagination"
                previousLabel={
                    <div className="flex items-center gap-x-1">
                        <IconChevronLeft size={14} />
                        <span className="text-sm">Prev</span>
                    </div>
                }
                nextLabel={
                    <div className="flex items-center gap-x-1">
                        <span className="text-sm">Next</span>
                        <IconChevronRight size={14} />
                    </div>
                }
                activeLinkClassName="bg-primary text-base-0 hover:bg-primary border-primary"
                pageLinkClassName="flex items-center justify-center whitespace-nowrap rounded text-sm font-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary border active:bg-primary active:text-base-0 hover:text-base-0 shadow-sm px-3 py-2 hover:bg-primary"
                previousLinkClassName="flex items-center justify-center rounded text-sm shadow-sm px-3 py-2 border hover:text-base-0 hover:bg-primary active:bg-primary active:text-white"
                nextLinkClassName="flex items-center justify-center rounded text-sm shadow-sm px-3 py-2 border hover:text-base-0 hover:bg-primary active:bg-primary active:text-white"
                breakLabel="..."
                breakLinkClassName="flex items-center justify-center whitespace-nowrap rounded text-sm font-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary border active:bg-primary active:text-white shadow-sm px-3 py-2"
                pageCount={pageCount}
                marginPagesDisplayed={1}
                pageRangeDisplayed={4}
                onPageChange={handlePageChange}
                forcePage={currentPage}
                disabledLinkClassName="opacity-50 pointer-events-none"
            />
        </div>
    );
};

export default Pagination;
