import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import Avatar from '../public/avatar.png'
import Image from 'next/image';
import Activity from '../components/activity'
import { Inter } from '@next/font/google'
import Gabe from '../components/gabe'
import GitIcon from '../components/github'
import Linkedin from '../components/linkedin'
import EmailIcon from '../components/email'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Gabe Ramirez</title>
        </Head>
        <Container>
          {/* <SectionSeparator/> */}
          <section className="max-w-7xl flex flex-col justify-center">
            <div className='flex-col flex items-center py-10'>
                <div className="text-cream-100 items-center flex justify-center justify-items-stretch relative">
                  <Image src={Avatar} alt="Gabriel" width={365} height={365} placeholder="blur" className='rounded-full relative shadow-[0px_0px_20px_5px] shadow-purple-100'/>
                  <div className='absolute'>
                    <Gabe />
                  </div>
                </div> 
            </div>

            <div className='flex-col flex justify-center items-center text-center text-cream-100 p-4'>
              <h2 className={`${inter.variable} font-sans font-semibold lg:text-3xl md:text-3xl text-3xl mt-2 text-cream-100 leading-none mt-0`}>Software Engineer</h2>
              <p className={`${inter.variable} font-sans text-purple-50 mb-2`}>Open to work. Interested in full-stack software engineering and data analysis</p>
              <h2 className={`${inter.variable} font-sans font-semibold lg:text-3xl md:text-3xl text-3xl`}>Currently <Activity/></h2>
              <p className={`${inter.variable} font-sans text-purple-50`}>Eager to learn useful skills, take on challenges, and solve problems!</p>
            </div>

            <div className='flex-row flex justify-center items-center space-between text-cream-100 p-4'>
                <div className="px-2" >
                  <a href='https://github.com/genrique98'><GitIcon /></a>
                </div>
                <div className="px-2" >
                  <a href='https://www.linkedin.com/in/gabrielramirez98/'><Linkedin /></a>
                </div>
                <div className="px-2" >
                  <a href='mailto:egramirez.gabriel@gmail.com'><EmailIcon /></a>
                </div>
            </div>

          </section>
        </Container>
      </Layout>
    </>
  )
}
