import React, { Component } from "react";
import DetailPageHeader from "../../Components/Header/DetailPageHeader/DetailPageHeader";
import DetailPageProductImg from "./Components/DetailPageProductImg/DetailPageProductImg";
import DetailPageContents from "./Components/DetailPageContents";
import ProductInfo from "./Components/ProductInfo";
import Shipping from "./Components/Shipping";
import Gethelp from "./Components/GetHelp";
import ProductReview from "./Components/ProductReview/ProductReview";
import Recommended from "./Components/Recommended";
import RecentlyViewed from "./Components/RecentlyViewed";
import BottomBar from "./Components/BottomBar";
import ScrollToTop from "./Components/ScrollToTop";
import Footer from "../../Components/Footer/Footer";
import "./ProductDetail.scss";

export class ProductDetail extends Component {
  render() {
    return (
      <>
        <DetailPageHeader />
        <DetailPageProductImg />
        <DetailPageContents />
        <ProductInfo />
        <Shipping />
        <Gethelp />
        <ProductReview />
        <Recommended />
        <RecentlyViewed />
        <BottomBar />
        <ScrollToTop />
        <Footer />
      </>
    );
  }
}

export default ProductDetail;
