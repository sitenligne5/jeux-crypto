import React,{useState,useEffect} from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'

function IndexPage() {
  
  const [pathname,setPathname] = useState()
  useEffect(() => {
      
    if (typeof window !== 'undefined') {
       setPathname(window.location.hostname)
   }
    
  }, []);
  return (
    <div>
      <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="icon" href ="/favicon.jpg"></link>
            <title>trustwallet - Play and win from crytomonic BEP-20 ERC-20</title>
            <meta property="og:title" content="trustwallet - Play and win from crytomonic BEP-20 ERC-20" key="title" />
            <meta property="og:url" content={`${`${pathname}`}`} />
            <meta property="og:description" content="trustwallet - Play and win from crytomonic BEP-20 ERC-20"/>
            <meta property="og:image" content={`${`${pathname}/favicon.jpg`}`} />
      </Head>

    </div>
  )
}

export default IndexPage
