import { IoReload } from "react-icons/io5";

const Loading = () => {
  return (
    <div className="min-h-screen">
      <IoReload
        className="animate-spin text-primary-portfolio absolute z-1 top-1/2 left-1/2 translate(50%, 50%)"
        size={40}
      />
    </div>
  );
};

export default Loading;
