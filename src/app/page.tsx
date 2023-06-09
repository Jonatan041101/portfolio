import About from '@/components/About/About';
import BottomBurger from '@/components/BottomBurger/BottomBurger';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Projects from '@/components/Projects/Projects';
import Techs from '@/components/Techs/Techs';

export default function Home() {
  return (
    <main>
      <Header />
      <BottomBurger />
      <div className="main" style={{ overflow: 'hidden' }}>
        <About />
        <Techs />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
