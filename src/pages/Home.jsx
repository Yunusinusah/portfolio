import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Skills from '../components/Skills';
import Project from '../components/Project';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import PortfolioAssistant from '../components/PortfolioAssistant';
import { useTheme } from '../hooks/useTheme';

const Home = () => {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-slate-900' : 'bg-white'
    }`}>
      <Navbar />
      <main>
        <HeroSection />
        <About />
        <Skills />
        <Project />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <PortfolioAssistant />
    </div>
  );
};

export default Home;
