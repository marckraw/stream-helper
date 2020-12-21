import Head from 'next/head'
import Test from '../components/test'
import TestScssModulesDrivenComponent from '../components/testScssModuleComponents';

export default function Home() {
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
