import { Checkbox, FormControlLabel } from "@mui/material"
import { Controller } from "react-hook-form"

export const CheckboxControl = ({ name, label, control }: any) => {
    return <FormControlLabel sx={{cursor:'pointer'}} control={<Controller name={name} control={control} render={({ field }) =>
        <Checkbox {...field} id={name} onChange={(e) => field.onChange(e.target.checked)} checked={field.value} />
    } />} label={label} />
}