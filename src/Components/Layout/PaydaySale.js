import React from 'react'
import classes from './style.module.css'
import { Button, Grid, Typography } from '@mui/material'
import { Payday_sale_img_2, Payday_sale_img_3 } from '../../assets/images/images'
export default function PaydaySale() {
    return (
        <Grid container >
            <Grid item container lg={6} md={6} sm={12} xs={12}>
                <img src={Payday_sale_img_2} width="100%" alt="banner" />
            </Grid>
            <Grid item container className={classes.paydaysalebanner} lg={6} md={6} sm={12} xs={12} pt={5} pb={5}>
                <Grid item container lg={12} md={12} sm={12} xs={12} alignItems="center" justifyContent={'center'}>
                    <Grid item lg={12} xs={12} md={12} p={2} sm={12} container
                        justifyContent={'flex-start'} >
                        <img src={Payday_sale_img_3}
                            height="130"
                            alt="banner" />
                    </Grid>
                    <Grid item lg={12} xs={12} md={12} sm={12} p={2}  >
                        <Typography style={{ fontSize: 16, fontWeight: 500 }} >Spend minimal $100 get 30% off</Typography>
                        <Typography style={{ fontSize: 16, fontWeight: 500 }}>voucher code for your next purchase</Typography>
                    </Grid>
                    <Grid item lg={12} xs={12} md={12} sm={12} p={1} pl={4} >
                        <Button variant='contained' style={{ backgroundColor: 'black' }}>Shop Now</Button>
                    </Grid>
                    <Grid item lg={12} xs={12} md={12} sm={12} p={1} pl={4} >
                        <Typography style={{ fontSize: 18, fontWeight: 'bold' }}>1 June - 10 June 2021</Typography>
                        <Typography>*Terms & Conditions apply</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
