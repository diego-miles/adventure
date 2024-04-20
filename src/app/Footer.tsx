import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-slate-800 h-svh pt-12 md:pt-20 lg:pt-24">
      <div className="container mx-auto p-4 md:p-6 lg:p-12">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 xl:w-1/4 p-4">
            <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>
            <ul>
              <li>
                <Link href="mailto:info@example.com">
                  <span className="text-gray-400 hover:text-gray-200">capitaldeaventura@gmail.com</span>
                </Link>
              </li>
              <li>
                <Link href="tel:+529551234567">
                  <span className="text-gray-400 hover:text-gray-200">+52 955 123 4567</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="text-gray-400 hover:text-gray-200">Contact Form</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4 p-4">
            {/* <h3 className="text-lg font-bold mb-4 text-white">Services</h3> */}
            <ul>
              <li>
                <Link href="#">
                  <span className="text-gray-400 hover:text-gray-200">Wiki Science</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="text-gray-400 hover:text-gray-200">Cultiva Saber</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="text-gray-400 hover:text-gray-200">Oaxaca Subversiva</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="text-gray-400 hover:text-gray-200">Barro Origen</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4 p-4 text-center">
            <p className="sm italic font-light text-white/80 pt-14">From Oaxaca to the  <span className='not-italic	'>🌎</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;