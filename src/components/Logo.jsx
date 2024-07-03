import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import LogoImage from "@/images/logos/Logo_1-01.svg"; // Update this path if needed

const Logo = ({ className, ...props }) => {
  return (
    <Link href={"/"}>
      <div className={clsx("inline-flex items-center h-full", className)} {...props}>
        <Image src={LogoImage} alt="Jihan M. Qurban Law Firm Logo" width={350} height={150} />
      </div>
    </Link>
  );
};

export default Logo;
