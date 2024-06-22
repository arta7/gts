import { Checkbox, FormControlLabel } from "@mui/material"
import { Controller } from "react-hook-form"

export const CheckboxControl = ({ name, label, control,onchange,currentValue }: any) => {

    return <FormControlLabel sx={{cursor:'pointer'}} control={<Controller name={name} control={control} render={({ field }) =>
        <Checkbox {...field} id={name} onChange={onchange
        
        } checked={currentValue != null ?  currentValue=== name ? true:false : field.value } />
    } />} label={label} />
}