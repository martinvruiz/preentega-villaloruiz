import { CartWidget } from "./components/CartWidget/CartWidget"

export const NavBar = ()=>{

    return <>
        <nav className="flex items-center justify-center bg-cyan-700 h-14">
            <ul className="flex justify-center justify-items-center text-white h-full items-center">
                <li className="mx-6">
                    <a className="font-bold text-xl" href="#">Proelec</a>
                </li>
                <li className="mx-6">
                    <a href="#">Termicas y Diferenciales</a>
                </li>
                <li className="mx-6">
                    <a href="#">Cable</a>
                </li>
            </ul>
            <CartWidget/>
        </nav>
    </>
}