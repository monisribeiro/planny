import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Home
        </h1>
        <h1 className="title">
          Calendar
          <Link href="/calendar/monthly">
            <a>Monthly</a>
          </Link>
          <Link href="/calendar/weekly">
            <a>Weekly</a>
          </Link>
          <Link href="/calendar/daily">
            <a>Daily</a>
          </Link>
        </h1>
      </main>
    </div>
  )
}
