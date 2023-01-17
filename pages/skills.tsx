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
                        <h1 className="lg:text-6xl md:text-5xl text-5xl font-semibold text-cream-100 uppercase leading-none mt-0">Frontend Web Development</h1>
                        <ul>
                            <li>
                                <p>HTML5, CSS, TypeScript, ReactJS, NextJS, Angular, RxJs, Jasmine</p>
                            </li>
                        </ul>
                        <h1 className="lg:text-6xl md:text-5xl text-5xl font-semibold text-cream-100 uppercase leading-none mt-0">Backend Web Development</h1>
                        <ul>
                            <li>
                                <p>REST and GraphQL APIs, TypeScript, Node.js, Express, Apollo Server</p>
                            </li>
                            <li>
                                <p>Python, Flask, Go, Java, C++</p>
                            </li>
                            <li>
                                <p>SQL (SQLite and PostgreSQL)</p>
                            </li>
                            <li>
                                <p>Docker, Git</p>
                            </li>
                        </ul>
                        <h1 className="lg:text-6xl md:text-5xl text-5xl font-semibold text-cream-100 uppercase leading-none mt-0">DevOps</h1>
                        <ul>
                            <li>
                                <p>CI/CD (CircleCI)</p>
                            </li>
                            <li>
                                <p>AWS Cloud:</p>
                                <ul className="coursework">
                                        <li>S3</li>
                                        <li>RDS</li>
                                        <li>Elastic Beanstalk</li>
                                    </ul>
                            </li>
                        </ul>
                        <h1 className="lg:text-6xl md:text-5xl text-5xl font-semibold text-cream-100 uppercase leading-none mt-0">skills</h1>
                        <ul className=''>
                            <li>
                                <p>Ability to understand team needs and develop ideas to meet objectives</p>
                            </li>
                            <li>
                                <p>Ability to communicate effectively</p>
                            </li>
                            <li>
                                <p>Fluent in English and Spanish</p>
                            </li>
                        </ul>
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

