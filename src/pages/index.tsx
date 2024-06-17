import Link from "next/link";
import PagesMetaHead from "@/components/PagesMetaHead";

const Home = () => {
  return (
    <div className="container mx-auto text-jefferson-light text-lg">
      <PagesMetaHead title="Home" />
      <div className="mt-10 sm:mt-15 flex justify-center">
        Personal Template
      </div>
    </div>
  );
};

export default Home;
