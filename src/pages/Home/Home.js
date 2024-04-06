import React from 'react'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import Header from "../../components/Header/Header"
import RowList from '../../components/Rows/RowList/RowList'
function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      <RowList/>
      <Footer/>
    </>
  )
}
export default Home
