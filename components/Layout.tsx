import React from 'react'
import Container from './Container'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children, classNames = "" }: { children: React.ReactNode, classNames?: string }) {
  return (
    <section className={`h-full w-screen ${classNames}`}>
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
    </section>
  )
}
