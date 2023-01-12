import React from 'react'
import { Grid, Typography } from '@mui/material'
import ForwardIcon from '@mui/icons-material/Forward';
import { Young_fvt_1, Young_fvt_2 } from '../../assets/images/images';

export default function YoungFavourite() {
    let productList = [
        {
            id: 1,
            name: 'Trending on instagram',
            image_url: Young_fvt_1
        },
        {
            id: 2,
            name: 'All Under $40',
            image_url: Young_fvt_2
        },
    ]


    return (
        <Grid container p={3} pb={7}>
            <Grid item lg={12} xs={12} md={12} sm={12} container p={4} pb={3}>
                <span style={{ fontWeight: 'bolder', fontSize: "4vh", fontFamily: 'sans-serif' }}> Young's Favourite</span>
            </Grid>
            <Grid item lg={12} xs={12} md={12} sm={12} mt={1} container justifyContent={'space-evenly'} >
                {
                    productList.map((product) => <Grid lg={5} md={5} xs={12} sm={12} item container justifyContent="center" >
                        <Grid item lg={12} xs={12} mt={2}>
                            <img src={product.image_url} width={"100%"} />
                        </Grid>
                        <Grid item lg={12} xs={12} p={1} container flexDirection='row' alignItems="center" justifyContent="space-between" >
                            <Typography>
                                <Typography style={{ fontSize: 18, fontWeight: 600 }}> {product.name}</Typography>
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
