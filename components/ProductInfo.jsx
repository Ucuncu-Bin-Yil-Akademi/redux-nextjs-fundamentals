export default function ProductInfo({ products }) {
  const productCount = 3;
  return (
    <>
      <h2>Toplam Ürün sayısı: {productCount}</h2>
      {products.map((product) => {
        return (
          <div className="p-5 m-5 border flex flex-col">
            <p>
              Ürün Adı: <b>{product.name}</b>
            </p>
            <p>
              Ürün Fiyatı: <b>{product.price} ₺</b>
            </p>
          </div>
        );
      })}
    </>
  );
}
