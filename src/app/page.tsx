import MainSection from "@/components/MainSection";
import SideSection from "@/components/SideSection";

export default function Home() {
  return (
    <div className="w-[90%] h-[90vh] bg-white/20 mx-auto my-8 rounded-lg p-4 backdrop-blur-sm flex">
      <MainSection/>
      <SideSection/>
    </div>
  );
}
