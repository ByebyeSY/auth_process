import Image from "next/image";
import "./styles.scss";
import onePieceImage from "@/public/images/arabasta-hands-up.jpg";
import Navbar from "@/components/Navbar";

const HomePage = () => {
  return (
    <main className="home-container">
      <Navbar />

      <h1 className="home-title">
        <q>&nbsp;The One piece exists!!!&nbsp;</q>
      </h1>
    </main>
  );
};

export default HomePage;
