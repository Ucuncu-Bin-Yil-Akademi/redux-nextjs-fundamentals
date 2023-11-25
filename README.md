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

````
```
return(
    <h2>Selam</h2>
    <span>selam</span>
)
````

```
şeklindeki bir gösterim JSX yapısına uygun olmadığı için hata verecektir.
```
