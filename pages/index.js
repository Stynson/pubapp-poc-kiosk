import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Places from '@components/Places/Places'

export default function Home() {
  return (
    <div className="container">
      <Places></Places> 
    </div>
  )
}
