import { ImageSlider } from "./ImageSlider";
import img1 from "./img/anyma.jpg";
import img2 from "./img/business_cover.jpeg";
import img3 from "./img/eye.jpg";
import img4 from "./img/man.jpg";
import img5 from "./img/owl.jpeg";

const IMAGES = [img1, img2, img3, img4, img5];

export default function App() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        aspectRatio: "10 / 6",
        margin: "0 auto",
      }}
    >
      <ImageSlider imageUrls={IMAGES} />
    </div>
  );
}
