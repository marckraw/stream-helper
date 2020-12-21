import {useContext} from 'react'
import Head from 'next/head'
import Test from '../components/test'
import TestScssModulesDrivenComponent from '../components/testScssModuleComponents';
import { OBSContext } from '../contexts/OBSContext';

export default function Home() {
  const obsContextData = useContext(OBSContext)

  console.log("this is obs context data from Home")
  console.log(obsContextData)
  return (
    <div className="container">
      <Head>
        <title>Steam Helper</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Test />
        <br />
        <Test />
        <br />
        <TestScssModulesDrivenComponent />
      </main>
    </div>
  )
}
