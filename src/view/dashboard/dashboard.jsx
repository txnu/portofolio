import profile from "../../assets/img/tanu.jpeg";

const Dashboard = (props) => {
  return (
    <div className="container mx-auto">
      <div className="flex space-x-2 px-2 my-2 justify-center text-white">
        <div className="container">
          <div className="flex justify-center items-center">
            <img
              src={profile}
              alt="profile"
              className="w-80 h-auto"
            />
          </div>
        </div>
        <div className="container pt-10">
          <div className="flex flex-col justify-start items-start">
            <p className="font-bold text-4xl">Tanu Wijaya</p>
            <p className="text-lg text-gray-500">Owner of Kedai Programmer</p>
            <p className="text-lg text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium delectus repellat eveniet inventore sunt corporis
              quasi, rem ab veritatis reiciendis, voluptatem qui? Ullam modi
              incidunt hic molestias necessitatibus veritatis expedita.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
