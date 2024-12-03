import Link from "next/link"
import { User } from 'lucide-react';

const Navbar = () => {
  return (
        <header className='w-full min-h-[50px] bg-white z-50 flex flex-col justify-center items-center px-5 py-4'>
            <nav className='w-full flex flex-row justify-between items-center'>
                <Link href="/" className="font-bold text-2xl hover:text-yellow-500/80 hover:bg-clip-border focus:border-black">
                    RootLoop
                </Link>
                <Link href="/profile" className="font-bold text-2xl hover:text-yellow-500/80 hover:bg-clip-border focus:border-black">
                    <div className="p-2 border border-black hover:border-black/50 rounded-full flex justify-center items-center ">
                        <User size={24} />
                    </div>
                </Link>
            </nav>
        </header>
  )
}

export default Navbar