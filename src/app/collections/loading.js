import Loader from "@/components/Loader";

export default function loading() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Loader />
    </div>
  );
}
