// src/components/Header.tsx
import { NavLink } from 'react-router-dom';

/**
 * Simple translucent nav bar.
 */
export default function Header() {
    const base =
        'px-4 py-2 transition-colors rounded-lg hover:bg-white/20';
    const active = 'bg-white/30 text-teal-900 font-semibold';

    return (
        <header className="glass sticky top-4 mx-auto flex max-w-4xl items-center justify-between px-6 py-3 backdrop-saturate-150">
            <span className="text-xl font-bold tracking-wide">My Site</span>
            <nav className="flex gap-3">
                <NavLink to="/" end className={({ isActive }) => `${base} ${isActive ? active : ''}`}>Home</NavLink>
                <NavLink to="/about"    className={({ isActive }) => `${base} ${isActive ? active : ''}`}>About</NavLink>
                <NavLink to="/blog"     className={({ isActive }) => `${base} ${isActive ? active : ''}`}>Blog</NavLink>
                <NavLink to="/contact"  className={({ isActive }) => `${base} ${isActive ? active : ''}`}>Contact</NavLink>
            </nav>
        </header>
    );
}
