import Home from './_components/home-page';
import Navbar from './_components/nav';

export default async function HomePage() {
  return (
    <div>
      <div className="h-30">
        <Navbar />
      </div>
      <Home />
    </div>
  );
}
