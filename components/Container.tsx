interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="bg-black max-w-[1920px] w-full mx-auto px-4 2xl:px-52">
      {children}
    </div>
  );
}
