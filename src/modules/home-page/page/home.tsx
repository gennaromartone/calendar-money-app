import Login from "@/modules/auth/login";

export default function Home() {
  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <Login/>
      </div>
    </div>
  );
}