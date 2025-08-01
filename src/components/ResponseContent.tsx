import RealtimeRequest from "./RealtimeRequest";
import { useContext } from "react";
import MyContext from "./context";

const ResponseContent = () => {
    const data=useContext(MyContext)
    console.log('ResponseContent data:', data); // デバッグ用
    return (
        <div className="my-4">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl"> おばあちゃん</h2>
                <RealtimeRequest/>
            </div>
            <hr className="my-2"/>
            <p className="h-auto">{data || 'データがありません'}</p>
        </div>
    );
}

export default ResponseContent;