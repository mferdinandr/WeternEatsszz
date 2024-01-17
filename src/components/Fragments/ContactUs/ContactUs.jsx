import { IoLogoWhatsapp } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import { FaYoutube, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 h-screen content-center px-10 sm:mt-0 mt-10">
      {/*Contact Us */}
      <div className="lg:text-end border-8 border-r-orange-400 pr-10 border-y-0 border-l-0 col-span-2 flex flex-col justify-center">
        <h1 className="font-bold text-4xl text-orange-400 mb-2 ">Contact Us</h1>
        <p className="text-xl">
          If you have any question, critics, and suggesstion, maybe you can
          contact ourself
        </p>
        <div className="flex gap-10 mt-4 ml-4 lg:justify-end">
          <a href="">
            <IoLogoWhatsapp
              size={30}
              className="hover:cursor-pointer hover:text-green-500"
            />
          </a>
          <a href="">
            <AiFillInstagram
              size={30}
              className="hover:cursor-pointer hover:text-rose-600"
            />
          </a>
          <a href="">
            <FaYoutube
              size={30}
              className="hover:cursor-pointer hover:text-red-600"
            />
          </a>
          <a href="">
            <FaTwitter
              size={30}
              className="hover:cursor-pointer hover:text-blue-600"
            />
          </a>
        </div>
      </div>

      {/* Form */}
      <div className="w-full col-span-3 pt-5 mx-auto sm:w-3/4 lg:pt-1">
        <form action="" className="flex flex-col gap-2">
          <input
            type="text"
            className="border-2 border-black p-2 rounded-md font-semibold"
            placeholder="Name"
          />
          <select name="" id="" className='border-2 border-black p-2 rounded-md'>
            <option value="">Suggestion</option>
            <option value="">Critic</option>
            <option value="">Ask</option>
            <option value="">Etc</option>
          </select>
          <textarea type="text" rows={4} className="border-2 border-black p-2 rounded-md" placeholder='Your text here....'/>
          <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
