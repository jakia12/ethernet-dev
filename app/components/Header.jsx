import Link from "next/link";

const Header = () => {
  return (
    <div className="lg:pl-[40px] lg:pt-[40px] pl-[20px] pt-[20px]">
      <Link href="/" className="text-[#00FFB2] text-[25px]">
        ethernet.dev
      </Link>
      <p className="text-white text-[15px] mt-[17px]">
        A decentralized launchpad protocol on Ethereum.
      </p>
    </div>
  );
};

export default Header;
