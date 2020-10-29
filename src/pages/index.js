import React from "react"
import { Link } from "gatsby"

//import Layout from "../components/layout"
//import Image from "../components/image"
//import SEO from "../components/seo"

import ContactBar from '../components/contactBar'
import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'


const IndexPage = () => (
 <main>
      <ContactBar/>
      <NavigationHeader activeTab = "Contact"/>
      <Footer/>
   </main>
)

export default IndexPage
