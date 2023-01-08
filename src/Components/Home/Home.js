import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import { Brand_1_img, Brand_2_img, Brand_3_img, Brand_4_img, Brand_5_img, Brand_6_img, girl_pic_home, home_text_image, Vector_home_1 } from '../../assets/images/images'

export default function Home() {

    const brandLogos = [
        Brand_1_img,
        Brand_2_img,
        Brand_3_img,
        Brand_4_img,
        Brand_5_img,
        Brand_6_img
    ]

    return (
        <Grid container justifyContent='center'>
            <Grid lg={11} xs={11} m={2} item container justifyContent="space-between" style={{ backgroundColor: '#F4F6F5', borderRadius: 25 }} >
                <Grid item container lg={4} xs={12} md={4} sm={12} pt={2} justifyContent="center" alignItems="center">
                    <img src={home_text_image} style={{ width: "80%" }} />
                    <Typography variant='text'
                        style={{ marginLeft: 16, fontFamily: 'sans-serif' }}>
                        Live for Influential and Innovative fashion!</Typography>
                    <Grid item lg={12} md={12} sm={12} xs={12} container flexDirection='row'
                        alignItems="center" justifyContent="space-evenly" p={2}>
                        <Grid item lg={4} xs={4} ml={2}>
                            <img src={Vector_home_1} style={{ width: "100%" }} />
                        </Grid>
                        <Grid item lg={6} xs={6} >
                            <Button variant='contained' style={{ backgroundColor: 'black' }}>
                                Shop Now
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container lg={6} xs={12} md={6} sm={12} justifyContent="center" >
                    <img src={girl_pic_home} style={{ width: "90%" }} />
                </Grid>
            </Grid>
            <Grid lg={12} xs={12} md={12} sm={12} item container p={5}
                style={{ backgroundColor: '#EBD96B', backgroundBlendMode: 'darken', }} justifyContent="space-evenly">
                {
                    brandLogos.map((image, index) => <Grid lg={2} xs={12} md={2} sm={12} p={2} container justifyContent="center"><img key={index} src={image} style={{ maxHeight: 55, mixBlendMode: 'multiply' }} /></Grid>)
                }
            </Grid>
        </Grid >
    )
}
