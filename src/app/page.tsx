import Image from "next/image";
export default function Home(){

return(
  <main>
  <header>
  
  <div className="w-full h-screen mx-auto">
  <Image
    src="/Homeimages/h8.jpg"
    alt="Welcome picture"
    width={3387}
    height={5080}
    className="w-full h-100 object-cover object-[50%_20%]"
  />
<div className="w-1/2 p-5 absolute bottom-30 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center bg-[#21c452] rounded-l-[20px] rounded-r-[20px] border-double border-4 ">
<h3 className=" text-[clamp(2.5rem,2vw,6rem)] max-w-full font-extrabold">Welcome</h3>
<p className="pb-4 font-bold italic">You&apos;re a book away from success</p>
</div>
</div>
</header>

<section>
  <div className="absolute bottom-5 w-full">
  <ul className="flex flex-row flex-nowrap flex-shrink justify-around gap-x-4 w-full">
    <li className=" bg-[#dddbdb] py-2 px-5 rounded-l-[1rem] border-4 border-double border-[#21c452]"><h2 className="text-[rgb(63,63,63)] font-bold text-sm">Recents</h2></li>
    <li className=" bg-[#dddbdb] py-2 px-5 rounded-r-[1rem] rounded-l-[1rem] border-4 border-double border-[#21c452]" ><h2 className="text-[rgb(63,63,63)] font-bold text-sm">Featured</h2></li>
    <li className=" bg-[#dddbdb] py-2 px-5 rounded-r-[1rem] rounded-l-[1rem] border-4 border-double border-[#21c452]"><h2 className="text-[rgb(63,63,63)] font-bold text-sm">Favourites</h2></li>
    <li className=" bg-[#dddbdb] py-2 px-5 rounded-r-[1rem] border-4 border-double border-[#21c452]"><h2 className="text-[rgb(63,63,63)] font-bold text-sm">Search Catalogue</h2></li>
  </ul>
  </div>
  <ul>
    <li>
      <figure>
        <Image
        src= "/HomeImages/Homepic1.avif"
        alt="Physics"
        width={200}
        height={200}
        />
      </figure>
      <p>Physics</p>
    </li>
    <li>
      <figure>
        <Image
        src= "/HomeImages/Hpic2.avif"
        alt="Hardware engineering"
        width={200}
        height={200}
        />
      </figure>
      <p>Hardware Engineering</p>
    </li>
    <li>
      <figure>
        <Image
        src= "/HomeImages/h4.jpg"
        alt="Software Engineering"
        width={200}
        height={200}
        />
      </figure>
      <p>Software Engineering</p>
    </li>
  </ul>
</section>

  </main>
);
}