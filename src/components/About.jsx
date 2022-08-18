import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Huy, nice too meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I'm a Full-Stack developer with over 2 years of working
              experience. A curious learner and creative team player, I can
              utilize my understanding of coding and software development to
              efficiently fulfill the requirements of clients and customers. For
              long-term goals, I hope to find a suitable company to contribute
              my ability to help the company grow.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
