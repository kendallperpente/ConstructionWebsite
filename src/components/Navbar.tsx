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
    <nav className="w-full bg-white/80 backdrop-blur-md border-b-2 border-[#1e3a8a] py-3 px-2 flex justify-center sticky top-0 z-50 shadow-sm">
      <ul className="flex flex-wrap gap-4 md:gap-8">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-lg font-semibold text-[#1e293b] hover:text-[#1e3a8a] transition-colors px-3 py-1 rounded-md hover:bg-[#e5e7eb]"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
