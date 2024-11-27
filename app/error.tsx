"use client";

import Container from "@/components/Container";
import { RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Container>
      <div className="w-full h-screen flex flex-col gap-y-5 items-center pt-20 text-primary">
        <div className="flex flex-col items-center gap-y-2">
          <h1>🥲Something went wrong.</h1>
          <p className="text-secondary">{error.message}</p>
        </div>

        <button
          onClick={() => reset()}
          className="flex items-center gap-x-2 py-2 px-4 w-fit rounded-full border-2 border-primary"
        >
          <RotateCcw /> Try Again
        </button>
      </div>
    </Container>
  );
}
