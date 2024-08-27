import { useEffect, useState } from "react"
import { Item } from "../Item/Item"


export const ItemList= ()=>{
    const itemsData = [
        {id:`termica`, title: `producto 1`, price:314, imgUrl:`https://www.electromisiones.com.ar/2821-large_default/termica_bipolar_schneider_easy9_16a_45ka_curva_c.jpg`},
        {id:`termica`, title: `producto 2`, price:314, imgUrl:`https://www.electromisiones.com.ar/2821-large_default/termica_bipolar_schneider_easy9_16a_45ka_curva_c.jpg`},
        {id:`cable`, title: `producto 3`, price:314, imgUrl:`https://www.electromisiones.com.ar/2821-large_default/termica_bipolar_schneider_easy9_16a_45ka_curva_c.jpg`},
        {id:`cable`, title: `producto 4`, price:314, imgUrl:`https://www.electromisiones.com.ar/2821-large_default/termica_bipolar_schneider_easy9_16a_45ka_curva_c.jpg`},
        {id:`cable`, title: `producto 5`, price:314, imgUrl:`https://www.electromisiones.com.ar/2821-large_default/termica_bipolar_schneider_easy9_16a_45ka_curva_c.jpg`},
        {id:`cable`, title: `producto 6`, price:314, imgUrl:`https://www.electromisiones.com.ar/2821-large_default/termica_bipolar_schneider_easy9_16a_45ka_curva_c.jpg`},
    ]

    const getItems = ()=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(itemsData)
            },2000)
        })
    }

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getItems().then((data)=>{
            setItems(data)
            setLoading(false)
            })
        })

        if(loading){
            return <>
                <div className="text-3xl font-black mt-6">*Cargando Items*</div>
            </>
        }

    return<>
        <div className="w-3/4 flex justify-center items-center mt-8 flex-wrap">
        {items.map(item => (
                <Item
                    key={item.title}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    imgUrl={item.imgUrl}
                    stockNumber={10}
                />
            ))}
        </div>
    </>
}