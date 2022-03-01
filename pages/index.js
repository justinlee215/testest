import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home >
      <div className={styles.container}>
        <Head>
          <title>{siteTitle}</title>
          <meta name="description" content="PCB 365 main landing page" />
          <link rel="icon" href="/favicon.png" />
        </Head>

        <main>
          <h1 className={styles.title}>
            Home
          </h1>
            <Link href="/"><a><img src="/images/pcb365.png" alt="pcb 365 logo" width="350"/></a></Link>
          <div className={styles.hello}>content</div>
          <div className={styles.hello}>content</div>
          <div className={styles.hello}>content</div>
        </main>
      </div>
    </Layout>
  )
}
