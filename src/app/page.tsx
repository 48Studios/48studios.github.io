import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col px-6">
        <div className="flex flex-col flex-grow w-full justify-center items-center">
            <div className="w-full max-w-[550px] mb-2">
              <Image src="logo-landscape.svg" alt="48 Studios" className="w-full" width={0} height={0} />
            </div>
            <h2 className="text-[1.2em] text-center font-[family-name:var(--font-geist-mono)]">
                Crafting Perfection, Delivering Brilliance
            </h2>
        </div>
        <div className="flex flex-col md:flex-row font-[family-name:var(--font-geist-mono)] gap-1 md:gap-6 py-6 justify-center">
            <a className="hover:text-red-600 transition-all text-right" href="mailto:jrsarath@outlook.com">
                reactus@48studios.in
            </a>
            <span className="w-[1px] bg-foreground" />
            <a className="hover:text-red-600 transition-all text-right" href="mailto:jrsarath@outlook.com">
                +91 8777 5050 46
            </a>
            <span className="w-[1px] bg-foreground" />
            <a className="hover:text-red-600 transition-all text-right" href="https://maps.app.goo.gl/HZEGqcLhAshzzH3a7">
                6A/72 Mukundapur, Kolkata - 99
            </a>
        </div>
    </div>
  );
}
