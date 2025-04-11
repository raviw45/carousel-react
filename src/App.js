import { useEffect, useState } from "react";
import "./styles.css";

const data = [
  "https://img.freepik.com/free-photo/neon-tropical-monstera-leaf-banner_53876-138943.jpg?semt=ais_hybrid&w=740",
  "https://images.unsplash.com/photo-1511300636408-a63a89df3482?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbHBhcGVyfGVufDB8fDB8fHww",
  "https://5.imimg.com/data5/SELLER/Default/2022/11/PZ/DS/KO/103578143/whatsapp-image-2022-11-11-at-11-11-40-am-500x500.jpeg",
  "https://c4.wallpaperflare.com/wallpaper/840/508/902/iceland-sea-snowy-peak-landscape-wallpaper-preview.jpg",
  "https://images8.alphacoders.com/932/932921.jpg",
  "https://wallpapercave.com/wp/wp6640145.jpg",
];
export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const handleNext = () => {
    setActiveSlide((activeSlide + 1) % data.length);
  };
  const handlePrev = () => {
    setActiveSlide(!activeSlide ? data.length - 1 : activeSlide - 1);
  };
  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      handleNext();
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeSlide]);
  return (
    <div className="App">
      <div className="container">
        <button onClick={handlePrev}>prev</button>
        {data.map((img, index) => (
          <img
            key={index}
            style={
              activeSlide === index ? { display: "block" } : { display: "none" }
            }
            className={`img`}
            src={img}
            alt={`slide-${index}`}
          />
        ))}
        <button onClick={handleNext}>next</button>
      </div>
    </div>
  );
}
