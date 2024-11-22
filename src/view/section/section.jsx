import About from "../about/about";
import Dashboard from "../dashboard/dashboard";
import Service from "../service/service";

const Section = () => {
  return (
    <div className="w-full">
      <section id="dashboard">
        <Dashboard />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="service">
        <Service />
      </section>
    </div>
  );
};

export default Section;
