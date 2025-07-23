// src/App.tsx
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

/**
 * Root layout: Header + routed pages.
 */
export default function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-teal-400/60 p-4">
            <Header />
            <main className="mt-8 flex justify-center">
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="contact" element={<Contact />} />
                    {/* Future 404: <Route path="*" element={<NotFound />} /> */}
                </Routes>
            </main>
        </div>
    );
}
