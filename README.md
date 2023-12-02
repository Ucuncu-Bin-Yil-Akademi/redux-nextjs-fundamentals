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

## useState ve useEffect Hook'ları

- React içinde oluşturduğumuz değişkenler reaktif değildir. Yani const counter = 0 şeklinde açtığımız bir değişkeni React içerisinde counter = counter + 1 şeklinde güncellememiz mümkün değildir. Bunu useState Hook'u ile yapmamız gerekecektir. State değerini setState şeklinde (ör: setCounter) güncelleyebiliriz:

```
import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

    useEffect(() => {
    alert("Sayfa yüklendi");
    }, []);

  useEffect(() => {
    alert("Counter değişti");
  }, [counter]);

  return (
    <>
      <button onClick={() => { setCounter(counter - 1); }}>
        Azalt
      </button>
    </>
  );
}
```

## Redux

- İlk önce ihtiyaç duyulan paketler ``` npm install redux``` ve ``` npm install react-redux ``` komutları ile yüklenir
- store > reducers klasörü altında bir reducer oluşturulur (Ör: counterReducer.js) ve store üzerinde başlangıç değeri ve yapılacak olan fonksiyonel işlemler tanımlanır (action):

```
const initialState = {
    count: 0,
}

const counterReducer = (state = initialState, action) => {
    switch (action.type){
        case 'INCREMENT':
            return {count: state.count + 1};
        case 'DECREMENT':
            return {count: state.count - 1};
        default:
            return state;
    }
}

export default counterReducer;
```

- reducers > index.js içerisinde oluşturulan reducer'lar combine edilerek tek bir reducer altında derlenir: 

```
import { combineReducers } from "redux";
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
    counter: counterReducer
})

export default rootReducer;
```

- store > store.js içerisinde oluşturulan store'lar (rootReducer bizim combine edilmiş olan yapımız olduğu için tek tek tanımlama yapmaya ihtiyaç kalmadı) tanımlanır:

```
import {createStore} from 'redux';
import rootReducer from './reducers';

const CounterStore = createStore(rootReducer);

export {CounterStore}
```

- Proje içerisindeki bütün component'lerden store'umuza erişebilmek için _app.js içerisinde aşağıdaki wrap işlemi yapılır:
```
import { Provider } from 'react-redux'
import {CounterStore} from '../store/store';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return(
    <Provider store={CounterStore}>
      <Component {...pageProps} />
    </Provider>
  )
}
```

** Güncelleme - Dispatch işlemi

```

import { useDispatch } from "react-redux";

export default function CounterButtons(){

    const counterUpdate = useDispatch();

    return(
        <div className='w-full m-5 flex gap-5'>
             <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => {
          counterUpdate({type: 'INCREMENT'})
        }}
      >
        Artır
      </button>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => {
          counterUpdate({type: 'DECREMENT'})
        }}
      >
        Azalt
      </button>
        </div>
    )
}
```

** Store'dan bir state almak için:

```
import CounterButtons from "@/components/CounterButtons";
import { useSelector } from "react-redux";

export default function Counter() {
  let counterValue = useSelector((state) => state.counter.count)
  return (
    <>
      <b>Sayaç: {(counterValue)}</b>
     <CounterButtons />
    </>
  );
}
```

