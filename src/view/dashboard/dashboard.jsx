import profile from "../../assets/img/tanu.jpeg";
import Owner from "./components/owner";

const Dashboard = () => {
  return (
    <div className="container mx-auto">
      <div className="sm:flex px-2 my-8 justify-between text-white sm:space-x-2 ">
        <div className="flex px-6 w-full justify-center items-center overflow-hidden">
          <img
            src={profile}
            alt="profile"
            className="object-cover w-full h-96 rounded-xl border-dashed border-2"
          />
        </div>
        <div className="container pt-4">
          <Owner
            name="Tanu Wijaya"
            title="Owner of Kedai Programmer"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium delectus repellat eveniet inventore sunt corporis
              quasi, rem ab veritatis reiciendis, voluptatem qui? Ullam modi
              incidunt hic molestias necessitatibus veritatis expedita."
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
