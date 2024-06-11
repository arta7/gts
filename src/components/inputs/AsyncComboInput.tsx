import React from 'react'
import { Control, Controller, ControllerProps } from 'react-hook-form'
import AsyncCombo, { AsyncComboProps } from '../AsyncCombo'

type AsyncComboInput = {
    control: Control
    name: string
    label: string
    rules?: ControllerProps['rules']
    required?: boolean
    
}

const AsyncComboInput = ({ control, name, rules, required,setFilterValue, ...rest }: AsyncComboInput & AsyncComboProps) => {
    const validationRules: ControllerProps['rules'] = {
        ...rules,
        ...(required && {
            required: required,
        }),
    }
    return (
        <Controller
            name={name}
            control={control}
            rules={validationRules}
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => {
                return <AsyncCombo   {...rest} setFilterValue={setFilterValue}
                value={value} onChange={onChange}     required={required} error={!!error} helperText={error ? error.message : ''} />
            }} />
    )
}

export default AsyncComboInput