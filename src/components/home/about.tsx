import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start">
      <Image
        src="/images/profile.png"
        alt="Profile Picture"
        width={128}
        height={128}
        className="rounded-full mb-6 md:mb-0 md:mr-6 shadow-lg w-100 h-100"
      />
    </div>
  );
}
