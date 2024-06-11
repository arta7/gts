import { Group } from "@mui/icons-material";
import { Box } from "@mui/material";
import axios from "axios";
import React from "react";
import { useLoaderData, useRevalidator } from "react-router-dom";
import useConfirmDialog from "../../components/ConfirmDialog/UseConfirmDialog";
import Grid, { CustomAction } from "../../components/grid/Grid";
import UserEditForm from "./UserEditForm";

export type User = {
    id: number | null,
    userName: string,
    password: string,
    rePassword: string,
    firstName: string,
    lastName: string,
    nationalCode: string,
    personelCode: string,
    cellPhoneNumber: string,
    email: string,
    address: string,
    isActive: boolean
};

const createUser: () => User = () => ({
    id: null,
    userName: '',
    password: '',
    rePassword: '',
    firstName: '',
    lastName: '',
    nationalCode: '',
    personelCode: '',
    cellPhoneNumber: '',
    email: '',
    address: '',
    isActive: true
});

const webService = '/user/v1/api';
export function loader() {
    return axios.get(`${webService}/inquiry`).then(response => {
        return response.data.result;
    })
};

export default function UserList() {
    const [open, setOpen] = React.useState(false);
    const [entity, setEntity] = React.useState<User>();

    const rows = useLoaderData()
    let revalidator = useRevalidator();
    const { confirm } = useConfirmDialog();

    const reloadData = () => revalidator.revalidate();

    const openModal = (entity: User) => {
        setEntity(entity);
        setOpen(true);
    };
    const handleCloseModal = (submit: any) => {
        setOpen(false);
        if (submit) {
            reloadData();
        }
    };

    const onAdd = () => {
        openModal(createUser());
    }
    const onEdit = (rowEntity: User) => {
        openModal(rowEntity);
    };

    const customAction: CustomAction = {
        method: (row: User) => {
            console.log("SetWorkGroup ", row);
        },
        icon: <Group />,
        tooltip: 'تعیین گروه کاری'
    }

    const columns = [
        {
            accessorKey: 'userName',
            header: 'نام کاربری'
        },
        {
            accessorKey: 'firstName',
            header: 'نام'
        },
        {
            accessorKey: 'lastName',
            header: 'نام خانوادگی'
        },
        {
            accessorKey: 'nationalCode',
            header: 'کد ملی'
        },
        {
            accessorKey: 'personelCode',
            header: 'کد پرسنلی'
        },
        {
            accessorKey: 'cellPhoneNumber',
            header: 'شماره همراه'
        },
        {
            accessorKey: 'email',
            header: 'ایمیل'
        },
        {
            accessorKey: 'isActive',
            header: 'فعال',
            meta: {
                type: 'boolean'
            }
        }
    ]

    const onDelete = (entity: User) => {
        confirm(`آیا میخواهید کاربر ${entity.userName} را حذف کنید؟`).then((isConfirmed) => {
            if (isConfirmed) {
                axios.delete(`${webService}/remove/${entity.id}`).then(() => {
                    reloadData();
                });
            }
        })
    }

    return <Box padding={2}>
        <Grid columns={columns} rows={rows} addRowNumber={true} onAdd={onAdd} onEdit={onEdit} onDelete={onDelete} customAction={customAction} paging={true} enableFilters={true}/>
        {
            open && <UserEditForm open={open} entity={entity} onClose={handleCloseModal} webService={webService} />
        }
    </Box>
}