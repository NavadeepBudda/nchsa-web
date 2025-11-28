
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import GetInvolved from './components/GetInvolved';
import Founder from './components/Founder';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-text antialiased selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <About />
        <GetInvolved />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
