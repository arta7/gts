import * as React from 'react';
import { Button, Dialog, DialogContent, DialogActions, Grid } from '@mui/material';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { TextFieldControl } from '../../components/FormControl/TextFieldControl';
import { CheckboxControl } from '../../components/FormControl/CheckBoxControl';
import PasswordIcon from '../../components/FormControl/PasswordIcon';

export default function UserEditForm({ onClose, open, entity, webService }: any) {
  const { handleSubmit, getValues, formState: { errors }, control } = useForm({
    defaultValues: entity
  });

  const [showPassword, setShowPassword] = React.useState(false);
  const [showRePassword, setShowRePassword] = React.useState(false);

  const onCancel = () => {
    onClose()
  }

  const onSubmit = () => {
    let promise;
    const entityToSave = getValues();
    // console.log('OnSubmit ', entityToSave)
    if (entity.id) {
      promise = axios.put(`${webService}/change/${entity.id}`, entityToSave);
    }
    else {
      promise = axios.post(`${webService}/register`, entityToSave);
    }
    promise.then((response) => {
      onClose(true);
    });
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate={true}>
        <DialogContent>
          <Grid container gap={2}>
            <Grid item md={5} sm={12}>
              <TextFieldControl name='userName' label='نام کاربری' control={control} fullWidth={true} required={true} errors={errors} />
            </Grid>
            <Grid item md={5} sm={12}>
            </Grid>
            <Grid item md={5} sm={12}>
              <TextFieldControl name='password' label='کلمه عبور' control={control} type={showPassword ? 'text' : 'password'} errors={errors}
                InputProps={{ endAdornment: <PasswordIcon showPassword={showPassword} setShowPassword={setShowPassword} /> }} />
            </Grid>
            <Grid item md={5} sm={12}>
              <TextFieldControl name='rePassword' label='تکرار کلمه عبور' control={control} errors={errors}
                rules={{
                  validate: {
                    matchesPreviousPassword: (value: string) => {
                      const { password } = getValues();
                      return password === value || "مقدار با پسورد برابر نیست";
                    }
                  }
                }}
                type={showRePassword ? 'text' : 'password'}
                InputProps={{ endAdornment: <PasswordIcon showPassword={showRePassword} setShowPassword={setShowRePassword} /> }} />
            </Grid>
            <Grid item md={5} sm={12}>
              <TextFieldControl name='firstName' label='نام' control={control} errors={errors} required={true} rules={{ required: true }} />
            </Grid>
            <Grid item md={5} sm={12}>
              <TextFieldControl name='lastName' label='نام خانوادگی' control={control} errors={errors} required={true} rules={{ required: true }} />
            </Grid>
            <Grid item md={5} sm={12}>
              <TextFieldControl name='nationalCode' label='کد ملی' control={control} errors={errors} />
            </Grid>
            <Grid item md={5} sm={12}>
              <TextFieldControl name='personelCode' label='کد پرسنلی' control={control} errors={errors} />
            </Grid>
            <Grid item md={5} sm={12}>
              <TextFieldControl name='cellPhoneNumber' label='شماره همراه' type='mobileNumber' control={control} errors={errors} required={true}/>
            </Grid>
            <Grid item md={5} sm={12}>
              <TextFieldControl type="email" name='email' label='ایمیل' control={control} errors={errors} required={true} />
            </Grid>
            <Grid item md={8} sm={12}>
              <TextFieldControl multiline name='address' label='آدرس' required={true} control={control} errors={errors} />
            </Grid>
            <Grid item md={3} sm={12}>
              <CheckboxControl name='isActive' label='فعال' control={control} errors={errors} />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button type="submit">{'ثبت'}</Button>
          <Button onClick={onCancel}>{'انصراف'}</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

