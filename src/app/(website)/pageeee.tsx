'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion';
import Navbar, { TopBar } from "@/components/navbar/navbar";
import { HeroSection } from "@/modules/landing-page/hero-banner/hero-section";
import WhyChooseMoneymutt from "@/modules/landing-page/choose-moneyMutt";
import ThoughtMoneyMutt from "@/modules/landing-page/thought-moneyMutt";
import MemeCoins from "@/modules/landing-page/meme-coins";
import Newsletter from "@/modules/landing-page/news-letter/newsletter";
import LayoutWrapper from "@/modules/landing-page/layout-wrapper/layoutwrapper";
import ShapeFuture from "@/modules/landing-page/shape-future";
import TestimonialsSection from "@/modules/landing-page/testimonials";
import FAQ from "@/modules/landing-page/faq";
import CurrencyStats from '@/modules/landing-page/Currency/currency';
import Footer from '@/modules/landing-page/Footer/footer';


const Page = () => {
  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const components = [
    <HeroSection key="hero" />,
    <MemeCoins key="meme" />,
    <ShapeFuture key="shape" />,
    <LayoutWrapper key="layout" />,
    <WhyChooseMoneymutt key="why" />,
    <ThoughtMoneyMutt key="thought" />,
    <CurrencyStats key="currency" />,
    <TestimonialsSection key="testimonials" />,
    <FAQ key="faq" />,
    <Newsletter key="newsletter" />,
    <Footer key="footer" />
  ];

  return (
    <main>
      {/* <Navbar /> */}
      <TopBar />
      {components.map((Component, index) => (
        <motion.section
          key={index}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={pageTransition}
        >
          {Component}
        </motion.section>
      ))}
    </main>
  );
};

export default Page;
