export default function Home() {
  const imageUrl =
    "https://img.lovepik.com/free-png/20220117/lovepik-tea-garden-view-png-image_401433788_wh860.png";

  // YORUM SATIRI - TEK SATIR

  let firstName = "Canberk";

  /* 
  YORUM SATIRI
  ÇOKLU
  SATIR
  */
  return (
    <>
      <h2
        className="baslik"
        style={{
          backgroundColor: "#252525",
          color: "red",
        }}
      >
        Hello world
      </h2>
      <p>Merhaba</p>
      <img
        src="https://img.lovepik.com/free-png/20220117/lovepik-tea-garden-view-png-image_401433788_wh860.png"
        alt="nextjs"
      />
      <img src={imageUrl} alt="nextjs" />
      {/* 
        YORUM SATIRI
        */}
      <div>{firstName}</div>
    </>
  );
}

//Javascript XML - JSX
