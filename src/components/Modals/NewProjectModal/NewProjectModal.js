import React, { useState, useEffect } from 'react'
import BasicModal from '../../common/BasicModal/BasicModal'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'

const defaultInputValues = {
    name: '',
    manager: '',
    phase1: '',
    phase2: '',
    phase3: ''
};

const NewUserModal = ({ open, onClose, addNewProject }) => {
    const [values, setValues] = useState(defaultInputValues);

    const modalStyles = {
        inputFields: {
            display: 'flex',
            flexDirection: 'column',
            marginTop: '20px',
            marginBottom: '15px',
            '.MuiFormControl-root': {
                marginBottom: '20px',
            },
        },
    };

    //const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Project name is required')
            .min(10, 'Project name must be at least 10 characters'),
        manager: Yup.string()
            .required('Manager name is required')
            .min(4, 'Manager name must be at least 4 characters'),
        phase1: Yup.string()
            .required('Phase 1 name is required')
            .min(4, 'Phase 1 must be at least 4 characters'),
        phase2: Yup.string(),
        phase3: Yup.string(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const addProject = (data) => {
        addNewProject(data);
    };

    const handleChange = (value) => {
        setValues(value)
    };

    useEffect(() => {
        if (open) setValues(defaultInputValues);
    }, [open])

    const getContent = () => (
        <Box sx={modalStyles.inputFields}>
            <TextField
                placeholder="Name projects"
                name="name"
                label="Name projects"
                required
                {...register('name')}
                error={errors.name ? true : false}
                helperText={errors.name?.message}
                value={values.name}
                onChange={(event) => handleChange({ ...values, name: event.target.value })}
            />
            <TextField
                placeholder="Manager"
                name="manager"
                label="Manager"
                required
                {...register('manager')}
                error={errors.manager ? true : false}
                helperText={errors.manager?.message}
                value={values.manager}
                onChange={(event) => handleChange({ ...values, manager: event.target.value })}
            />
            <TextField
                placeholder="Phase 01"
                name="phase1"
                label="Phase 01"
                required
                {...register('phase1')}
                error={errors.phase1 ? true : false}
                helperText={errors.phase1?.message}
                value={values.phase1}
                onChange={(event) => handleChange({ ...values, phase1: event.target.value })}
            />
            <TextField
                placeholder="Phase 02"
                name="phase2"
                label="Phase 02"
                required
                {...register('phase2')}
                error={errors.phase2 ? true : false}
                helperText={errors.phase2?.message}
                value={values.phase2}
                onChange={(event) => handleChange({ ...values, phase2: event.target.value })}
            />
            <TextField
                placeholder="Phase 03"
                name="phase3"
                label="Phase 03"
                required
                {...register('phase3')}
                error={errors.phase3 ? true : false}
                helperText={errors.phase3?.message}
                value={values.phase3}
                onChange={(event) => handleChange({ ...values, phase3: event.target.value })}
            />
        </Box>
    );
    
    return (
        <BasicModal
            open={open}
            onClose={onClose}
            title="New user"
            subTitle="Fill out inputs and hit 'submit' button."
            content={getContent()}
            onSubmit={handleSubmit(addProject)}
        />
            
    )
}

export default NewUserModal
