import React, { Fragment } from "react";

import Pagination from "./PaginateTable";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

const TaskTable = (props) => {
  const columnHelper = createColumnHelper();
  const columns = [
    columnHelper.group({
      header: " ",
      footer: (props) => props.column.id,
      columns: [
        columnHelper.accessor((row) => row?.id, {
          id: "id",
          cell: (info) => info.getValue(),
          header: () => <span>ID</span>,
          footer: (props) => props.column.id,
        }),
        columnHelper.accessor((row) => row?.name, {
          id: "name",
          cell: (info) => info.getValue(),
          header: () => <span>Name</span>,
          footer: (props) => props.column.id,
        }),
        columnHelper.accessor((row) => row?.description, {
          id: "description",
          cell: (info) => info.getValue(),
          header: () => <span>Description</span>,
          footer: (props) => props.column.id,
        }),
        columnHelper.accessor((row) => row?.due_date, {
          id: "due_date",
          cell: (info) => info.getValue(),
          header: () => <span>due_date</span>,
          footer: (props) => props.column.id,
        }),
        columnHelper.accessor((row) => row?.estimated_time, {
          id: "estimated_time",
          cell: (info) => info.getValue(),
          header: () => <span>estimated_time</span>,
          footer: (props) => props.column.id,
        }),
        columnHelper.accessor((row) => row.status, {
          id: "status",
          cell: (info) => {
            const status = info.getValue();
            return status === 0
              ? "To Do"
              : status === 1
                ? "In Progress"
                : status === 2
                  ? "Done"
                  : null;
          },
          header: () => <span>Status</span>,
          footer: (props) => props.column.id,
        }),
      ],
    }),
  ];

  const table = useReactTable({
    columns,
    data: props?.tasks,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });
  console.log(table.getHeaderGroups());
  return (
    <Fragment>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        fetchData={props.fetchData}
        page={props.page}
        pages={props.pages}
      />
    </Fragment>
  );
};

export default TaskTable;
