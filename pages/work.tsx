// professional work live, art, writings, clients, etc
import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import Project from '../interfaces/project'
import { Inter } from '@next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function Work() {
  return (
    <>
      <Layout>
        <Head>
          <title>Gabe Ramirez: Work</title>
        </Head>
        <Container>
            <section className="max-w-7xl flex flex-col md:flex-row lg:flex-row justify-center">

                <div className='flex-col flex items-start p-0 lg:p-4 w-full lg:w-1/2 md:w-1/2 sm:w-full'>
                    {/* Professional Experience */}
                    <div className="text-white-100 pb-6 flex flex-col justify-center">
                        {/* <h1 className="lg:text-5xl md:text-4xl text-4xl font-semibold text-cream-300 uppercase leading-none mt-0">Professional Experience</h1> */}
                        <h1 className={`${inter.variable} font-sans text-purple-100 text-4xl font-semibold uppercase`}>Clients</h1>
                        <div className='p-4 lg:p-6 rounded-xl border border-l-4 border-purple-100'>
                            <h2 className={`${inter.variable} font-sans lg:text-2xl md:text-2xl text-2xl font-semibold text-cream-100 uppercase underline decoration-purple-100 transition ease-in-out delay-50 duration-300 hover:text-purple-100 hover:decoration-cream-100 leading-none mt-0`}>
                                <a href='https://smarttransportation.us/'>
                                    Smart Transportation &darr;
                                </a>
                            </h2>
                            <ul className='list-none pb-2 ml-2'>
                                <li className='text-purple-50 pt-2' >
                                    <p>Website for Smart Transportaion LLC, a delivery-route-management business based in the Bay Area.</p>
                                    <p>Static site with a simple and responsive design built with Nextjs, TypeScript, and Tailwind, and it&apos;s hosted on Cloudflare Pages.</p>
                                    <p>The project consists of a landing page, a contact page, an about page, and jobs page.</p>
                                    <p>Job application forms are processed by a AWS Lambda function through API Gateway and stored in a Goole Sheet.</p>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                    {/* Live Projects< */}
                    {/* <div className="text-white-100 pb-6 flex flex-col justify-center w-full">
                        <h1 className={`${inter.variable} font-sans text-purple-100 text-4xl font-semibold uppercase`}>Live Projects</h1>
                        <div className='p-4 lg:p-6 rounded-xl border border-l-4 border-purple-100'>
                            <h2 className={`${inter.variable} font-sans lg:text-2xl md:text-2xl text-2xl font-semibold text-cream-100 uppercase underline decoration-purple-100 leading-none mt-0`}>Cuaderno</h2>
                            <ul className='list-none pb-2 ml-2'>
                                <li>
                                    <ul className="coursework ml-1 text-purple-50">
                                        <li>Study Data Structures and Algorithms</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                    
                </div>

                <div className='flex-col flex pb-6 lg:p-4 w-full lg:w-1/2 md:w-1/2 sm:w-full'>
                    {/* Skills */}
                    {/* <div className="text-cream-100 pb-6 flex flex-col justify-center w-full">
                        <h1 className={`${inter.variable} font-sans text-purple-100 text-4xl font-semibold uppercase`}>.</h1>
                        <div className='p-4 lg:p-6 rounded-xl border border-r-4 border-purple-100'>
                            <h2 className={`${inter.variable} font-sans lg:text-2xl md:text-2xl text-2xl font-semibold text-cream-100 uppercase underline decoration-purple-100 leading-none mt-0`}>Moreno llc &darr;</h2>
                            <ul className='list-none pb-2 ml-2 text-purple-50'>
                                <li>
                                    <p>Contact website</p>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                    
                </div>

            </section>
        </Container>
      </Layout>
    </>
  )
}

