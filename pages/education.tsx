import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import SectionSeparator from '../components/section-separator'

export default function Experience() {
  return (
    <>
      <Layout>
        <Head>
          <title>Gabe Ramirez</title>
        </Head>
        <Container>
            <section className="max-w-7xl flex justify-center">
                <div className='flex-col md:flex-row flex items-start md:justify-between mt-4 border-2 border-red-400'>
                    <div className="text-white-100 pb-6 flex flex-col justify-center lg:w-1/2 md:w-1/2 ">
                        {/* <h1 className="text-8xl lg:text-8xl text-5xl md:text-8xl font-semibold text-cream-100 uppercase ">Diaspora.</h1> */}
                        <h1 className="lg:text-6xl md:text-5xl text-5xl font-semibold text-cream-100 uppercase leading-none mt-0">Professional Experience</h1>
                        <ul className='list-none'>
                        <li>
                            <p><strong>TeleOperations Tactician</strong></p>
                            <p><i>Zoox, Foster City CA. January 2022 - Present</i></p>
                        </li>
                        <li>
                            <p>Monitor and provide remote guidance to L3 autonomous vehicles.</p>
                        </li>
                        <hr/>
                        <li>
                            <p><strong>Oportun FAIR Tool, Innovate To Grow (I2G), Software Engineering Capstone</strong></p>
                            <p><i>University of California, Merced CA. August – December 2020</i></p>
                        </li>
                        <li>
                            <p>Collaborated in the design and development of a professional 
                            risk-analysis web application built on React JS, Node.js, Flask, and SQLite. 
                            My team developed a tool for assessing financial risk for Oportun, Inc., 
                            a company that provides affordable financial services to low-income individuals. 
                            I created components in React JS for the user interface.</p>
                        </li>
                        </ul>
                    </div>
                    <div className="text-white-100 pb-6 flex flex-col justify-center lg:w-1/2 md:w-1/2 ">
                        {/* <h1 className="text-8xl lg:text-8xl text-5xl md:text-8xl font-semibold text-cream-100 uppercase ">Diaspora.</h1> */}
                        <h1 className="lg:text-6xl md:text-5xl text-5xl font-semibold text-cream-100 uppercase leading-none mt-0">Projects</h1>
        
                    </div>

                </div>

                <div className='flex-col md:flex-row flex items-center md:justify-between mt-4 border-2 border-red-400'>
                    
                </div>
            </section>
            <SectionSeparator/>
          {/* ART */}
        </Container>
      </Layout>
    </>
  )
}

