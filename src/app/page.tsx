import { FC } from "react";

const Home: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <nav className="w-full bg-white shadow-md">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">Igor Zanella</div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Services
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Contact
            </a>
          </div>
        </div>
      </nav>
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Hello world, I am Igor Zanella
      </h1>
      <p className="mt-4 text-lg text-center text-gray-600">
        Welcome to my freelancing website.
      </p>
    </div>
  );
};

export default Home;
