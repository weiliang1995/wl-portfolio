import { PageID } from '@/utils/enum';

import image from '@/assets/imag.jpg';

const Cover = () => {
  return (
    <div className="relative py-32 text-center bg-cover overflow-hidden">
      <img
        src={image}
        alt="code background"
        className="absolute inset-0 contain object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-sky-100 opacity-80"></div>
      <div className="relative max-w-4xl mx-auto px-4">
        <span className="text-lg text-sky-800 font-semibold uppercase">
          Portfolio
        </span>
        <h1 className="mt-8 mb-8 text-sky-800 text-4xl lg:text-6xl font-bold uppercase">
          WILLIAM KUIK WEI LIANG
        </h1>
        <p className="mb-8 text-xl text-sky-800">Frontend Developer</p>
        <a
          className="inline-block w-full md:w-auto px-8 py-5 text-sm font-bold uppercase bg-sky-400 rounded-lg shadow-md hover:bg-sky-500 text-white transition"
          href={`#${PageID.Contact}`}
        >
          Get in touch
        </a>
      </div>
    </div>
  );
};

export default Cover;
