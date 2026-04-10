import Image from "next/image";
import myImg from "../assets/images/DigiTools.png";

export default function Home() {
  return (
    <div>
      <main>
        <p>Home page</p>
        <Image
          src="https://picsum.photos/200"
          width={300}
          height={300}
          loading="eager"
          alt="Image"
        />
      </main>
    </div>
  );
}
