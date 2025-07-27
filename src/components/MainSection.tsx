import ContentInfo from "./ContentInfo";
import ResponseContent from "./ResponseContent";

const MainSection = () => {
    return (
        <div className="w-2/3 bg-white/40 m-4 p-4 rounded-lg relative">
            <ContentInfo/>
            <ResponseContent/>
        </div>
    );
}

export default MainSection;