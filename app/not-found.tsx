import Container from "@/components/Container";
import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container>
      <div className="w-full h-screen flex flex-col gap-y-5 items-center pt-20 text-primary">
        <div className="flex flex-col items-center gap-y-2">
          <h1>404, Page Not Found.</h1>
        </div>

        <Link href={"/"}>
          <button className="flex items-center gap-x-2 py-2 px-4 w-fit rounded-full border-2 border-primary">
            <Home /> Go To Home
          </button>
        </Link>
      </div>
    </Container>
  );
}
