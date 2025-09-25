export function Nav() {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#blog', label: 'Blog' },
    { href: '#experience', label: 'Experience' },
    { href: '#links', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/0 border-b border-white/10">
      <nav className="container flex items-center justify-between h-14">
        <a href="#home" className="font-display font-semibold tracking-wide text-slate-100">MW</a>
        <ul className="hidden sm:flex items-center gap-5 text-sm text-slate-300">
          {links.map((l) => (
            <li key={l.href}>
              <a className="hover:text-white transition" href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="/Mariam_Wambui_CV.pdf" download className="text-xs px-3 py-1.5 rounded-md bg-primary text-white hover:bg-primary-dark transition">
          Download CV
        </a>
      </nav>
    </header>
  );
}

