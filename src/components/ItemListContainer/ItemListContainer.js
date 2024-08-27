import { ItemList } from "./components/ItemList/ItemList"


export const ItemListContainer = ({titulo})=>{
    return <>
        <h3 className="text-center pt-6 text-5xl font-bold">{titulo}</h3>
        <div className="flex items-center justify-center " >
            <ItemList/>
        </div>
    </>
}