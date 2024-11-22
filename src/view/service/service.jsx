import Tech2 from "../../assets/img/tech2.png";

const Service = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="md:flex px-2 my-8 justify-between sm:space-x-4 ">
        <div className="flex flex-col items-center sm:items-start mx-4 sm:mx-0 ">
          <img
            src={Tech2}
            alt=""
            className="object-cover border-2 border-dashed rounded-lg lg:border-none"
          />
        </div>
        <div className="md:flex flex-col text-center items-center sm:items-start sm:text-start mx-4 sm:mx-0 ">
          <p className="font-bold text-4xl pt-4 pb-2 md:pt-0 text-sky-500">
            Service
          </p>
          <p className="font-semibold text-xl pb-2 text-gray-300 ">
            Fullstack Development | Web Development | Mobile Development
          </p>
          <p className=" text-lg text-justify text-gray-300 pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            velit iste dignissimos voluptas expedita id quia dolorum debitis
            pariatur eum a adipisci ad sapiente temporibus vero? Soluta atque
            accusantium magnam!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
