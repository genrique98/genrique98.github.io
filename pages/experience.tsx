import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import Project from '../interfaces/project'
import get from "../lib/get"
import { Inter } from '@next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

type Props = {
  allProjects: Project[]
}

export default function Experience({ allProjects }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>Gabe Ramirez: Experience</title>
        </Head>
        <Container>
            <section className="max-w-7xl flex flex-col md:flex-row lg:flex-row justify-center">

                <div className='flex-col flex items-start p-0 lg:p-4 w-full lg:w-1/2 md:w-1/2 sm:w-full'>
                    {/* TL;DR */}
                    <div className="text-white-100 pb-6 flex flex-col justify-center w-full">
                        {/* <h1 className="lg:text-5xl md:text-4xl text-4xl font-semibold text-cream-300 uppercase leading-none mt-0">Professional Experience</h1> */}
                        <h1 className={`${inter.variable} font-sans text-purple-100 text-4xl font-bold uppercase`}>TL;DR</h1>
                        <div className='p-4 lg:p-6 rounded-xl border-4 border-purple-100'>
                            <ul className='list-none pb-2'>
                                <li>
                                    <p className='text-purple-50'>Recent graduate from UC Merced and currently working at Zoox. 
                                        Interested in full-stack software engineering and data analysis.
                                        Always eager to learn and contribute to my team.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Professional Experience */}
                    <div className="text-white-100 pb-6 flex flex-col justify-center">
                        {/* <h1 className="lg:text-5xl md:text-4xl text-4xl font-semibold text-cream-300 uppercase leading-none mt-0">Professional Experience</h1> */}
                        <h1 className={`${inter.variable} font-sans text-purple-100 text-4xl font-semibold uppercase`}>Professional Experience</h1>
                        <div className='p-4 lg:p-6 rounded-xl border border-r-4 border-purple-100'>
                            <h2 className={`${inter.variable} font-sans lg:text-2xl md:text-2xl text-2xl font-semibold text-cream-100 uppercase underline decoration-purple-100 leading-none mt-0`}>TeleOperations Tactician</h2>
                            <ul className='list-none pb-2 ml-2'>
                                <li>
                                    <p className='text-cream-300'><i>Zoox, Foster City CA. January 2022 - Present</i></p>
                                    <p className='text-purple-50'>Monitor and provide remote guidance to L3 autonomous vehicles.</p>
                                </li>
                            </ul>
                            <h2 className={`${inter.variable} font-sans lg:text-2xl md:text-2xl text-2xl font-semibold text-cream-100 uppercase underline decoration-purple-100 leading-none mt-0`}>Frontend Developer</h2>
                            <ul className='list-none ml-2'>
                                <li>
                                    <p className='text-cream-200'><strong>Oportun FAIR Tool, Innovate To Grow (I2G), Software Engineering Capstone</strong></p>
                                    <p className='text-cream-300'><i>University of California, Merced CA. August – December 2020</i></p>
                                    <p className='text-purple-50'>Collaborated in the design and development of a professional 
                                    risk-analysis web application built on React JS, Node.js, Flask, and SQLite. 
                                    My team developed a tool for assessing financial risk for Oportun, Inc., 
                                    a company that provides affordable financial services to low-income individuals. 
                                    I created components in React JS for the user interface.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Education */}
                    <div className="text-white-100 pb-6 flex flex-col justify-center w-full">
                        <h1 className={`${inter.variable} font-sans text-purple-100 text-4xl font-semibold uppercase`}>Education</h1>
                        <div className='p-4 lg:p-6 rounded-xl border border-l-4 border-purple-100'>
                            <h2 className={`${inter.variable} font-sans lg:text-2xl md:text-2xl text-2xl font-semibold text-cream-100 uppercase underline decoration-purple-100 leading-none mt-0`}>Bachelor of Science</h2>
                            <ul className='list-none pb-2 ml-2'>
                                <li>
                                    <p className='text-cream-200'><i>Bachelor of Science, Computer Science and Engineering, May 2021.</i></p>
                                    <p className='text-cream-300'>University of California, Merced CA.</p>
                                    <p>Relevant coursework:</p>
                                    <ul className="coursework ml-1 text-purple-50">
                                        <li>Algorithm Design and Analysis</li>
                                        <li>Computer Architecture</li>
                                        <li>Object Oriented Programming</li>
                                        <li>Software Engineering</li>
                                        <li>Database Systems</li>
                                        <li>Operating Systems</li>
                                        <li>Mobile Computing</li>
                                        <li>Artificial Intelligence</li>
                                        <li>Probability and Statistics</li>
                                        <li>Linear Algebra and Differential equations</li>
                                    </ul>
                                </li>
                            </ul>
                            <h2 className={`${inter.variable} font-sans lg:text-2xl md:text-2xl text-2xl font-semibold text-cream-100 uppercase underline decoration-purple-100 leading-none mt-0`}>Udacity Nanodegree</h2>
                            <ul className='list-none ml-2'>
                                <li>
                                    <p className='text-cream-200'><strong>Full Stack JavaScript Developer</strong></p>
                                    <p className='text-cream-300'><i>Udacity Online Course</i></p>
                                    <p>Completed online program with focus on JavaScript and Node.js</p>
                                    <ul className="coursework ml-1 text-purple-50">
                                        <li>Express JS API</li>
                                        <li>Angular Single-Page Application</li>
                                        <li>Express JS API and PostgreSQL database</li>
                                        <li>Deployment of full-stack app on AWS</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>

                <div className='flex-col flex pb-6 lg:p-4 w-full lg:w-1/2 md:w-1/2 sm:w-full'>
                    {/* Projects */}
                    <div className="text-white-100 pb-6 flex flex-col text-wrap justify-center w-full">
                        {/* <h1 className="text-8xl lg:text-8xl text-5xl md:text-8xl font-semibold text-cream-100 uppercase ">Diaspora.</h1> */}
                        <h1 className={`${inter.variable} font-sans text-purple-100 text-4xl font-semibold uppercase`}>Projects</h1>
                        <div className='p-4 lg:p-6 rounded-xl border border-t-4 border-purple-100'>
                            <ul className='list-none'>
                                {allProjects.map(project => (
                                    <li className='' key={project.id}>
                                        <p className={`${inter.variable} font-sans lg:text-xl md:text-xl text-xl font-semibold text-cream-100 uppercase underline decoration-purple-100`}><a href={project.html_url}>{project.full_name}</a></p> 
                                        <p className='ml-1 text-purple-50'>{project.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* Skills */}
                    <div className="text-cream-100 pb-6 flex flex-col justify-center w-full">
                        <h1 className={`${inter.variable} font-sans text-purple-100 text-4xl font-semibold uppercase`}>Skills</h1>
                        <div className='p-4 lg:p-6 rounded-xl border border-b-4 border-purple-100'>
                            <h2 className={`${inter.variable} font-sans lg:text-2xl md:text-2xl text-2xl font-semibold text-cream-100 uppercase underline decoration-purple-100 leading-none mt-0`}>Frontend Web Development</h2>
                            <ul className='list-none pb-2 ml-2 text-purple-50'>
                                <li>
                                    <p>HTML5, CSS, TypeScript, ReactJS, NextJS, Angular</p>
                                    <p>Testing (Jasmine)</p>
                                </li>
                            </ul>
                            <h2 className={`${inter.variable} font-sans lg:text-2xl md:text-2xl text-2xl font-semibold text-cream-100 uppercase underline decoration-purple-100 leading-none mt-0`}>Backend Web Development</h2>
                            <ul className='list-none pb-2 ml-2 text-purple-50'>
                                <li>
                                    <p>REST and GraphQL APIs</p>
                                    <p>TypeScript, Node.js, Python, Flask, Go, Java</p>
                                    <p>SQL (SQLite and PostgreSQL)</p>
                                    <p>Docker</p>
                                </li>
                            </ul>
                            <h2 className={`${inter.variable} font-sans lg:text-2xl md:text-2xl text-2xl font-semibold text-cream-100 uppercase underline decoration-purple-100 leading-none mt-0`}>DevOps</h2>
                            <ul className='list-none pb-2 ml-2 text-purple-50'>
                                <li>
                                    <p>git, CI/CD</p>
                                    <p>AWS Cloud: S3, RDS, Elastic Beanstalk, Lambda, API Gateway</p>
                                    <p>Vercel</p>
                                </li>
                            </ul>
                            <h2 className={`${inter.variable} font-sans lg:text-2xl md:text-2xl text-2xl font-semibold text-cream-100 uppercase underline decoration-purple-100 leading-none mt-0`}>Other</h2>
                            <ul className='list-none ml-2 text-purple-50'>
                                <li>
                                    <p>Ability to understand team needs and develop ideas to meet objectives</p>
                                    <p>Ability to communicate effectively</p>
                                    <p>Fluency in English and Spanish</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    {/* Interests */}
                    <div className="text-white-100  flex flex-col justify-center w-full">
                        <h1 className={`${inter.variable} font-sans text-purple-100 text-4xl font-semibold uppercase`}>Interests</h1>
                        <div className='p-4 lg:p-6 rounded-xl border-4 border-purple-100'>
                            <h2 className={`${inter.variable} font-sans lg:text-xl md:text-xl text-xl font-semibold text-cream-100 uppercase underline decoration-purple-100 decoration-wavy decoration-2 underline-offset-4 leading-none pb-2`}>Web Development</h2>
                            <h2 className={`${inter.variable} font-sans lg:text-xl md:text-xl text-xl font-semibold text-cream-100 uppercase underline decoration-purple-100 decoration-wavy decoration-2 underline-offset-4 leading-none pb-2b`}>Data Analysis</h2>
                            <h2 className={`${inter.variable} font-sans lg:text-xl md:text-xl text-xl font-semibold text-cream-100 uppercase underline decoration-purple-100 decoration-wavy decoration-2 underline-offset-4 leading-none`}>Writing</h2>
                            {/* <ul className='list-none pb-2 ml-2'>
                                <li>
                                    <p className='text-purple-50'>writing about crypto use cases in latin america</p>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </div>

            </section>
        </Container>
      </Layout>
    </>
  )
}

// Static generation / compiled at build time
export const getStaticProps = async () => {
  const allProjects: Project[] = await get()
  return {
    props: { allProjects },
  }
}

