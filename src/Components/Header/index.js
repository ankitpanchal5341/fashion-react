import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import CLASSES from './style.module.css'
import logoImg from '../../assets/images/Vector.png'
import { Link, NavLink } from 'react-router-dom'
export default function index() {
    return (
        <Grid container className={CLASSES.headerContainer} p={3}>
            <Grid lg={5} item container alignItems={"center"} pl={3}>
                <img src={logoImg} height={25} width={25} />
                <Link to="home" className={CLASSES.linkStyle}>
                    FASHION
                </Link>
            </Grid>
            <Grid item lg={7} container justifyContent={"flex-end"} pr={4} >
                <Grid item container lg={9} justifyContent="space-between" alignItems={"center"}>

                    <NavLink to='sign-up' className={({ isActive }) => isActive ? CLASSES.linkStyleBtnactive : CLASSES.linkStyleBtn}>
                        CATALOGUE
                    </NavLink>
                    <NavLink to='footer' className={({ isActive }) => isActive ? CLASSES.linkStyleBtnactive : CLASSES.linkStyleBtn} >
                        FASHION
                    </NavLink>
                    <NavLink to='favorite' className={({ isActive }) => isActive ? CLASSES.linkStyleBtnactive : CLASSES.linkStyleBtn}>
                        FAVORITE
                    </NavLink>
                    <NavLink to='cart' className={({ isActive }) => isActive ? CLASSES.linkStyleBtnactive : CLASSES.linkStyleBtn}>
                        CART
                    </NavLink>
                    <Button variant='contained' style={{ backgroundColor: 'black' }}> SIGNUP</Button>
                </Grid>
            </Grid>

        </Grid >
    )
}
