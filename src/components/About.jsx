import AboutImg from '../assets/about.png';

export const About =() =>  {
    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
           <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center'>
            <h1 className='text-4xl text-white border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
            <p className='pb-5 text-white'>Hi, I'm <span className="font-semibold">Sivasurya</span>, a passionate
            <span className="text-primary"> Python Full-Stack Developer</span>. I enjoy
            building modern web applications using technologies like
            <span className="text-primary"> Django, React, REST APIs, and MySQL</span>.
          </p>
          <p className="pb-5 text-white leading-7 mb-4">
            I specialize in both front-end and back-end development — creating
            clean, responsive UIs and writing efficient backend logic. My goal is
            to deliver scalable, user-friendly solutions.
          </p>
          <p className="pb-5 text-white leading-7">
            Currently, I am looking for opportunities as a fresher in IT companies
            or startups where I can contribute my skills and grow as a developer. 🚀
          </p>
            </div>
        </div>
    </section>
}