import ContactForm from "../../components/ContactForm";
import ProductInfo from "../../components/ProductInfo";

export default function Iletisim() {
  const aciklama = "En kısa sürede size dönüş yapılacaktır.";
  return (
    <>
      <h2>İletişim Sayfası</h2>
      <p>Bize istediğiniz zaman ulaşabilirsiniz.</p>
      <p>Çalışma saatlerimiz aşağıdaki gibidir:</p>
      <p>Hafta içi: 09:00 - 18:00</p>
      <p>Hafta sonu: 10:00 - 16:00</p>
      <b>İletişim Bilgileri</b>
      <p>Telefon: 0532 000 00 00</p>
      <p>E-mail: test@lorem.com</p>
      <p>Adres: Lorem ipsum dolor sit amet.</p>

      <ContactForm formTitle="Bize Ulaşın" formDescription={aciklama} />
      <ProductInfo />
    </>
  );
}
