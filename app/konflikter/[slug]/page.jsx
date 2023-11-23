import Header from "@/components/Header";
import "./globals.css";
import ArticleCard from "@/components/ArticleCard";
import myImage from "@/public/image.png";

export default function Conflict() {
  return (
    <>
      <Header
        title="Boikott"
        subtitle="Hva er boikott?"
        description="Lorem ipsum hdajhdas sdahasd klhaslk asdhklasdhklas dhklasdksdahklsad klhklsdahsdklakdh  hdsja adasdjkasd  sagjhjkasd asdgasdjks dasdjgasdjk sdajksad gjkd hsdjakhdjska jsdhkjsad jkasdhasdh kjasd jkasd"
      />
      <main>
        <ArticleCard
          image={myImage}
          heading="Disney"
          paragraph="Disney har donnert 20.000.000 kroner til Israel"
          buttonText="Les mer her"
          tags={["#Palestina", "#Krigskriminalitet"]}
        />
      </main>
    </>
  );
}
