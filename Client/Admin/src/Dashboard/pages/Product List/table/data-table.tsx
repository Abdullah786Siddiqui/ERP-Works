import * as React from "react"
import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
  type VisibilityState,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, Columns2, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {  PlusCircle, Search, SlidersHorizontal } from "lucide-react";
const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@example.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@example.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@example.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@example.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@example.com",
  },
]

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export default function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-2">
        <Input
          placeholder="Search products..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
         {/* Product Filter */}
     <div className="flex  items-center justify-between gap-4 w-full px-2">
      {/* Left side filters */}
      <div className="flex items-center gap-2">
    

        {/* Status Filter */}
        <DropdownMenu >
         <DropdownMenuTrigger asChild>
  <div className="flex items-center gap-1 px-3 py-1.5  cursor-pointer hover:bg-gray-100 border border-gray-300 rounded-md text-sm">
    <PlusCircle className="h-4 w-4" />
    Status
  </div>
</DropdownMenuTrigger>
  <DropdownMenuContent className="w-52 py-2 bg-white shadow-md rounded-md">
  {/* Header */}
  <p className="px-3 py-2 text-sm font-semibold text-gray-700">Status</p>
  <hr className="border-gray-200" />

  {/* Status Checkboxes */}
  <div className="px-3 py-1 space-y-1 text-sm">
    {["Active", "Inactive", "Out of Stock", "Closed for Sale"].map((status) => (
      <label
        key={status}
        className="flex items-center justify-between px-2 py-1 rounded hover:bg-gray-100 cursor-pointer transition-colors"
      >
        <span>{status}</span>
        <Checkbox />
      </label>
    ))}
  </div>

  <DropdownMenuSeparator className="my-2" />

  {/* Action Button */}
  <div className="px-3 ">
    <Button className="w-full" size="sm" variant="default">
      Apply Filters
    </Button>
  </div>
</DropdownMenuContent>


        </DropdownMenu>

        {/* Category Filter */}
       <DropdownMenu>
<DropdownMenuTrigger asChild>
  <div className="flex items-center gap-1 px-3 py-1.5  cursor-pointer hover:bg-gray-100 border border-gray-300 rounded-md text-sm">
    <PlusCircle className="h-4 w-4" />
    Category
  </div>
</DropdownMenuTrigger>


 <DropdownMenuContent className="w-60 py-2">
  {/* Search Input with Icon */}
    <div className="relative">
        <Search
          className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
          size={16}
        />
        <Input
          type="text"
          placeholder="Search categories..."
          className="pl-7 text-sm border-b border-gray-300 focus:border-blue-500 focus:ring-0"
        />
      </div>
      <hr className="my-2 border-gray-300" />
    


  {/* Categories with Checkbox */}
  <div className="px-2 space-y-1 text-sm">
    <label className="flex items-center justify-between hover:bg-gray-100 rounded p-1 cursor-pointer">
      <span>Electronics</span>
      <Checkbox />
    </label>

    <label className="flex items-center justify-between hover:bg-gray-100 rounded p-1 cursor-pointer">
      <span>Clothings</span>
      <Checkbox />
    </label>

    <label className="flex items-center justify-between hover:bg-gray-100 rounded p-1 cursor-pointer">
      <span>Accessories</span>
      <Checkbox />
    </label>

    <label className="flex items-center justify-between hover:bg-gray-100 rounded p-1 cursor-pointer">
      <span>Home & Living</span>
      <Checkbox />
    </label>
  </div>

  <DropdownMenuSeparator className="my-2" />

  {/* Action Button */}
  <div className="px-2">
    <Button className="w-full cursor-pointer" size="sm" variant="default">
      Apply Filters
    </Button>
  </div>
</DropdownMenuContent>

</DropdownMenu>


        {/* Price Filter */}
   <Select>
  <SelectTrigger className="w-[180px] border border-gray-300">
    <SelectValue  placeholder="Select price ">
      Price: $100-$200
    </SelectValue>
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="100-200">$100 - $200</SelectItem>
    <SelectItem value="200-300">$200 - $300</SelectItem>
    <SelectItem value="300-400">$300 - $400</SelectItem>
  </SelectContent>
</Select>

      </div>

   
  
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
  <span className="hidden md:flex items-center gap-2 flex-row">Columns <Columns2 /> </span>
  
  <span className="inline md:hidden">
    <Columns2 />
  </span>
             
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
          </div>
      </div>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
