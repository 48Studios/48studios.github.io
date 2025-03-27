import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-[80%] max-w-[550px] mb-2">
        <Image src="logo-landscape.svg" alt="48 Studios" className="w-full" width={0} height={0} />
      </div>
      <h2 className="text-[1.2em] font-[family-name:var(--font-geist-mono)]">Crafting Perfection, Delivering Brilliance</h2>
    </div>
  );
}
