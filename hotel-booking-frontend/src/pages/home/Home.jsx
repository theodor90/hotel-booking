import React from "react";
import "./Home.css";
import Hero from "../../components/hero/Hero";
import Featured from "../../components/featured/Featured";
import BackToTop from "../../components/backtotop/BackToTop";

export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <BackToTop />
    </>
  );
}
