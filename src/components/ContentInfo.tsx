import Three from "./Three";

const ContentInfo = () => {
    return (
        <div className="w-[100%] h-4/5 shadow-inner p-2 bg-black/10 rounded-md">
            <Three/>
            {/* boolean : <Three/> ? <Info/> */}
        </div>
    );
}

export default ContentInfo;