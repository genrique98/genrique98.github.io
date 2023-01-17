import Container from './container'

const Footer = () => {
  return (
    <footer className="bg-purple-100">
      <Container>
        <div className="py-10 flex flex-col lg:flex-row items-center justify-center max-w-7xl">

          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2 pb-4 lg:pb-0">
            <h3 className="text-4xl lg:text-[2.5rem] font-semibold text-center lg:text-left text-cream-100">
              {/* A Never-ending journey */}
              Open to Work
            </h3>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <p className="border-4 border-purple-200 rounded-xl text-cream-100 font-bold py-3 px-12 lg:px-8 duration-200 transition-colors">
              2023, Gabriel Ramirez. All rights reserved.
            </p>
          </div>

        </div>
      </Container>
    </footer>
  )
}

export default Footer
