import Image from "next/image";

const res = await fetch("http://localhost:3000/books")
const books = await res.json()

export default function Home() {
  return (
    <div></div>
  );
}
