
export default function Home() {
  return (
    // bg-white does not affect the main page
    <main className="flex flex-col bg-white h-screen">
      <div className="w-screen flex h-[60vh] flex-col items-center justify-center lg:flex-row">
        <div className="container flex-1 flex flex-col justify-center items-start gap-8 lg:ml-48 ">
          <h1 className="text-start lg:text-7xl lg:max-h-[148px] lg:max-w-[500px]">Create your online videos</h1>
          <p className="text-lg text-center lg:text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate.</p>
          <button data-theme="corporate" className="btn btn-primary w-36 h-12 rounded-full">Test</button>
        </div>
        <div className="bg-pink flex flex-1 justify-center items-center">
          <img src="/old_windows.jpg" alt="test" className="w-[250px] h-[250px]" />
        </div>
      </div>
      <div className="flex flex-1 flex-wrap flex-row justify-center items-center w-screen">
        <div className="flex flex-col m-24 bg-red-500 lg:w-[250px] lg:h-[250px]">
          <h1 className="flex-1 ml-2 text-white lg:text-[77px] lg:h-[90px]">01</h1>
          <h2 className=" ml-3 text-black text-[50px] h-[80px] ">Title</h2>
          <p className="flex-1 ml-5 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit  </p>
        </div>
        <div className="flex flex-col m-24 bg-red-500 lg:w-[250px] lg:h-[250px]">
          <h1 className="flex-1 ml-2 text-white text:md lg:text-[77px] lg:h-[90px]">01</h1>
          <h2 className=" ml-3 text-black text-[50px] h-[80px] ">Title</h2>
          <p className="flex-1 ml-5 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit  </p>
        </div>
          <div className="flex m-24 flex-col bg-red-500 lg:w-[250px] lg:h-[250px]">
          <h1 className="flex-1 ml-2 text-white lg:text-[77px] lg:h-[90px]">01</h1>
          <h2 className=" ml-3 text-black text-[50px] h-[80px] ">Title</h2>
          <p className="flex-1 ml-5 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit  </p>
        </div>
        <div className="flex flex-col m-24 bg-red-500 lg:w-[250px] lg:h-[250px]">
          <h1 className="flex-1 ml-2 text-white text-[77px] h-[90px]">01</h1>
          <h2 className=" ml-3 text-black text-[50px] h-[80px] ">Title</h2>
          <p className="flex-1 ml-5 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit  </p>
        </div>
      </div>
    </main>
  );
}
