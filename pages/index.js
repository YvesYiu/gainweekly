import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="md:flex bg-white rounded-lg p-24 justify-center">
      <Image
        src="/images/space-shuttle.png"
        alt="Profile Pic"
        width={200}
        height={200}
      />
      <div className="text-center md:text-left">
        <h2 className="text-lg">Kenneth Yiu</h2>
        <div className="text-purple-500">Full Stack Developer</div>
        <div className="text-gray-600">Twitter: @yvesyiu</div>
        <div className="text-gray-600">Nothing need to worry</div>
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Trial
        </button>
      </div>
    </div>
  );
}
