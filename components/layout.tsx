import Footer from './footer'
import Meta from './meta'
import Nav from './nav'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-purple-200">
        <Nav/>
        <main
          id="skip"
          className="flex flex-col justify-center px-8 bg-purple-200"
        >
          {children}
          {/* <Footer /> */}
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
