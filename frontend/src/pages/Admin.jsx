import { useState } from "react"
import AdminLogin from "../components/containers/AdminLogin"
import AdminPage from "../components/containers/AdminPage"

export default function Admin() {
    const [ stage, setStage ] = useState(0);
    const [ data, setData ] = useState([]);

    const onChangeStage = (stage) => { setStage(stage); }
    const onChangeData = (data) => { setData(data); }

    return (
        <>
         { stage == 0 
         ? <AdminLogin onChangeStage={onChangeStage} onChangeData={onChangeData}/>
         : <AdminPage data={data}/> }
        </>
    )
}