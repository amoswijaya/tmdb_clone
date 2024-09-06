import Banner from "@/components/banner";
import FreeToWatch from "@/components/freeToWatch";
import PopularList from "@/components/popularList";
import TrendingList from "@/components/trendingList";

export default function Home() {
  return (
    <main className='  py-4  md: lg:px-48'>
      <Banner />
      <TrendingList />
      <PopularList />
      <FreeToWatch />
    </main>
  );
}
