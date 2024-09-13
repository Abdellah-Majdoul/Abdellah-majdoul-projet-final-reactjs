import React from "react";
import images from "../../constant/images"
const About = () => {
  return (
    <div id="about">
          <article className="relative isolate flex flex-col justify-center items-center overflow-hidden px-8 h-[40vh] mx-auto ">
          <img
            src={images.about}
            alt="University of Southern California"
            className="absolute inset-0 h-full w-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 " />
          <div className="relative bottom-4 z-10 flex flex-col justify-center items-center text-center gap-5">
          
            <div className="mt-1 text-7xl font-bold leading-6 text-white">
                ABOUT
            </div>
            
          </div>
        </article>
      <div className="flex flex-col md:flex-row gap-8 pt-20 pb-20">
        {/* Image Section */}
        <div className="md:w-1/3 mb-8 md:mb-0">
          <div className="overflow-hidden">
            <img
              src="//fashe-theme.myshopify.com/cdn/shop/t/2/assets/about_story.jpg?v=81079471653385013921515692421"
              alt="Our story"
              className="transform transition duration-500   hover:scale-105"
              
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="md:w-2/3">
          <h3 className="text-3xl  pt-4">Our story</h3>
          <p className="mb-6 text-[#88888c] leading-relaxed text-xl pt-5">
            Phasellus egestas nisi nisi, lobortis ultricies risus semper nec.
            Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla
            dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque
            porta est ac neque bibendum viverra. Vivamus lobortis magna ut
            interdum laoreet. Donec gravida lorem elit, quis condimentum ex
            semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet
            sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque
            congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis
            lectus a arcu facilisis, eu sodales lectus sagittis. Etiam
            pellentesque, magna vel dictum rutrum, neque justo eleifend elit,
            vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo
            efficitur, quam velit convallis ipsum, et maximus enim ligula ac
            ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices
            orci.
          </p>

          {/* Quote Section */}
          <div className="border-l-4 border-gray-300 pl-4">
            <p className="italic mb-4 text-[#88888c] text-xl">
              Creativity is just connecting things. When you ask creative people
              how they did something, they feel a little guilty because they
              didn't really do it, they just saw something. It seemed obvious to
              them after a while.they just saw something. It seemed obvious to
            </p>
            <span className="text-sm text-gray-500">- Steve Jobs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;