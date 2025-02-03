import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowForward } from "react-icons/io";
import officeImage from '@/assets/images/LifeAtRootLevel.png'; 

export default function LifeAtRootLevel() {
  return (
    <div className="relative bg-gray-900 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={officeImage}
          alt="Office environment"
          fill
          className="object-cover opacity-70"
        />
      </div>

      <div className="relative max-w-2xl md:mx-w-4xl  px-4 lg:px-12 pt-8 pb-64 flex items-start">
      <div className="bg-white text-gray-900 rounded-lg p-6 md:p-8 lg:p-8 md:max-w-lg max-w-md  " 
            style={{
              clipPath: "inset(0 0 0 0 round 5% 20% 0 10%)", // Added curve here
            }}
       >   
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Catch a glimpse of <span className="text-blue-600">#LifeAtRootLevel</span>
          </h2>
          <p className="text-gray-700 mb-6">
            Work at Root Level is more than just work; it is an exciting journey
            full of friendship, humor, and unending support. Enter our world and
            see how work and play may coexist together.
          </p>
          <Link
            href="/learn-more"
            className="inline-flex items-center text-blue-600 font-semibold hover:underline"
          >
            Find Out More
            <IoIosArrowForward  className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
