import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/kitchen', label: 'Kitchen' },
  { href: '/bathroom', label: 'Bathroom' },
  { href: '/living-room', label: 'Living Room' },
  { href: '/bedroom', label: 'Bedroom' },
  { href: '/outdoor', label: 'Outdoor' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <nav className="w-full bg-white/95 backdrop-blur-lg border-b border-slate-200/50 py-4 px-4 flex justify-center sticky top-0 z-50 shadow-lg">
      <ul className="flex flex-wrap gap-6 md:gap-10">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-lg font-semibold text-slate-700 hover:text-blue-600 transition-all duration-300 px-4 py-2 rounded-lg hover:bg-blue-50 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-600 to-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
