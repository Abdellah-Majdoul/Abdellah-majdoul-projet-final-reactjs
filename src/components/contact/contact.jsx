import React from "react";
import images from "../../constant/images"
const Contact = () => {
  return (
    <div id="contact">
          <article className="relative isolate flex flex-col justify-center items-center overflow-hidden px-8 h-[40vh] mx-auto ">
          <img
            src={images.about}
            alt="University of Southern California"
            className="absolute inset-0 h-full w-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 " />
          <div className="relative bottom-4 z-10 flex flex-col justify-center items-center text-center gap-5">
          
            <div className="mt-1 text-7xl font-bold leading-6 text-white">
                Contact
            </div>
            
          </div>
        </article>
        <div className=" w-[98.5vw] h-[90vh] flex justify-center items-center"> 
            <div className="w-[90%] h-[80%]  flex">
                <div className="w-[50%] h-[100%] bg-white">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                 height={540} className='w-[100%]' allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div class=" mx-auto w-[50%] flex flex-col gap-4 p-8 bg-white rounded-md ">
  <h2 class="text-2xl font-semibold mb-6">Send us your message</h2>
  <form action="https://fabform.io/f/insert-form-id" method="POST">
    <div class="mb-4">
      <input type="text" id="name" name="name" placeholder="NAME" required
        className="w-full px-3 py-4 border rounded-md focus:outline-none focus:border-blue-500"/>
    </div>
    <div class="mb-4">
      <input type="email" id="email" name="email" placeholder="EMAIL" required
        className="w-full px-3 py-4 border rounded-md focus:outline-none focus:border-blue-500"/>
    </div>
    <div class="mb-4">
    <input type="number" id="number" name="number" placeholder="PHONE" required
      className="w-full px-3 py-4 border rounded-md focus:outline-none focus:border-blue-500"/>
  </div>
    <div class="mb-6">
      <textarea id="message" name="message" rows="5" placeholder="How can we help you?"
        class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
    </div>
    <button type="submit"
      className="bg-black text-white px-16 py-4   rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
      Send 
    </button>
    
  </form>
</div>

            </div>
        </div>
    </div>
  );
};

export default Contact;