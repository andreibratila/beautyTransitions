import { TextMoving } from "@/components/textMovable/TextMoving";
import { Star } from "@/svg/Star";

export default function Home() {
  return (
    <main className="text-center">
      <h1 className="text-5xl font-black">Home</h1>
      <TextMoving lenghtText={8}>
        <p>UnitDreams</p>
        <Star />
        <p>Behind the scenes</p>
        <Star />
        <p>Steel Conciertos</p>
      </TextMoving>
    </main>
  );
}
