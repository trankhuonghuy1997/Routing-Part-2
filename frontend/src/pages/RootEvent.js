import { Outlet } from "react-router-dom"
import EventsNavigation from "../components/EventsNavigation"

const RootEvent =()=>{
    return(
        <main>
            <EventsNavigation/>
            <Outlet/>
        </main>
    )
}
export default RootEvent