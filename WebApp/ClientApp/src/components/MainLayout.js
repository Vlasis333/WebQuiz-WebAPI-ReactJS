import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import useStateContext from '../Hooks/useStateContext';

export default function MainLayout() {
    const {resetContext} = useStateContext()
    const navigate = useNavigate()

    const logout = () => {
        resetContext()
        navigate("/")
    }

    return (
        <>
            <AppBar position='sticky'>
                <Toolbar sx={{ width: 640, m: 'auto' }}>
                    <Typography variant='h4' align='center' sx={{ flexGrow: 1}} >
                        Web Quiz Application
                    </Typography>
                    <Button onClick={logout}>Logout</Button>
                </Toolbar>
            </AppBar>
            <Container>
                <Outlet />
            </Container>
        </>
    )
}




