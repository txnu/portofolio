import Tech1 from "../../assets/img/tech1.png";

const About = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="md:flex px-2 my-8 justify-between text-white sm:space-x-4 ">
        <div className="flex flex-col items-center sm:items-start mx-4 sm:mx-0 ">
          <p className="font-bold text-4xl pt-4 pb-2 text-center sm:text-start text-sky-500">
            About Kedai Programmer
          </p>
          <p className="font-semibold text-xl pb-2 text-gray-300">
            Berdiri sejak 16 Januari 2024
          </p>
          <p className=" text-lg text-justify text-gray-300 pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            velit iste dignissimos voluptas expedita id quia dolorum debitis
            pariatur eum a adipisci ad sapiente temporibus vero? Soluta atque
            accusantium magnam!
          </p>
        </div>
        <div className="md:flex  pt-4 pb-2 flex-col items-center sm:items-start mx-4 sm:mx-0 ">
          <img
            src={Tech1}
            alt=""
            className="object-cover border-2 border-dashed rounded-lg lg:border-none"
          />
        </div>
      </div>
      <div class="h-2 bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
    </div>
  );
};

export default About;
