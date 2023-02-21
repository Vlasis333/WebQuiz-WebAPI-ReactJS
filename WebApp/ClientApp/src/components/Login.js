import React, { useEffect } from "react";
import { Box, Button, Card, CardContent, TextField, Typography } from "@mui/material";
import Center from './Center'
import useForm from "../Hooks/useForm";
import { createAPIEndpoint, ENDPOINTS } from "../api";
import useStateContext from "../Hooks/useStateContext";
import { useNavigate } from "react-router-dom";

const getFreshModelObject = () => ({
    name: '',
    email: ''
})

export default function LogIn() {

    const { context, setContext, resetContext } = useStateContext();
    const navigate = useNavigate();

    const {
        values, setValues, errors, setErrors, handleInputChange
    } = useForm(getFreshModelObject);

    const login = e => {
        e.preventDefault();
        if (validate())
            createAPIEndpoint(ENDPOINTS.participant)
                .post(values)
                .then(response => {
                    setContext({ participantId: response.data.id })
                    navigate('/quiz')
                })
                .catch(err => console.log(err))
    }

    useEffect(() => {
        // resets context API local storage
        resetContext()
    }, [])

    const validate = () => {
        let temp = {}
        temp.email = (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).test(values.email) ? "" : "Email is not valid."
        temp.name = values.name !== "" ? "" : "This field is required."
        setErrors(temp)
        return Object.values(temp).every(x => x === "")
    }

    return (
        <Center>
            <Card sx={{ width: '400' }}>
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="h3" sx={{ my: 3 }}>
                        LogIn
                    </Typography>
                    <Box sx={{
                        '& .MuiTextField-root': {
                            m: 1,
                            width: '90%'
                        }
                    }}>
                        <form noValidate autoComplete="on" onSubmit={login}>
                            <TextField
                                label='Email'
                                name='email'
                                value={values.email}
                                onChange={handleInputChange}
                                variant='outlined'
                                {...(errors.email && { error: true, helperText: errors.email })} />
                            <TextField
                                label='Name'
                                name='name'
                                value={values.name}
                                onChange={handleInputChange}
                                variant='outlined'
                                {...(errors.name && { error: true, helperText: errors.name })} />
                            <Button
                                type='submit'
                                variant='contained'
                                size='large'
                                sx={{ width: '90%' }}>Start</Button>
                        </form>
                    </Box>
                </CardContent>
            </Card>
        </Center>
    )
}