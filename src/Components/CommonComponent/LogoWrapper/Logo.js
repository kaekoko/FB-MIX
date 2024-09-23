import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/dashboard">
      <Image
        src={`https://api.topwin.club/public/images/logo/logo.png`}
        alt="TopwinLogo"
        width={100}
        height={100}
        priority
      />
    </Link>
  );
};

export default Logo;
