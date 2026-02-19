import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Next.js Trivia Assignment!</h1>
      <p>Get ready to test your knowledge with some fun trivia questions.</p>
      <Image src="/images/pikachu.png" alt="Pikachu Image" width={400} height={400} />
    </div>
  );
}
