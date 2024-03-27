import Logo_stream from "@/public/images/AiStream.png";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <>
      <div>
        <Link href="/">
          <Image src={Logo_stream} alt="logo AiStream" width={130} />
        </Link>
      </div>
    </>
  );
};
