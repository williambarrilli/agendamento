import "./styles.css";
import bannerImage from "../../assets/bannerImage.jpg";
import Button from "../../components/button";

export default function Home() {
  return (
    <div className="container">
      <div>
        <img className="banner" src={bannerImage} alt="bannerImage" />
      </div>
      <div>
        <h1 className="text"> Juliana Silva </h1>
      </div>
      <div className="content-buttons">
        <Button text="Agende" onclick={() => alert("batata")} />
      </div>
    </div>
  );
}
