import Link from 'next/link';
import { siteConfig } from '../config/site';

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            {siteConfig.title}
          </Link>
          <nav className="space-x-4">
            <Link href="/posts" className="text-gray-600 hover:text-gray-900">
              Posts
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
