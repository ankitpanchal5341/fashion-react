import { Typography } from '@mui/material'
import React from 'react'
import { DownloadBanner_1, DownloadBanner_2 } from '../../assets/images/images'
import { Grid } from '@mui/material'

export default function DownloadBanner() {
    return (
        <Grid container>
            <Grid item container lg={6} xs={12} sm={12} md={6} justifyContent="center" alignItems="center">
                <Grid item container lg={7} xs={10} sm={10} md={11} >
                    <span style={{ fontSize: '4.8vh', fontWeight: '900', fontFamily: 'sans-serif' }}>
                        DOWNLOAD APP & GET THE VOUCHER!
                    </span>
                    <span style={{ fontSize: '17px', marginTop: 25 }}>
                        Get 30% off for first transaction using
                        Rondovision mobile app for now.
                    </span>
                    <img src={DownloadBanner_2} width={'85%'} style={{ marginTop: 25 }} />
                </Grid>
            </Grid>
            <Grid item container lg={6} xs={12} sm={12} md={6} justifyContent="center" alignItems="center">
                <img src={DownloadBanner_1} width={'70%'} />
            </Grid>
        </Grid>
    )
}
