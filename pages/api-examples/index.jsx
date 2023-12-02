import axios from "axios"
import { useState } from "react"

export default function ApiExamples(){
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const responseProducts = await axios.get("https://64538c18e9ac46cedf286534.mockapi.io/api/course-01/products")
        if(responseProducts.status === 200){
            setProducts(responseProducts.data)
        }
        else {
            alert("Ürünler getirilirken bir hata oluştu")
        }
    }

    return(
        <div className="p-5 flex flex-col gap-5">
            <h1 className="text-xl">Ürün Listesi</h1>
            <p>Toplam ürün sayısı: {products.length}</p>

            <button
            onClick={getProducts}
             className="bg-blue-500 px-2 py-5 rounded-full">Ürünleri Getir</button>

             <div className="border-2 p-3 rounded-lg flex flex-col gap-5">
                {
                    products.map(product => {
                        return(
                            <div key={product.id} className="flex flex-col gap-2 bg-gray-200 p-2">
                                <h1 className="text-lg">{product.name}</h1>
                                <p>{product.description}</p>
                                <p>{product.price}</p>
                            </div>
                        )
                    })
                }
             </div>
        </div>
    )
}