import Tech1 from "../../assets/img/tech1.png";

const About = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="md:flex px-2 my-8 justify-between text-white sm:space-x-2 ">
        <div className="flex flex-col items-center sm:items-start mx-4 sm:mx-0 ">
          <p className="font-bold text-4xl pb-2">Kedai Programmer</p>
          <p className="font-bold text-xl pb-2 text-gray-300">
            Berdiri sejak 16 Januari 2024
          </p>
          <p className=" text-lg text-justify text-gray-300 pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            velit iste dignissimos voluptas expedita id quia dolorum debitis
            pariatur eum a adipisci ad sapiente temporibus vero? Soluta atque
            accusantium magnam!
          </p>
        </div>
        <img
          src={Tech1}
          alt=""
          style={{
            width: "780px",
            objectFit: "cover",
            // overflow: "hidden",
          }}
        />
      </div>
    </div>
  );
};

export default About;
