## 1- Yeni bir React & NextJS uygulaması oluşturmak

Yeni bir proje oluşturmak için:

- "npx create next-app" komutu terminal'de çalıştırılır
- Tailwind haricindeki bütün seçenekler "No" diyerek geçilebilir (tercihe bağlı)

## 2- NextJS Template'inin temizlenmesi

Silinecek olan klasör/dosya ve satırlar şu şekildedir:

- pages > api klasörü
- styles > globals.css içerisinde @tailwind şeklinde başlayan satırlar haricindeki diğer satırlar silinir
- pages > index.js altındaki bütün import'lar silinir (export default üzerindeki satırlar silinir) ve return() içerisi temizlenir. return() içerisinde boş bir etiket açıp kapatılabilir.
  \*JSX gösteriminde return içerisinde bütün HTML elemanlarını kapsayan bir etiket olmak zorundadır. Ör:

```
return(
    <h2>Selam</h2>
    <span>selam</span>
)
```

şeklindeki bir gösterim JSX yapısına uygun olmadığı için hata verecektir. Bunun yerine bütün elemanları kapsayan bir parent etiket olmalıdır:

```
return(
    <>
    <h2>Selam</h2>
    <span>selam</span>
    </>
)
```

## 3- Projenin ayağa kaldırılması

Projemizi local sunucuda ayağı kaldırmak için

```
npm run dev
```

komutu terminalde çalıştırılır

## 4- JSX gösterimi

- inline css yazmak için HTML'de olduğu gibi style="" yapısını kullanmak yerine style={{ }} yapısını kullanmamız gerekmektedir.
  -Dikkat edilmesi gereken diğer husus ise CSS propertylerini yazarken tire işareti kullanmamaktadır. Bunun yerine camelCase gösterim kullanılmalıdır.
- Ayrıca CSS property'lerini ayırmak için ";" yerine "," kullanılmalıdır

```
style={{
    background-color: "#252525";
    color: "red"
}}

```

yerine aşağıdaki yapı kullanılmalıdır:

```
style={{
    backgroundColor: "#252525",
    color: "red"
}}
```

- HTML etiketlerine class attribute'u tanımlanırken class="heading" yapısı yerine className="heading" yapısı kullanılmalıdır. Kısacası class attribute'u yerine JSX yapısında className attribute'u kullanılır.

- Bir attribute'a değişken bir değer atamak istiyorsak attribute={degiskenAdi} şeklinde tanımlama yapabiliriz:

```
    <img src={imageUrl} alt="nextjs" />
```

- DOM kısmında bir değişken çağırmak için yine süslü parantez kullanılabilir: {degiskenAdi}

- return içerisinde (DOM kısmında) Javascript yazılmaz (İstisnalar alt maddede belirtilmiştir). Javascript kodlarını return() yapısının üzerinde yazarız:

```
export default function Home() {

    JAVASCRIPT KODLARI BURADA YAZILIR

    return(
        <>
            HTML KODLARI BURADA YAZILIR
        </>
    )
}
```

- JSX yapısında (DOM içerisinde) yorum satırı HTML'de olduğu gibi <!-- COMMENT --> şeklinde değil aşağıdaki gibi açılır. Javascript yazılan yani return() öncesindeki kısımda yorum satırları Javascript'teki gibidir.

```
{
    /*
        YORUM SATIRI
    */
}
```

- Event'leri kontrol etmek için camelCase olmak kaydıyla attribute olarak elemana tanımlayabiliriz. Bu event'in attribute'una değer olarak bir anonim - anonymous fonksiyon girilir ve Javascript yazılan kısımda bir fonksiyon oluşturup bu fonksiyon çağrılabilir.

```
<h2
onClick={() => {
    alert("Tıklandı")
}}>Tıklanabilir eleman</h2>


<h2 onClick={clickHandler}>Tıklanabilir eleman</h2>
```

- NextJS projesinde 'pages' klasörü içine açtığımız her dizin bir sayfa olarak tanımlanır. Örneğin pages > sayfa-adi şeklinde açtığımız bir klasör artık bir sayfa olacaktır. Bu sayfaya doğrudan http://localhost:3000/sayfa-adi şeklinde erişebiliriz. Bu klasörün içindeki index.jsx dosyası bizim sayfamızın ana component dosyasıdır.

## 5- Component ve Props

Component oluşturmadaki temel amacımız aşağıdaki gibi özetlenebilir:

- Kod kalabalığını ve satır sayısını azaltmak
- Reusable - Tekrar kullanılabilirlik ve bakım maliyetlerinin düşürülmesi (Örneğin Header alanı component şeklinde yazılmadığı takdirde her sayfada tek tek güncellenmek ve aynı kodu tekrar tekrar bu sayfada yazmak zorunda kalınabilir)
- Performans katkısı

### Component Oluşturma ve Çağırma

- Yeni component oluşturmak için root dizininde 'components' adında bir klasör oluşturup, component'larımızı bu klasör içerisinde yaratabiliriz.Örnek: components > ContactForm.jsx
- Bu component'imizi çağırmak için ise, çağırmak istediğimiz sayfaya/component'e gidip ilk önce import etmemiz gerekir:

```
import ContactForm from "../../components/ContactForm";
```

-Import ettiğimiz component'i kullanmak için çağırdığımız component içinde '<ContactForm />' şeklinde istediğimiz yerde kullanmamız yeterlidir.

### Props

- Bir component'e prop göndermek için attribute şeklinde tanımlama yapmamız yeterlidir:

```
<ContactForm propName='value of prop' />
```

- Component'te bir prop'u çağırmak için aşağıdaki yaklaşımı kullanabiliriz:

```
function ContactForm({ propName }) {
  return (
    <>
      <div className="p-5 m-5 border flex flex-col">
        {propName}
      </div>
    </>
  );
}

export default ContactForm;
```

Bu component'teki propName değişkeninin değeri 'value of prop' şeklinde olacaktır.

- Prop'ları karşılamak için alternatif bir yaklaşım (Fazla sayıda prop gönderiliyorsa oldukça kullanışlıdır):

```
function ContactForm(props) {
  return (
    <>
      <div className="p-5 m-5 border flex flex-col">
        {props.propName}
      </div>
    </>
  );
}

export default ContactForm;
```

## PROP DRILLING

-Component'ler arasında props ile değişkenleri nasıl aktaracağımızı gördük. Örneğin Home.jsx component'inden ContactForm component'ine veya ProductInfo component'ine kolaylıkla props aktarabiliyoruz (Yukarıdan aşağıya doğru - Parent'tan Child'a doğru).

-Ancak ContactForm component'inden Home.jsx (Child'tan Parent'a) component'ine veya ContactForm'dan ProductInfo (Child'tan Child'a) component'inde data göndermek kolay olmayacaktır. Bu gibi durumlarda data'nın aşağıdan yukarıya veya yatay olarak taşınması zorluk çıkartacaktır. Bu sorun 'Prop Drilling' olarak adlandırılır.

- Bunun çözümü için Redux gibi araçlar kullanılabilir.
