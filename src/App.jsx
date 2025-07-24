import { Toaster } from 'react-hot-toast';
import { CheckCircle, XCircle } from "lucide-react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Notifications toast */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#f5f3ff",
              color: "#4c1d95",
              border: "1px solid #c4b5fd",
              padding: "12px 16px",
              fontWeight: "500",
              fontSize: "14px",
            },
            success: {
              icon: <CheckCircle className="text-[#166534] w-5 h-5" />,
              style: {
                background: "#bbf7d0",
                color: "#166534",
                borderColor: "#4ade80",
              },
            },
            error: {
              icon: <XCircle className="text-[#7f1d1d] w-5 h-5" />,
              style: {
                background: "#fee2e2",
                color: "#7f1d1d",
                borderColor: "#fca5a5",
              },
            },
          }}
        />

        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
        </div>
    </Router>
  );
}

export default App;