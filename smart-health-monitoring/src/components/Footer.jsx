import Image from 'next/image';
import Link from 'next/link';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/images/logo.png" alt="Logo" width={32} height={32} />
          <span className="ml-2 text-lg font-semibold">Smart Health Monitoring System</span>
        </div>
        <div className="flex space-x-4">
          <Link href="/">
            <a className="text-gray-400 hover:text-white">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-400 hover:text-white">About</a>
          </Link>
          <Link href="/contact">
            <a className="text-gray-400 hover:text-white">Contact</a>
          </Link>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/facebook-icon.png" alt="Facebook" width={24} height={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/twitter-icon.png" alt="Twitter" width={24} height={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/linkedin-icon.png" alt="LinkedIn" width={24} height={24} />
          </a>
        </div>
        <p className="text-gray-400">&copy; 2025 Smart Health Monitoring System. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;