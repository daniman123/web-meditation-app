import Link from "next/link";

const Settings = () => {
  return (
    <div className="flex justify-end items-start p-5">
      <Link href={"/settings"}>
        <button className="font-semibold text-white text-xl opacity-80 hover:opacity-100 transition-opacity">
          . . .
        </button>
      </Link>
    </div>
  );
};

export default Settings;
