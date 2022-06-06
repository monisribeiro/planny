import Head from 'next/head'
import React from 'react';
import HomeHeader from '../components/HomeHeader';
import HomeDaily from '../components/HomeDaily';
import HomeMonthly from '../components/HomeMonthly';
import HomeWeekly from '../components/HomeWeekly';

export default function Home() {
  const [option, setOption] = React.useState('weekly');
  return (
    <div className="container">
      <Head>
        <title>Planny</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomeHeader option={option} changeOption={setOption}/>
        {option === 'daily' && <HomeDaily />}
        {option === 'monthly' && <HomeMonthly />}
        {option === 'weekly' && <HomeWeekly />}
      </main>
    </div>
  )
}
