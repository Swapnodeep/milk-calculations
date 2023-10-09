"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OperationsCard from "@/components/OperationsCard";

export default function Home() {
  const handleClick = () => {};
  return (
    <div>
      {/* Background gradient */}
      <div className="fixed top-0 left-0 w-full h-2/3 bg-gradient-to-br from-secondary/40 to-primary/40 -z-10 blur-[100px] -rotate-30"></div>
      <div
        style={{ backgroundImage: `url("/cardboard-texture.jpg")` }}
        className="fixed top-0 left-0 w-screen h-screen bg-cover bg-center bg-no-repeat bg-fixed -z-20 opacity-30"
      ></div>
      <Header />

      {/* Heading section */}
      <section className="max-w-full md:max-w-7xl md:mx-auto my-16 md:my-32">
        <h1 className="text-center font-sans px-24 md:px-52 font-semibold md:font-bold text-slate-700 text-4xl md:text-6xl">
          Streamlining the{" "}
          <span className="text-blue-700">calculation and management</span> of
          industry-level operations related to milk quality
        </h1>
      </section>

      {/* Opeations Section */}
      <main
        id="operations"
        className="max-w-full md:max-w-7xl md:mx-auto my-16 md:my-32"
      >
        <h2 className="text-center font-semibold md:font-bold text-3xl md:text-4xl text-state-700 mb-12">
          Operations
        </h2>

        {/* Individual operations */}
        <div className="flex flex-col items-center justify-center gap-y-8 md:gap-x-16 md:flex-row flex-wrap px-4">
          <OperationsCard
            title="Determination of Yield of Cream"
            imageUrl="/yield-cream.png"
            width={750}
            height={691}
            path="/cream"
          />
          <OperationsCard
            title="Determination of Yield of Moisture % by Oven Dry Method"
            imageUrl="/moisture-content.jpg"
            width={4000}
            height={2251}
            path="/moisture"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
