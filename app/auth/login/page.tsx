import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="flex items-center justify-center w-1/3 bg-[#344E41]">
        <div className="text-[#DAD7CD] text-4xl font-bold">🚢</div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center w-2/3 p-8 bg-[#DAD7CD]">
        <h1 className="mb-4 text-3xl font-bold text-[#344E41]">Log in</h1>

        <div className="mb-4">
          <button 
            aria-label="Login as mentee" 
            className="mr-4 text-lg font-semibold text-[#588157] border-b-2 border-[#588157]"
          >
            I'm a mentee
          </button>
          <button 
            aria-label="Login as mentor" 
            className="text-lg font-semibold text-[#3A5A40]"
          >
            I'm a mentor
          </button>
        </div>

        <form className="space-y-4">
          <Input 
            type="email" 
            placeholder="Email or username" 
            className="border border-[#A3B18A] focus:ring-[#588157] focus:border-[#588157]"
          />
          <Input 
            type="password" 
            placeholder="Password" 
            className="border border-[#A3B18A] focus:ring-[#588157] focus:border-[#588157]"
          />
          <Button 
            variant="primary" 
            type="submit" 
            className="bg-[#588157] hover:bg-[#3A5A40] text-white"
          >
            Log in
          </Button>
        </form>

        <div className="my-4 text-center text-[#344E41]">Or</div>

        <Button 
          variant="secondary" 
          className="bg-[#A3B18A] hover:bg-[#588157] text-[#344E41]"
        >
          <span className="mr-2">🔵</span> Log in with Google
        </Button>

        <div className="mt-4 text-center">
          <Link href="/forgot-password" className="text-[#588157]">
            Forgot password?
          </Link>
        </div>

        <div className="mt-2 text-center text-[#344E41]">
          <span>Don’t have an account?</span>
          <Link href="/sign-up/mentee" className="ml-1 text-[#588157]">
            Sign up as a mentee
          </Link>
          or
          <Link href="/sign-up/mentor" className="ml-1 text-[#588157]">
            apply to be a mentor
          </Link>
        </div>
      </div>
    </div>
  );
}
