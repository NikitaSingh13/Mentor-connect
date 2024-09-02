import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-darkNavy text-black py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-xl font-semibold">Stay Connected</p>
            <p className="text-sm mt-2">
              Follow us on social media to stay updated with the latest mentorship programs and events.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <Link href="https://www.facebook.com" aria-label="Facebook">
                <FaFacebookF className="text-black hover:text-blue-400 transition-colors duration-300 w-6 h-6" />
              </Link>
              <Link href="https://www.instagram.com" aria-label="Instagram">
                <FaInstagram className="text-black hover:text-pink-400 transition-colors duration-300 w-6 h-6" />
              </Link>
              <Link href="https://www.linkedin.com" aria-label="LinkedIn">
                <FaLinkedinIn className="text-black hover:text-blue-600 transition-colors duration-300 w-6 h-6" />
              </Link>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-lg font-semibold">About Connect0</p>
            <p className="text-sm mt-2">
              MentorApp connects individuals with experienced mentors for personal and professional growth. Explore our platform to find the perfect mentor for your needs.
            </p>
            <p className="text-sm mt-4">&copy; 2024 MentorApp. All rights reserved.</p>
            <p className="text-sm mt-2">Contact us: +1-234-567-890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
