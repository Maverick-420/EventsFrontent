const Marquee = () => {
  return (
    <div className="overflow-hidden bg-lime-200 inherit py-4">
      <div className="whitespace-nowrap animate-marquee text-black text-xl md:text-2xl">
        <span className="mx-10">For the love of Play</span>
        <span className="mx-10">For the love of Play</span>
        <span className="mx-10">For the love of Play</span>
        <span className="mx-10">For the love of Play</span>
      </div>
    </div>
  );
};

export default Marquee;
