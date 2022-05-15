import React from 'react'
import Head from 'next/head'
const universities = () => {
  return (
    <>
    <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg" />
    </Head>
    <style jsx >
        {`
        .stylecenter {
          text-align: center;
          font-size: xxx-large;
          align-items: center;
          font-weight: bold;
          min-height: 100vh;
          display: flex;
          justify-content: center;
         }
        `}
      </style>
    <div className='stylecenter'>Universities Page</div>
    </>
  )
}

export default universities