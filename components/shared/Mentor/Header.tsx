import Link from 'next/link';
import { Button } from '../../ui/button';

const Header = () => {
  return (
    <header className="p-4">
      <nav className="flex justify-between items-center">
      <div className="text-black text-2xl font-bold">Mentor</div>
        <Link href="/mentor/dashboard" className="hover:underline">Dashboard</Link>
        <Link href="/mentor/chat" className="hover:underline">Chat</Link>
        <Link href="/mentor/videoCall" className="hover:underline">Video Call</Link>
        <Link href="/mentor/booking" className="hover:underline">Booking</Link>
        <Link href="/mentor/profile" className="hover:underline">Profile</Link>

      </nav>
    </header>
  );
};

export default Header;
