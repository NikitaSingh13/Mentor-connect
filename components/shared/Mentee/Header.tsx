import Link from 'next/link';
import { Button } from '../../ui/button';

const Header = () => {
  return (
    <header className="p-4">
      <nav className="flex justify-between items-center">
      <div className="text-black text-2xl font-bold">Mentee</div>
        <Link href="/mentee/dashboard" className="hover:underline">Dashboard</Link>
        <Link href="/mentee/chat" className="hover:underline">Chat</Link>
        <Link href="/mentee/videoCall" className="hover:underline">Video Call</Link>
        <Link href="/mentee/feedback" className="hover:underline">Feedback</Link>
        <Link href="/mentee/booking" className="hover:underline">Booking</Link>
        <Link href="/mentee/profile" className="hover:underline">Profile</Link>

      </nav>
    </header>
  );
};

export default Header;
