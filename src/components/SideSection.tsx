'use client'
import { Templete } from "@/types/TempleteType"

const SideSection = () => {

    const list:Templete[]=[
        {
            id:1,
            query:"はろー、これはテストです！",
            response:"これはテストらしいです"
        },
        {
            id:2,
            query:"はろー、これはテストです！",
            response:"これはテストらしいです"
        },
        {
            id:3,
            query:"はろー、これはテストです！",
            response:"これはテストらしいです"
        },
        {
            id:4,
            query:"はろー、これはテストです！",
            response:"これはテストらしいです"
        },
        {
            id:5,
            query:"はろー、これはテストです！",
            response:"これはテストらしいです"
        },
        {
            id:6,
            query:"はろー、これはテストです！",
            response:"これはテストらしいです"
        },
        {
            id:7,
            query:"はろー、これはテストです！",
            response:"これはテストらしいです"
        },
        {
            id:8,
            query:"はろー、これはテストです！",
            response:"これはテストらしいです"
        },
    ]

    const handleButtonClick=(id:number)=>{
        const result=list.find(item=>item.id===id);
        console.log(result?.response)
    }

    return (
        <div className="w-1/3 bg-white/40 m-4 p-4 rounded-lg ">
            <div className="w-[100%] h-[100%] overflow-y-scroll hide-scrollbar">
            {
                list.map((item)=>(
                    <button key={item['id']} onClick={()=>handleButtonClick(item['id'])} className="w-[90%] h-[92px] grid place-content-center mx-auto my-4 text-center shadow-md rounded-lg bg-white/30 transition-all duration-75 hover:bg-gray-300/40">{item['query']}</button>
                ))
            }
            </div>
        </div>
    );
}

export default SideSection;