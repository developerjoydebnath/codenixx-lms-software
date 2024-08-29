import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { show_toast } from "@/utils/show_toast";
import { IconCloudDownload, IconCopy, IconFileTypeCsv, IconFileTypeXls } from "@tabler/icons-react";
import CopyToClipboard from "react-copy-to-clipboard";
import { CSVLink } from "react-csv";

import * as XLSX from "xlsx/xlsx.mjs";

function ExportFile({ columnOrder, table, data }) {
    // xlsx file export handler
    const handleXlsxDownload = () => {
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet(data);

        XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
        XLSX.writeFile(wb, "data.xlsx");
    };

    // create headers for export table to pdf
    const createHeaders = (keys) => {
        const result = [];

        // eslint-disable-next-line no-restricted-syntax
        for (const key of keys) {
            result.push({
                id: key,
                name: key,
                prompt: key,
            });
        }

        return result;
    };

    // table to pdf export handler
    // const exportPdf = () => {
    //     const headers = createHeaders(columnOrder);

    //     // eslint-disable-next-line new-cap
    //     const doc = new jsPDF({ orientation: 'landscape' });

    //     const tableData = data?.map(row => {
    //         let obj = {};

    //         for (let el in row) {
    //             console.log(el, obj[el], row[el]);
    //             obj[el] = row[el]?.toString();
    //         }
    //         console.log(obj);
    //         return obj;
    //         return row;
    //     });

    //     console.log(tableData, headers);

    //     doc.table(1, 1, tableData, headers, { autoSize: true });

    //     doc.save('data.pdf');
    // };

    const formatDataForCopy = (d) => {
        if (data?.length > 0) {
            let copyData = `${Object?.keys(data[0]).join("\t")}\n`;

            d.forEach((item, index, arr) => {
                copyData += `${Object?.values(arr[index]).join("\t")}\n`;
            });

            return copyData;
        }
    };

    // copy full data of table handler
    const handleCopy = () => {
        show_toast("success", "Copied to Clipboard");
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="secondary" className="text-base-400" disabled={data?.length <= 0}>
                    <IconCloudDownload size={20} className="mr-2" />
                    <span>Export</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-full">
                <DropdownMenuGroup>
                    <CopyToClipboard text={formatDataForCopy(data)} onCopy={handleCopy}>
                        <DropdownMenuItem className="cursor-pointer">
                            <button type="button" className="flex items-center gap-1 text-base-400">
                                <IconCopy size={18} />
                                <span>Copy</span>
                            </button>
                        </DropdownMenuItem>
                    </CopyToClipboard>
                    <CSVLink data={data} filename="Table_Data">
                        <DropdownMenuItem className="flex cursor-pointer items-center gap-1 text-base-400">
                            <IconFileTypeCsv className="text-base-400" size={18} />
                            <span>Csv</span>
                        </DropdownMenuItem>
                    </CSVLink>
                    <DropdownMenuItem
                        onClick={handleXlsxDownload}
                        className="flex cursor-pointer items-center gap-1 text-base-400"
                    >
                        <IconFileTypeXls className="text-base-400" size={18} />
                        <span>Xlsx</span>
                    </DropdownMenuItem>
                    {/* <DropdownMenuItem
                        onClick={exportPdf}
                        className="flex cursor-pointer items-center gap-1 text-base-400">
                        <IconFileTypePdf className="text-base-400" size={18} />
                        <span>Pdf</span>
                    </DropdownMenuItem> */}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default ExportFile;
