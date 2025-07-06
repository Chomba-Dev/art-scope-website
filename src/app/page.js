import HeroSection from "@/components/HeroSection";

function Home() {
  return (
    <>
      <HeroSection />
      
      {/* Temporary section while we test */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-navy mb-4">Coming Soon</h2>
          <p className="text-xl text-dark-gray">
            More sections will be added here...
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
