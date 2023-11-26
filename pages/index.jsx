//import { useState } from "react";
import ContactForm from "@/components/ContactForm";
import ProductInfo from "../components/ProductInfo";

export default function Home() {
  //const [popup, setPopup] = useState(true);
  const imageUrl =
    "https://img.lovepik.com/free-png/20220117/lovepik-tea-garden-view-png-image_401433788_wh860.png";

  // YORUM SATIRI - TEK SATIR
  const clickHandler = () => {
    alert("Tıklandı");
  };
  let firstName = "Canberk";

  const allProducts = [
    {
      name: "Siyah Kulaklık",
      price: 500,
    },
    {
      name: "Beyaz Kulaklık",
      price: 600,
    },
    {
      name: "Kırmızı Kulaklık",
      price: 700,
    },
  ];

  /* 
  YORUM SATIRI
  ÇOKLU
  SATIR
  */
  return (
    <>
      <h2
        onClick={clickHandler}
        className="baslik"
        style={{
          backgroundColor: "#252525",
          color: "red",
          cursor: "pointer",
        }}
      >
        Hello world
      </h2>
      {/*
      {popup === true ? (
        <div>
          <button
            onClick={() => {
              setPopup(false);
            }}
          >
            Kapat
          </button>
          <iframe
            style={{
              width: "100%",
              height: "500px",
            }}
            src="https://programiz.pro"
            title="description"
          ></iframe>
        </div>
      ) : null} */}
      <input
        type="text"
        onChange={(event) => {
          console.log(event.target.value);
          // input içerisindeki değer event.target.value ile alınır.
        }}
      />
      <p
        onClick={() => {
          console.log("Merhaba");
        }}
      >
        Merhaba
      </p>
      <img
        src="https://img.lovepik.com/free-png/20220117/lovepik-tea-garden-view-png-image_401433788_wh860.png"
        alt="nextjs"
      />
      <img src={imageUrl} alt="nextjs" />
      {/* 
        YORUM SATIRI
        */}
      <div>{firstName}</div>
      <ContactForm />
      <ProductInfo products={allProducts} />
    </>
  );
}

//Javascript XML - JSX
