import "./Home.css";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Carousel from "../Carousel/Carousel";
import TopProducts from "../TopProducts/TopProducts";
import TopCategory from "../TopCategory/TopCategory";
import FixedBanner from "../FixedBanner/FixedBanner";
import QueryForm from "../QueryForm/QueryForm";

export default function Home() {

    return (
        <>
            <Header />
            <Carousel />
            <TopProducts />
            <FixedBanner />
            <TopCategory />
            <QueryForm />
            <Footer />
        </>
    )
}