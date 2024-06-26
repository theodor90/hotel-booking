import React from "react";
import "./Home.css";
import Hero from "../../components/hero/Hero";
import Featured from "../../components/featured/Featured";
import BackToTop from "../../components/backtotop/BackToTop";
import Grid from "../../components/grid/Grid";


export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Grid type="hotels" />
      <Grid type="rooms" />
      <BackToTop />
    </>
  );
}
