import Banner from "@/components/Banner";
import Container from "@/components/Container";
import MovieCarousel from "@/components/MovieCarousel";
import Search from "@/components/Search";

export default function Home() {
  return (
    <main className="w-full bg-black relative flex flex-col gap-y-10">
      <Container>
        <Search />
        <Banner />
        <MovieCarousel />
      </Container>
    </main>
  );
}
