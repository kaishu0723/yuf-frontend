'use client'

const RealtimeRequest = () => {

    const requestGenerate=async()=>{
        const postData={
            message:'start!'
        }
        try{
            const response=await fetch('http://localhost:5000/api/realtime',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(postData),
            });
            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result=await response.json();
            console.log(result?.query)
            console.log(result?.answer)
        }catch(err){
            console.error(err);
        }
    }

    return (
        <button
            onClick={()=>requestGenerate()}
            className="p-2 grid place-content-center mx-4 text-center shadow-md rounded-full bg-white/30 transition-all duration-75 hover:bg-gray-300/40"
        >
            おばあちゃんに聞いてみる
        </button>
    );
}

export default RealtimeRequest;