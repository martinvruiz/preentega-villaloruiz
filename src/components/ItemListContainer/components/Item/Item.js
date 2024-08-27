
import { ItemCount } from "./components/ItemCount/ItemCount"

export const Item = ({stockNumber,title,price,imgUrl,id})=>{
    return <>
        <div className="flex flex-col items-center w-56 mx-2 my-2 h-auto p-3 border border-cyan-700 rounded-md">
            <img className="object-contain w-1/2 h-28" src={imgUrl} alt={title}/>
            <h4 className="font-bold">{title}</h4>
            <p>${price}</p>
            <ItemCount stock={stockNumber}/>
            <p className="hidden">{id}</p>
        </div>
    </>
}