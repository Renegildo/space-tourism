import { logo } from "../assets";

const Navbar = () => {
  return (
    <header className="flex">
      <img src={logo.src} className="w-12" width={48} height={48} />
      <ul className="bg-white/5"></ul>
    </header>
  );
};

export default Navbar;
