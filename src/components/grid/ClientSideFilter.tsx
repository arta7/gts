import { Column, Table } from "@tanstack/react-table";
import React,{useEffect, useState} from "react";
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

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    
    const firstValue = table
        .getPreFilteredRowModel()
        .flatRows[0]?.getValue(column.id);
        var TypeValue =  typeof firstValue; 

        const handleStartDateChange = (event) => {
            console.log('event start date : ',event.toISOString())
            setStartDate(event.toISOString());
          };
        
          const handleEndDateChange = (event) => {
            setEndDate(event.toISOString());
          };
        
          const applyDateRangeFilter = () => {
            const startDateAsDate = new Date(startDate);
            const endDateAsDate = new Date(endDate);
          
            // column.setFilterValue((oldDates) => {
            //   // Ensure oldDates is defined by checking for its existence
            //   if (!oldDates) {
            //     oldDates = []; // Initialize with an empty array if undefined
            //   }
          
            //   const newDates = oldDates.filter((dateString) => {
            //     const dateValue = new Date(dateString);
            //     return dateValue >= startDateAsDate && dateValue <= endDateAsDate;
            //   });
          
            //   return newDates;
            // })
          };
     
        
        const compareDates = (filterValue, rowDate) => {
            const filterDate = new Date(filterValue); // Assuming filterValue is a string
            return filterDate.getTime() === rowDate.getTime();
          };
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
        
        <div>
      <DateInput  
        value={startDate}
        onChange={handleStartDateChange}
        placeholder={`تاریخ شروع`}
        
        />
        <DateInput  
        value={endDate}
        onChange={handleEndDateChange}
        placeholder={`تاریخ پایان`}/>
      <button onClick={applyDateRangeFilter}>تایید</button>
    </div>   
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