import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import * as React from 'react';
import { useState } from 'react';

export interface Option {
    label: string;
    id: number;
}

export type AsyncComboProps = {
    label: string,
    value?: any,
    onChange?: (value: number | null) => void,
    url: string,
    body?: object,
    loadDataByPostMethod?: boolean,
    helperText?: string,
    error?: boolean,
    getOptionLabel?: (option: any) => string,
    variant?: 'filled' | 'outlined' | 'standard',
    required?:boolean
    setFilterValue?: any
    disabled?:boolean,
    UserValue:any
};

export default function AsyncCombo(props: AsyncComboProps) {
    const { label, value:defautValue, onChange, url, helperText, error,setFilterValue,disabled, getOptionLabel ,variant,required,loadDataByPostMethod,body,UserValue} = props;
    const [open, setOpen] = useState(false);
    const [options, setOptions] = React.useState<readonly Option[]>([]);
    const [value, setValue] = React.useState<Option | null>(null);
    const [loading, setLoading] = useState(false);
    const [firstLoad, setFirstLoad] = useState(true);

    const loadData = () => {
        setLoading(true)
        console.log('url : => ',loadDataByPostMethod)
        if(url != '')
        {
        if (!loadDataByPostMethod) {
            return axios.get(url).then((res) => {
                console.log('res :=>',res)
                const _options = res.data !="" ? res.data.result:[];
                setOptions(_options);
                setLoading(false);
                if (firstLoad) {
                    setFirstLoad(false)
                }
                if (firstLoad && defautValue!= null) {
                    const selected = _options.find((o: Option) => o.id == defautValue)
                    setValue(selected)
                }
            }).catch((err: any) => {
                console.log('error',err)
                setLoading(false)
                if (firstLoad) {
                    setFirstLoad(false)
                }
            });
        } else if (loadDataByPostMethod) {
            return axios.post(url,body).then((res) => {
                const _options = res.data !="" ? res.data.result:[];
                setOptions(_options);
                setLoading(false);
                if (firstLoad) {
                    setFirstLoad(false)
                }
                if (firstLoad && defautValue!== null) {
                    const selected = _options.find((o: Option) => o.id == defautValue)
                    setValue(selected)
                }
            }).catch((err: any) => {
                setLoading(false)
                if (firstLoad) {
                    setFirstLoad(false)
                }
            });
        }
    }
    else
    {  setOptions(UserValue);
        // setValue(UserValue)
        setFirstLoad(false)
        setLoading(false);
    }

    }

    React.useEffect(() => {
        if (firstLoad && defautValue != null) {
            loadData();
        }
    }, []);


    React.useEffect(() => {

        if ((open)) {
            loadData();
        }
    }, [open]);
    React.useEffect(() => {
       // setValue(null)
    }, [options,disabled]);

    return (
        <Autocomplete
            
            value={value}
            onChange={(event: any, newValue: Option | null) => {
                 console.log('id',newValue)
                setValue(newValue)
                if (setFilterValue) {
                   setFilterValue(newValue?.id) 
                }
                if (onChange) {
                    onChange(newValue?.id || null);
                }
                console.log('tets')
            }}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            isOptionEqualToValue={(option, value) => option?.id === value?.id}
            getOptionLabel={getOptionLabel}
            options={options}
            loading={loading}
            loadingText="در حال بارگذاری"
            noOptionsText="موردی یافت نشد."
            fullWidth={true}
            size={'small'}
            disabled={disabled}
            renderInput={(params) => (
                <TextField
                    variant={variant?variant:'standard'}
                    {...params}
                    required={required}
                    helperText={helperText}
                    error={error}
                    label={label}
                    value={value}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    );
}