// ProposalTable.js
import React from 'react'
import {
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
    flexRender,
    ColumnDef,
} from '@tanstack/react-table'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import CustomWidgetCard from '@/components/cards/custom-widget-card';


interface CustomMeta {
    align?: 'left' | 'center' | 'right';
}

export interface TableProps<TData> {
    columns: any[];  // Changed from ColumnDef<TData>[] to any[] to accept the column helper type
    data: TData[];
    pageSize?: number;
}

function Table<TData>({ columns, data, pageSize = 6 }: TableProps<TData>) {
    const [pageIndex, setPageIndex] = React.useState(0)

    const table = useReactTable({
        data: data?.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize),
        columns,
        pageCount: Math?.ceil(data?.length / pageSize),
        state: {
            pagination: {
                pageIndex,
                pageSize,
            },
        },
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        manualPagination: true,
    })
    return (
        <CustomWidgetCard title="Proposal History" shadow='left' className='w-full'>
            <div className='p-3'>
                {/* Table container with fixed width and overflow */}
                <div className="relative w-24 min-w-full  overflow-x-auto min-h-64">
                    <table className="min-w-full table-auto text-left whitespace-nowrap">
                        <thead className="text-green-lighter text-sm font-medium">
                            {table?.getHeaderGroups()?.map(headerGroup => (
                                <tr key={headerGroup.id}>
                                    {headerGroup?.headers?.map(header => (
                                        <th
                                            key={header.id}
                                            className={`py-2 px-3 text-${(header?.column?.columnDef?.meta as CustomMeta)?.align || 'left'}`}
                                            style={{ width: header?.getSize() }}
                                        >
                                            {flexRender(header?.column?.columnDef?.header, header?.getContext())}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody className="">
                            {table?.getRowModel()?.rows?.map(row => (
                                <tr key={row.id}>
                                    {row?.getVisibleCells()?.map(cell => (
                                        <td
                                            key={cell.id}
                                            className={`py-2 px-3 text-${(cell?.column?.columnDef?.meta as CustomMeta)?.align || 'left'} text-sm font-medium text-black-light`}
                                            style={{ width: cell?.column?.getSize() }}
                                        >
                                            {flexRender(cell?.column?.columnDef?.cell, cell?.getContext())}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-between items-center mt-4 px-3">
                    <button
                        onClick={() => setPageIndex(old => Math?.max(old - 1, 0))}
                        disabled={pageIndex === 0}
                        className="bg-white text-black-light px-2 py-1 rounded disabled:opacity-50"
                    >
                        <FaArrowLeft />
                    </button>
                    <span className="text-black-light text-sm font-medium">
                        {pageIndex + 1}/{Math?.ceil(data?.length / pageSize)}
                    </span>
                    <button
                        onClick={() => setPageIndex(old => old + 1)}
                        disabled={(pageIndex + 1) * pageSize >= data?.length}
                        className="bg-white text-black-light px-2 py-1 rounded disabled:opacity-50"
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </CustomWidgetCard>
    )
}

export default Table
