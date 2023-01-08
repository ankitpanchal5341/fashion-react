import { Route, Routes } from "react-router-dom"
import { Cart, Checkout, Favorite, Footer, Home, Login, OrderPage, Signup, } from "../Components"

const NotFound = () => {
    return (<h1>Page Not Found</h1>)
}
const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/order-page" element={<OrderPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>

    )
}
export default MainRoutes;