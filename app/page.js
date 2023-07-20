import { Card } from "@/components/Card.jsx";
import photo1 from "@/public/img/photo1.png"
import photo2 from "@/public/img/photo2.png"
import photo3 from "@/public/img/photo3.png"
import photo4 from "@/public/img/photo4.png"
import photo5 from "@/public/img/photo5.png"
import photo6 from "@/public/img/photo6.png"


export default function Home() {

  console.log(photo1)

  const teamData = [
    { fullName: "Bill Mahoney", jobTitle: "product owner", photo: photo1 },
    { fullName: "Saba Cabrera", jobTitle: "art director", photo: photo2 },
    { fullName: "Shae Le", jobTitle: "tech lead", photo: photo3 },
    { fullName: "Skylah Lu", jobTitle: "ux designer", photo: photo4 },
    { fullName: "Griff Richards", jobTitle: "developer", photo: photo5 },
    { fullName: "Stan John", jobTitle: "developer", photo: photo6 },
  ]

  return (
    <main className="flex flex-col items-center">

      <header className="w-screen flex flex-col px-3 sm:px-12 lg:px-3 pt-[70px] gap-9 md:flex-row">
           <section className="md:w-1/2 md:flex md:justify-center">
            <h1 className="font-ptserif font-bold text-3xl">The creative crew</h1>
           </section>

           <section className="flex flex-col gap-[10px] md:w-1/2">
            <p className="font-semibold text-lg uppercase">who we are</p>
            <p className="w-[333px] font-normal text-sm lg:text-lg">We are team of creatively diverse. driven. Innovative individuals working in various locations from the world</p>
           </section>
      </header>

      <article className="grid grid-cols-2 px-5 pt-9 lg:pt-24 gap-7 lg:gap-10 lg:grid-cols-3 [&>section:nth-child(even)]:translate-y-12 lg:[&>section:nth-child(even)]:translate-y-0 lg:[&>section:nth-child(3n-1)]:!translate-y-24">
        {teamData.map(({fullName, jobTitle, photo}) => (
          <Card key={fullName} fullName={fullName} jobTitle={jobTitle} photo={photo.src}/>
        ))}
      </article>

      <footer className="font-montserrat text-sm font-medium pt-48 pb-6 text-[#BDBDBD] text-center">
        <p>created by <span className="font-bold underline"> Erika</span> - devChallenges.io</p>
      </footer>
    </main>
  )
}
