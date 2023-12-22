import Link from "next/link";

const StartButton = () => {
  return (
    <div className="flex justify-center items-start">
      <Link href={"/meditation"}>
        <button className="rounded-3xl p-3 bg-emerald-700 text-white font-medium opacity-95 hover:opacity-100 transition-opacity">
          Start Meditating
        </button>
      </Link>
    </div>
  );
};

export default StartButton;
