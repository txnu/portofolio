import About from "../about/about";
import Dashboard from "../dashboard/dashboard";

const Section = () => {
  return (
    <div className="w-full">
      <section id="dashboard">
        <Dashboard />
      </section>
      <section id="about">
        <About />
      </section>
    </div>
  );
};

export default Section;
