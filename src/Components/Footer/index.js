import { FacebookOutlined, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import { Grid } from '@mui/material'
import React from 'react'

export default function index() {
    const btnStyle = {
        textDecoration: 'none',
        backgroundColor: '#EBD96B',
        borderRadius: 10,
        padding: "6px 8px",
        color: 'black',

    }
    const listStyle1 = {
        color: 'white',
        listStyleType: 'none',
        // width: '70%',
        textAlign: 'center',
        fontFamily: 'cursive',


    }
    const listStyle = {
        color: 'white',
        opacity: "70%",
        fontFamily: 'cursive',
        listStyleType: 'none',
        // width: '80%'

    }
    const footerList = {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: '4vh',
        alignItems: 'center',
        // flexWrap: 'wrap'

    }
    return (
        <Grid container style={{ backgroundColor: 'black' }}>
            <Grid item container md={5} xs={12} p={2} justifyContent={'center'} alignItems="center">
                <Grid item container md={8} xs={12} p={2} justifyContent={'center'} alignItems="center">
                    <Grid item md={12} xs={12} container flexDirection={'column'} >
                        <span style={{ fontSize: '5vh', color: 'white', fontFamily: 'sans-serif', fontWeight: 900 }}>FASHION</span>
                        <span style={{ color: 'lightgray', opacity: '80%', fontFamily: 'sans-serif', marginTop: '3vh' }}>Complete your style with awesome clothes from us.</span>
                    </Grid>
                    <Grid container item md={12} xs={12}>
                        <Grid container item md={9} xs={10} justifyContent={'space-between'} alignItems="center" mt={"4vh"}>
                            <a href='#' style={btnStyle} target="_blank"><FacebookOutlined /></a>
                            <a href='#' target="_blank" style={btnStyle}><Instagram /></a>
                            <a href='#' target="_blank" style={btnStyle}><Twitter /></a>
                            <a href='#' target="_blank" style={btnStyle}><LinkedIn /></a>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container md={7} xs={12} p={2} justifyContent="center" alignItems={'center'}>
                <Grid item md={4} xs={12} style={footerList}  >
                    <li style={listStyle1}>Company</li>
                    <li style={listStyle}>About</li>
                    <li style={listStyle}>Contact us</li>
                    <li style={listStyle}>Support</li>
                    <li style={listStyle}>Careers</li>
                </Grid>
                <Grid item md={4} xs={12} style={footerList} >
                    <li style={listStyle1}>Quick Link</li>
                    <li style={listStyle}>Share Location</li>
                    <li style={listStyle}>Orders Tracking</li>
                    <li style={listStyle}>Size Guide</li>
                    <li style={listStyle}>FAQs</li>
                </Grid>
                <Grid item md={4} xs={12} style={footerList} >
                    <li style={listStyle1}>Legal</li>
                    <li style={listStyle}>Privacy & Policy</li>
                    <li style={listStyle}>Terms & conditions</li>
                </Grid>
            </Grid>
        </Grid>
    )
}
