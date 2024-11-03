import Navbar from '../components/navbar/Navbar';
import WorkshopCard from '../components/workshopcard/WorkshopCard';


export default function Home() {
  return (

    
    <div >
      <Navbar />
      <main className="pt-24">
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <img src="/images/logo.png" alt="logo" className="pt-0 w-24 h-24"/>
            <div className="flex flex-col">
              <p className="mx-2 pt-2 text-base">YP Leathercraft</p>
              <p className="mx-2 pt-2 text-xs">Handmade Leather Goods</p>
            </div>
          </div>
        </div>
        <div className="relative mt-8">
          <img src="/images/homepage.jpg" alt="Banner" className="mx-auto w-full h-96 object-cover"/>
          <p className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50">
          Learn, Craft, and Master Leatherwork
          </p>
        </div>

        <section className="py-10 mx-40">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl mb-4">Leathercraft Workshops</h2>
            <p className="mb-4">Join our workshops and craft your own unique leather items with expert guidance.</p>
          </div>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <WorkshopCard 
            title="Card Holder" 
            image="/images/cardholder.jpg" 
            description="Craft your own leather cardholder and learn essential leatherworking techniques."
            duration='1 Hours'
            materials='Yes'
            price='$20 CAD'
            />
            <WorkshopCard 
            title="Bag Charm" 
            image="/images/bagcharm.jpg" 
            description="Design your own stylish leather bag charm—perfect for personalizing your favorite bag or giving as a unique gift."
            duration='1 Hours'
            materials='Yes'
            price='$20 CAD'
            />
            <WorkshopCard 
            title="Key Case" 
            image="/images/keycase.jpg" 
            description="Craft a durable, stylish leather key case to keep your keys organized and scratch-free. Learn basic leatherworking skills in a hands-on session."
            duration='1 Hours'
            materials='Yes'
            price='$20 CAD'
            />
          </div>
        </section>

        <section className="py-10 mx-40 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl mb-4">Our Location</h2>
            <p >In-Person Class</p>
            <p >Please book appointment if visiting studio</p>
            <p className='mb-4'>4 Deerfield Dr, Nepean, ON K2G 3R6</p>
            {/* Embed Google Map */}
            <div className="overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5607.416881236844!2d-75.75563632392038!3d45.354697471072356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce06e0520aa9ab%3A0x7dd630fc03ab4e5e!2s4%20Deerfield%20Dr%2C%20Nepean%2C%20ON%20K2G%203R6!5e0!3m2!1sen!2sca!4v1730420355432!5m2!1sen!2sca"
                width="100%" 
                height="450" 
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy">
              </iframe>

            </div>
            
          </div>
        </section>
        
        <section className="py-10 flex items-center justify-center min-h-screen bg-white">
          <div className="w-full max-w-2xl px-6 mx-4 text-center">
            <h2 className="text-3xl mb-4">Contact Us</h2>
            <p>Reach out to us and let us know if there is anything we can do for you.</p>
            <form className="mt-6">
              <div className="mb-4 flex flex-col items-start">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-4 flex flex-col items-start">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>

              <div className="mb-4 flex flex-col items-start">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="mt-4 px-6 py-2 bg-[#42563b] text-white rounded-md hover:bg-[#5a7853] transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>


      </main>
    </div>
  );
}
