import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ShortcutHome from '../components/ShortcutHome'

export async function getStaticProps() {
  return {
    props: {
      title: 'Matt Fewer',
      description: 'Building world-class applications, and some music on the side 😎',
      image: '/static/images/home-bw.jpg',
    },
  }
}

function Home(props) {
  const { title, description, image } = props

  return (
    <div className="wrapper">
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://mattfewer.com" property="og:url" />
        <meta content={`https://mattfewer.com${image}`} property="og:image" />
      </Head>

      <Navbar />
      <main className="post main home">
        <div className="post-content">
          <div className="post-container">
            <div className="single">
              <h1>{title}</h1>
              <p><strong>Senior Software Engineer at Just Eat Takeaway</strong><br/>
              {description}.</p>
              <ShortcutHome />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
