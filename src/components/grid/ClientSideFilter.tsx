import { Column, Table } from "@tanstack/react-table";
import React,{useEffect} from "react";
import { DebouncedInput } from "./DebounceInput";
import DateInput from "./DateInput";
import Datepicker from "../DatePicker/DatePicker";

export default function ClientFilter({
    column,
    table
}: {
    column: Column<any, unknown>;
    table: Table<any>;
}) {


    const firstValue = table
        .getPreFilteredRowModel()
        .flatRows[0]?.getValue(column.id);
        var TypeValue =  typeof firstValue; 
        useEffect(()=>{
console.log('table : ',column.columnDef?.meta?.type)
        },[])
        

    const columnFilterValue = column.getFilterValue();
   
    return ( TypeValue=== "number" ? (
        <div>
            <div className="flex space-x-2">
                <DebouncedInput
                    type="number"
                    min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
                    max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
                    value={(columnFilterValue as [number, number])?.[0] ?? ""}
                    onChange={(value: number) =>
                        column.setFilterValue((old: [number, number]) => [value, old?.[1]])
                    }
                    placeholder={`بزرگتر ${column.getFacetedMinMaxValues()?.[0]
                        ? `(${column.getFacetedMinMaxValues()?.[0]})`
                        : ""
                        }`}
                />
                <DebouncedInput
                    type="number"
                    min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
                    max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
                    value={(columnFilterValue as [number, number])?.[1] ?? ""}
                    onChange={(value: number) =>
                        column.setFilterValue((old: [number, number]) => [old?.[0], value])
                    }
                    placeholder={`کوچکتر ${column.getFacetedMinMaxValues()?.[1]
                        ? `(${column.getFacetedMinMaxValues()?.[1]})`
                        : ""
                        }`}
                />
            </div>
        </div>
    ) : column.columnDef?.meta?.type === "date" ?  (
        <DateInput  value={(columnFilterValue ?? "") as Date} onChange={(value) => {
                         console.log('value', new Date(value).toISOString().substring(0,10))
                        // column.setFilterValue(value)
                    }}
                    placeholder={`تاریخ...`}/>
      
           
    ) 
    : (
        <DebouncedInput
            type="text"
            value={(columnFilterValue ?? "") as string}
            onChange={(value) => {
                console.log('value',column)
                // console.log('value',firstValue)
                column.setFilterValue(value)
            }}
            placeholder={`جستجو...`}
        />
    )
    )
}