import React, { useEffect, useState } from 'react'
import { Button, Dialog, DialogContent, DialogActions, Grid } from '@mui/material';
import axios from '../../utils/axios';
import PermissionsManager from './PermissionsManager';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const getTreeApi = '/gts/v1/api/various-data/fetch'

const PermissionManagerModal = ({ onClose, open, entity, webService }: any) => {
    const editPermissionsService = webService + '/componnent/change/';
    const createPermissionsService = webService + '/componnent/create';

    const getWorkGroupPermissions = () => {
        return axios.post(`${getTreeApi}`, {
            "json": "[{\"DataKey\":\"SelectedWorkgroupComponentIds\",\"workgroupId\":" + entity.id + "}]"
        }
        ).then(response => {
            if (response.data.result && response.data.result.length && response.data.result[0].componentIds) {
                return response.data.result[0].componentIds.map((id: any) => id.toString());
            }
            return [];
        }).catch(() => {
            toast.error("خطا در خواندن دسترسی های گروه کاربری ")
        })
    }

    const { handleSubmit } = useForm({
        defaultValues: entity
    });

    const [permissions, setPermissions] = useState<Array<string>>([]);
    useEffect(() => {
        getWorkGroupPermissions().then((data) => {
            setPermissions(data || [])
        })
    }, [])

    const editPermissions = () => {
        return axios.put(`${editPermissionsService}${entity.id}`, {
            componentIds: permissions
        })
    }

    const createPermissions = () => {
        return axios.post(`${createPermissionsService}`, {
            workgroupId: entity.id,
            componentIds: permissions
        })
    }



    const onSubmit = () => {
        let promise = createPermissions();
        promise.then((response) => {
            onClose(true);
        });
    }
    const onCancel = () => {
        onClose()
    }
    return (
        <Dialog open={open} maxWidth={'lg'} onClose={onClose} fullWidth={true}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate={true}>
                <DialogContent>
                    <PermissionsManager onChange={setPermissions} defaultValue={permissions} />
                </DialogContent>

                <DialogActions>
                    <Button type="submit">{'ثبت'}</Button>
                    <Button onClick={onCancel}>{'انصراف'}</Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default PermissionManagerModal
