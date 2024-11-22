const Owner = (props) => {
  return (
    <div className="flex flex-col justify-center items-center text-justify mx-4 sm:justify-start sm:items-start sm:mx-0">
      <p className="font-bold text-4xl">{props.name}</p>
      <p className="text-lg text-gray-500 font-semibold">{props.title}</p>
      <p className="text-lg text-gray-300 pt-4">{props.description}</p>
    </div>
  );
};

export default Owner;
