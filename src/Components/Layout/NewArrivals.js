import { Grid, Typography } from '@mui/material'
import React from 'react'
import { New_A_1, New_A_2, New_A_3 } from '../../assets/images/images'
import ForwardIcon from '@mui/icons-material/Forward';
export default function NewArrivals() {
    let productList = [
        {
            id: 1,
            name: 'Hoodies & Sweetshirt',
            image_url: New_A_1
        },
        {
            id: 2,
            name: 'Coats & Parkas',
            image_url: New_A_2
        },
        {
            id: 1,
            name: 'Tees & T-Shirt',
            image_url: New_A_3
        },
    ]

    return (
        <Grid container p={7}>
            <Grid item lg={12} xs={12} md={12} sm={12} container >
                <span style={{ fontWeight: 'bolder', fontSize: 27, fontFamily: 'sans-serif' }}> NEW ARRIVALS</span>
            </Grid>
            <Grid item lg={12} xs={12} md={12} sm={12} mt={1} container justifyContent={'center'} >
                {
                    productList.map((product) => <Grid lg={3} md={3} m={4} xs={12} sm={12} item container justifyContent="center" >
                        <Grid item lg={12} xs={12}>
                            <img src={product.image_url} width={"100%"} />
                        </Grid>
                        <Grid item lg={12} xs={12} p={1} container flexDirection='row' alignItems="center" justifyContent="space-between" >
                            <Typography>
                                <Typography style={{ fontSize: 18, }}> {product.name}</Typography>
                                <Typography style={{ fontSize: 12, lineHeight: 1, fontFamily: 'revert' }}> Explore Now</Typography>
                            </Typography>
                            <Typography style={{ cursor: 'pointer' }}>
                                {/* -> */}
                                <ForwardIcon style={{ color: 'purple' }} />
                            </Typography>
                        </Grid>
                    </Grid>)
                }
            </Grid>
        </Grid>
    )
}
