import { useRouter } from "next/router";

export default function Page404() {
  const router = useRouter();
  return (
    <>
      <div className="w-full h-screen bg-header flex justify-center items-center">
        <div className="fade-in-down w-1/2 h-2/3 z-40 relative text-white rounded-md border-2 border-white-/10 border-white/10 overflow-hidden flex flex-col shadow-xl backdrop-blur-lg bg-gray-100/10 justify-center items-center">
          <h1 className="text-[11rem] font-bold">Oops!</h1>
          <h3 className="text-2xl font-bold ">Page not found!</h3>
          <button
            className="border border-[#152238] font-bold text-[#152238] px-4 py-3 rounded-md mt-7 hover:shadow-md transition-all ease-in hover:bg-[#152238] hover:text-white"
            onClick={() => router.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    </>
  );
}
