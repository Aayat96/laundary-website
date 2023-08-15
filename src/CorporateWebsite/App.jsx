import React from "react";
import './App.css';
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Testimonials from "./Testimonial";
import Pricing from "./Pricing";
import Office from "./Office";
import Contact from "./Contact";
import Footer from "./Footer";




function App() {
    return (
        <div className="App">
            <header id="header">
                <Header />
            </header>
            <main>
                <Hero />
                <About />
                <Testimonials />
                <Pricing />
                <Office />
                <Contact />
            </main>
            <footer id="footer" >
                <Footer />
            </footer>
        </div>
    );
}

export default App;