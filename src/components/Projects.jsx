import websiteImg1 from '../assets/ecommerce-websites.jpg';
import websiteImg2 from '../assets/food-ecommerce.jpg';
import websiteImg3 from '../assets/website-blog.jpg';

export const Projects = () => {
  return (
    <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
      <div className="w-full">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">
            Projects
          </h1>
          <p>
            These are some of my best projects. I have built these with React,
            MERN and vanilla CSS. Check them out
          </p>
        </div>
      </div>

      {/* Project Cards Row */}
      <div className="w-full">
        <div className="flex flex-col md:flex-row px-10 gap-5">
          {/* Project 1 */}
          <div className="relative flex-1">
            <img className="h-[200px] w-full object-cover" src={websiteImg1} />
            <div className="absolute inset-0 bg-secondary opacity-0 duration-500 hover:opacity-100">
              <p className="text-center px-5 py-5">
                An Ecommerce website. Built with MERN Stack.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="relative flex-1">
            <img className="h-[200px] w-full object-cover" src={websiteImg2} />
            <div className="absolute inset-0 bg-secondary opacity-0 duration-500 hover:opacity-100">
              <p className="text-center px-5 py-5">
                Food Ecommerce website like Swiggy, Built With Angular & .Net
              </p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="relative flex-1">
            <img className="h-[200px] w-full object-cover" src={websiteImg3} />
            <div className="absolute inset-0 bg-secondary opacity-0 duration-500 hover:opacity-100">
              <p className="text-center px-5 py-5">
                Basic website. Built with Next.js and MongoDB
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


