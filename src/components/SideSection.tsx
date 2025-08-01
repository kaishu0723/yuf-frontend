'use client'
import { Templete } from "@/types/TempleteType"
import { useState, useEffect } from "react"
import MainSection from "./MainSection"
import MyContext from "./context"

const SideSection = () => {

    const [list, setList] = useState<Templete[]>([])
    const [answer,setAnswer]=useState<string>('')

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/templeteData')
            if (!response.ok) {
                throw new Error(`HTTP error ${response.status}`)
            }
            const result = await response.json()
            const templeteData: Templete[] = result['templeteData']
            setList(templeteData)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchData()
        // setList([
        //     {
        //         id: 1,
        //         query: 'this is a test',
        //         response: 'success!'
        //     },
        //     {
        //         id: 2,
        //         query: 'this is a test',
        //         response: 'success!'
        //     },
        //     {
        //         id: 3,
        //         query: 'this is a test',
        //         response: 'success!'
        //     },
        //     {
        //         id: 4,
        //         query: 'this is a test',
        //         response: 'success!'
        //     },
        //     {
        //         id: 5,
        //         query: 'this is a test',
        //         response: 'success!'
        //     },
        //     {
        //         id: 6,
        //         query: 'this is a test',
        //         response: 'success!'
        //     },
        //     {
        //         id: 7,
        //         query: 'this is a test',
        //         response: 'success!'
        //     },
        //     {
        //         id: 8,
        //         query: 'this is a test',
        //         response: 'success!'
        //     },
        // ])
    }, []);

    const playAudioRequest = async (id: number) => {
        const result = list.find(item => item.id === id);
        if(result){
            setAnswer(result.response)
        }
        const postData = { id: result?.id }
        try {
            const response = await fetch('http://localhost:5000/api/audio', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="w-[90%] h-[90vh] bg-white/20 mx-auto my-8 rounded-lg p-4 backdrop-blur-sm flex">
            <MyContext.Provider value={answer}>
            <MainSection />
            </MyContext.Provider>
            <div className="w-1/3 bg-white/40 m-4 p-4 rounded-lg ">
                <div className="w-[100%] h-[100%] overflow-y-scroll hide-scrollbar">
                    {
                        list.map((item) => (
                            <button key={item['id']} onClick={() => playAudioRequest(item['id'])} className="w-[90%] h-[92px] grid place-content-center mx-auto my-4 text-center shadow-md rounded-lg bg-white/30 transition-all duration-75 hover:bg-gray-300/40">{item['query']}</button>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default SideSection;