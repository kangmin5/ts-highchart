import HighCharts from 'components/verticalbar/HighCharts'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>

      <HighCharts/>
      
    </div>
  )
}

export default Home
