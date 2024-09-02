import Link from 'next/link';
import { Button } from '../../ui/button';

const Header = () => {
  return (
    <header className="p-4 bg-[#DAD7CD]">
      <nav className="flex justify-between items-center">
        <div className="text-[#344E41] text-2xl font-bold">Connecto</div>
        <div className="flex gap-4 items-center">
          <Link href="#features" className="text-[#344E41] hover:text-[#A3B18A]">
            Features
          </Link>
          <Link href="#testimonials" className="text-[#344E41] hover:text-[#A3B18A]">
            Testimonials
          </Link>
          <Link href="/auth/login">
            <Button className="bg-[#344E41] text-[#DAD7CD] hover:bg-[#3A5A40]">
              Login
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
