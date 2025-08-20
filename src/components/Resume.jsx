/*import ResumeImg from '../assets/resume.jpg';

export const Resume =() =>  {
       const config = {
        link: https //github.com/yourusername/portfolio/blob/main/SIVASURYA.pdf

       }


    return <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
           <img className='w-[300px]' src={ResumeImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center'>
            <h1 className='text-4xl text-white border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
            <p className='pb-5 text-white'>
                You can View my resume 
                <a className='bg-primary px-5 py-2 font-bold hover:border-2 border-white rounded; } ' href={config.link} >Download</a>
            </p>
            </div>
        </div>
    </section>
}*/

import ResumeImg from '../assets/resume.jpg';

export const Resume = () => {
  const config = {
    link: "https://github.com/yourusername/portfolio/blob/main/SIVASURYA.pdf"
    // 👆 replace this with your actual Google Drive / GitHub link
  };

  return (
    <section id="resume" className="flex flex-col md:flex-row bg-secondary px-5">
      {/* Resume Preview Image */}
      <div className="py-5 md:w-1/2 flex justify-center md:justify-end">
        <img className="w-[300px]" src={ResumeImg} alt="Resume Preview" />
      </div>

      {/* Resume Download Section */}
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl text-white border-b-4 border-primary mb-5 w-[140px] font-bold">
            Resume
          </h1>
          <p className="pb-5 text-white">
            You can view my resume{" "}
            <a
              className="bg-primary px-5 py-2 font-bold hover:border-2 border-white rounded"
              href={config.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
