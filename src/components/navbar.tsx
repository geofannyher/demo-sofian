import { FaCircle } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <nav className="bg-mainColor z-20 w-full rounded-bl-xl rounded-br-xl  shadow-md">
        <div className="container mx-auto max-w-screen-xl items-center justify-between p-4">
          <div className="grid grid-cols-12">
            <div className="col-span-12  md:col-span-6 lg:col-span-6">
              <div className="flex items-center gap-2">
                <div className="relative flex">
                  <img
                    src={"https://picsum.photos/200/300"}
                    className="h-10 w-10 items-center justify-center rounded-full object-cover"
                  />
                  <div className="absolute bottom-0 right-0 text-green-500">
                    <FaCircle size={10} className="pulse-animation" />
                  </div>
                </div>
                <div className="flex flex-col text-white">
                  <h1 className="font-semibold">Lindy</h1>
                  <h1 className="text-sm">Online</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
