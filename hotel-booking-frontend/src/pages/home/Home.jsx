import React, { useState } from "react";
import "./Home.css";
import Hero from "../../components/hero/Hero";
import Featured from "../../components/featured/Featured";
import BackToTop from "../../components/backtotop/BackToTop";
import Grid from "../../components/grid/Grid";
import SearchBar from "../../components/searchbar/SearchBar";
import Product from "../product/Product";

export default function Home() {
  const [filter, setFilter] = useState(null);

  const handleSearch = (destination) => {
    setFilter(null); // Reset filter first
    setTimeout(() => {
      setFilter(destination);
    }, 0); // Delay to ensure the reset takes effect before applying new filter
  };

  return (
    <>
      <Hero />
      <SearchBar onSearch={handleSearch} />
      <Grid type="rooms" filter={filter} />
      <Featured />
      <Grid type="hotels" />
      <BackToTop />
    </>
  );
}
// WORKING
