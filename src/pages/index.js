import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navigation from '../components/Navigation'
import CTA from '../components/CTA'
import Features from '../components/Features'
import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'



export default function Home() {
  return (

   


   <div>
        
    <title>Agency</title>
     <Navigation/>
     <Hero />
     <Features />
     <Testimonials />
     <CTA />
     <Footer />
   </div>
  )
}
