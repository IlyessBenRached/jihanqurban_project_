import distinguished from "@/images/logos/distinguishedV02-02.svg";
import innovative from "@/images/logos/innovativeV02-02.svg";
import professional from "@/images/logos/professionalV02-02.svg";
import transparentV from "@/images/logos/transparentV02-02.svg";

import Image from "next/image";

const ExtraLogos = () => {
  const logos = [
    { _id: 2001, title: "distinguished", logo: distinguished },
    { _id: 2002, title: "innovative", logo: innovative },
    { _id: 2003, title: "professional", logo: professional },
    { _id: 2004, title: "transparentV", logo: transparentV },
  ];

  return (
    <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
      <ul
        role="list"
        className="mx-auto mt-8 flex max-w-xl justify-center space-x-6 lg:mx-0 lg:justify-start"
      >
        {logos.map(({ _id, title, logo }) => (
          <li key={_id} className="inline-block">
            <Image src={logo} alt={title} className="h-8" unoptimized />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExtraLogos;
