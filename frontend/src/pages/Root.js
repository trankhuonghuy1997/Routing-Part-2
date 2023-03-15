import { Outlet } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"

const Root =()=>{
    return(
        <main>
            <MainNavigation/>
            <Outlet/>
        </main>
    )
}
export default Root