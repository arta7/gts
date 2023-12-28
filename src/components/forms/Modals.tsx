import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  Grid,
  RadioGroup,
  Modal,
  Box,
  Typography,
} from '@mui/material'
//@ts-ignore
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { Input } from '../inputs/TextField'
import { useEffect, useState } from 'react'
import HRMSwal from '../../utils/Swal'
import { getFromObject, setInObject } from '../../utils/helpers'
import { getServerError } from '../../utils/axios'
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 10,
  borderRadius: '5px',
  pt: 1,
  px: 2,
  pb: 1,
}
export default function Modals({
  onClose,
  open,
  entity: initialData,
  fields,
  setOpen,
  sectionId,
  masterId,
  masterParentId,
  idparam,
  subId,
  componentName,
}: any) {
  const [tabControl, setControl] = useState(false)
  const initialState = {}
  if (Object.keys(initialData).length) {
    console.log('fields : ',fields)
    if (fields.length) {
      fields.forEach((fi: any) => {
        if (fi.uiComponentType === 'MultiSelectDropDown') {
          const _v: any =
            initialData && Object.keys(initialData).length
              ? getFromObject(initialData, fi.aliasName)
              : []
          const valueSelectMulti = _v.map((item: any) => {
            return item[fi.valueIndicator || 'value']
          })
          setInObject(initialState, fi.aliasName, {
            value: valueSelectMulti,
          })
        } else if (fi.uiComponentType === 'CheckBox') {
  
          const _v: any =
           initialData&& Object.keys(initialData).length&&getFromObject(initialData, fi.aliasName)
              ?getFromObject(initialData, fi.aliasName)
              : false
          setInObject(initialState, fi.aliasName, _v)
          
        } else {
          const _v: any =
            initialData && Object.keys(initialData).length
              ? getFromObject(initialData, fi.aliasName)
              : ''
          setInObject(initialState, fi.aliasName, _v)
        }
      })
    }
  }

  const {
    handleSubmit,
    getValues,
    watch,
    setValue,
    register,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: initialState,
  })
  const createUrl = '/gts/v1/api/component-data/create'
  const watchAllFields = watch()
  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      setControl(name ? true : false)
      setSwalOpen(tabControl)
    })
  }, [watch])
  const [swalOpen, setSwalOpen] = useState(false)
  const onCancel = () => {
    setSwalOpen(false)
  }
  const onSubmit = () => {
    const data = getValues()
    console.log('data : ',data)
    let state = {}
    fields
      .filter((i: any) => i.useInSaveMethod === true)
      .forEach((fi: any) => {
        if (fi.aliasName.includes('subSystemId')) {
          setInObject(state, fi.aliasName, subId)
        } else if (fi.aliasName.includes('componentId')) {
          setInObject(state, fi.aliasName, sectionId)
        } else if (fi.aliasName.includes('masterParentId')) {
          setInObject(state, fi.aliasName, masterParentId)
        } else if (fi.uiComponentType === 'MultiSelectDropDown') {
          const _v: any =
            data && Object.keys(data).length
              ? getFromObject(data, fi.aliasName)
              : []
          const valueSelectMulti = _v.map((item: any) => {
            return item[fi.valueIndicator || 'value']
          })
          setInObject(state, fi.aliasName, {
            value: valueSelectMulti,
          })
        } else if (fi.uiComponentType === 'DropDown') {
          const _v: any =
            data && Object.keys(data).length
              ? getFromObject(data, fi.aliasName) === ''
                ? null
                : getFromObject(data, fi.aliasName).value
              : null

          setInObject(state, fi.aliasName, _v)
        } else if (fi.uiComponentType === 'CheckBox') {
            let _v: any =
            data && Object.keys(data).length&&getFromObject(data, fi.aliasName)
              ? getFromObject(data, fi.aliasName): false
          setInObject(state, fi.aliasName, _v)
          
        } else if (fi.validationRule === "Numeric") {
          let _v: any =
            data && Object.keys(data).length&&getFromObject(data, fi.aliasName)
              ? getFromObject(data, fi.aliasName): 0
          setInObject(state, fi.aliasName, _v)
        } else {
          const _v: any =
            data && Object.keys(data).length
              ? getFromObject(data, fi.aliasName) === ''
                ? null
                : getFromObject(data, fi.aliasName)
              : null

          setInObject(state, fi.aliasName, _v)
        }
      })
    if (idparam == 0) {
      if (
        Object.keys(state).length ===
        fields.filter((i: any) => i.useInSaveMethod === true).length
      ) {
        if (
          Object.keys(state).length ===
          fields.filter((i: any) => i.useInSaveMethod === true).length
        ) {
         // console.log('JSON.stringify(state)',JSON.stringify(state))
          axios
            .post(createUrl, {
              componentId: sectionId,
              json: `${JSON.stringify(state)}`,
            })
            .then((res) => {
              if (res.data.detail) {
                toast.success(res.data.detail.success)
              } else if (res.status === 201) {
                toast.success('اطلاعات پرونده با موفقیت ثبت شد')
              } else if (res.status === 200) {
                toast.success('اطلاعات پرونده با موفقیت ثبت شد')
              } else if (res.status === 204) {
                toast.success('اطلاعات پرونده با موفقیت ثبت شد')
              }
              onClose()
              setControl(false)
            })
        }
      }
    }
    if (idparam != 0) {
      if (
        Object.keys(state).length ===
        fields.filter((i: any) => i.useInSaveMethod === true).length
      ) {
        if (
          Object.keys(state).length ===
          fields.filter((i: any) => i.useInSaveMethod === true).length
        ) {
          axios
            .post(createUrl, {
              componentId: sectionId,
              json: `${JSON.stringify(state)}`,
            })
            .then((res) => {
              if (res.data.detail) {
                toast.success(res.data.detail.success)
              } else if (res.status === 201) {
                toast.success('اطلاعات پرونده با موفقیت ثبت شد')
              } else if (res.status === 200) {
                toast.success('اطلاعات پرونده با موفقیت ثبت شد')
              } else if (res.status === 204) {
                toast.success('اطلاعات پرونده با موفقیت ثبت شد')
              }
              onClose()
              setControl(false)
            })
        }
      }
    }
  }
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <form onSubmit={handleSubmit(onSubmit)} noValidate={true}>
        <DialogContent>
          <Grid container spacing={2} sx={{ width: '100%' }}>
            {fields.map((field: any) => {
              const Component = field.Component ? field.Component : Input
              return (
                <Component
                  {...field}
                  masterFieldAliasName={field.S00_field[0]?.masterFieldAliasName}
                  control={control}
                  key={field.aliasName}
                  defaultValues={initialState}
                  errors={errors}
                  getValues={getValues}
                  setValue={setValue}
                  register={register}
                  componentName={componentName}
                  masterParentId={masterParentId}
                  masterId={initialData.masterId}
                />
              )
            })}
          </Grid>
        </DialogContent>
        <DialogActions sx={{ marginRight: '2.5rem', marginBottom: '1.5rem' }}>
          <Button type="submit" variant="contained" size="medium">
            {'ثبت'}
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              tabControl ? setSwalOpen(true) : onClose()
            }}
            size="medium"
          >
            {'انصراف'}
          </Button>
          <Modal hideBackdrop open={swalOpen} onClose={onCancel}>
            <Box sx={{ ...style }}>
              <Typography variant="h6" mb="0.5rem">
                آیا مطمئن هستید؟
              </Typography>
              <Typography fontSize="0.8rem" mb="0.5rem">
                اطلاعات فرم تغییر یافته، در صورت خروج اطلاعات شما ذخیره نمی شود!
              </Typography>
              <DialogActions sx={{ marginBottom: '0.5rem' }}>
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => {
                    setControl(false)
                    setSwalOpen(false)
                    onClose()
                  }}
                >
                  بله
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => {
                    setControl(false)
                    setSwalOpen(false)
                    setOpen(true)
                  }}
                >
                  خیر
                </Button>
              </DialogActions>
            </Box>
          </Modal>
        </DialogActions>
      </form>
    </Dialog>
  )
}
