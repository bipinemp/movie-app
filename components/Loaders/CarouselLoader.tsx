const CarouselLoader = () => {
  return (
    <div className="flex gap-3 overflow-hidden overflow-x-auto no-scrollbar space-x-1 mt-7 mb-20">
      {Array(9)
        .fill(null)
        .map((_, i) => (
          <div
            key={i}
            className="rounded-lg relative flex-shrink-0 w-[150px] h-[210px] bg-neutral-700 animate-pulse"
          />
        ))}
    </div>
  );
};

export default CarouselLoader;
