import { Button, Grid } from '@mui/material'
import React from 'react'

export default function JoinCommunity() {
    return (
        <Grid container pt={"10vh"} pb={"10vh"} justifyContent="center" alignItems={'center'}
            style={{ backgroundColor: '#E5C643' }}>
            <Grid item container xs={11} md={6} justifyContent="center">
                <span style={{ fontSize: "5vh", fontWeight: 900, textAlign: 'center', fontFamily: 'sans-serif', color: 'white' }}>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</span>
                <span style={{ fontSize: 18, color: 'white', textAlign: 'center', marginTop: '3vh' }}>Type your email down below and be young wild generation</span>
            </Grid>
            <Grid item container xs={12} md={12} justifyContent="center" pt={"3vh"}>
                <div style={{ backgroundColor: 'white', borderRadius: 5, padding: 8, display: 'flex', flexDirection: 'row' }} >
                    <input placeholder='Add your email here' style={{ backgroundColor: 'white', minWidth: 200, width: "20vw", outline: 'none', border: 'none' }} />
                    <Button variant='contained' size='small' style={{ backgroundColor: 'black' }}>SEND</Button>
                </div>
            </Grid>
        </Grid >
    )
}
