import React from 'react'
import DownloadBanner from '../Layout/DownloadBanner'
import JoinCommunity from '../Layout/JoinCommunity'
import NewArrivals from '../Layout/NewArrivals'
import PaydaySale from '../Layout/PaydaySale'
import YoungFavourite from '../Layout/YoungFavourite'
import Home from './Home'
import Footer from '../Footer/index'

export default function index() {
    return (
        <>
            <Home />
            <NewArrivals />
            <PaydaySale />
            <YoungFavourite />
            <DownloadBanner />
            <JoinCommunity />
            <Footer />
        </>
    )
}
