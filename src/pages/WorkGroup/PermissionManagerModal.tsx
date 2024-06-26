import React, { useEffect, useState } from 'react'
import { Button, Dialog, DialogContent, DialogActions, Grid } from '@mui/material';
import axios from '../../utils/axios';
import PermissionsManager from './PermissionsManager';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { TreeNode } from "../../components/tree/TreeNode";
const getTreeApi = '/gts/v1/api/various-data/fetch'

const PermissionManagerModal = ({ onClose, open, entity, webService }: any) => {
    const editPermissionsService = webService + '/componnent/change/';
    const createPermissionsService = webService + '/componnent/create';

    const getWorkGroupPermissions = () => {
        let value = { DataKey: "SelectedWorkgroupComponentIds",workgroupId:entity.id }
       console.log('entity.id =>',entity.id)
        return axios.post(`${getTreeApi}`, {
            //    "json": "[{DataKey:SelectedWorkgroupComponentIds,workgroupId:" + entity.id + "}]"
         "json": `${JSON.stringify(value)}`
           
        }
        ).then(response => {
            console.log('response',response.data)
            if (response.data.result.length 
                // && response.data.result[0].componentIds
                )
             {
                return response.data.result
                //[0].componentIds.map((id: any) => id.toString());
            }
            return [];
        }).catch((e) => {
            console.log('error',e)
           // toast.error("خطا در خواندن دسترسی های گروه کاربری ")
        })
    }

    const { handleSubmit } = useForm({
        defaultValues: entity
    })


      
    

    const [permissions, setPermissions] = useState<Array<string>>([]);
    useEffect(() => {
        var dataCheck:string[] = [];
        getWorkGroupPermissions().then((data) => {
                
            data.map((item: TreeNode) => {
                    item.nodeId = item.systemId;
                    if (item.subSystems) {
                        item.children = item.subSystems.map((subSystem, index) => {
                            subSystem.nodeId = subSystem.subSystemId;
                            if (subSystem.children) {
                                subSystem.children = subSystem.children?.map(c => {
                                    c.nodeId = c.id.toString();
                                    console.log('Node checked : ',c.nodeId)
                                    dataCheck.push(c.nodeId)
                                    return c;
                                });
                            }
                            return subSystem;
                        });
                    }
                    return item;
                })
             setPermissions(dataCheck)

    
        })
    }, [])

    const editPermissions = () => {
        return axios.put(`${editPermissionsService}${entity.id}`, {
            componentIds: permissions
        })
    }

    const createPermissions = () => {
        console.log('permission:',permissions)
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
                    <PermissionsManager onChange={setPermissions} defaultValue={permissions} entity={entity} />
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
