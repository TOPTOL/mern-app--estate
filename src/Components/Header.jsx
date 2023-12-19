import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';



export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl max-auto p-3'>
            <Link to='/'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className='text-slate-500'>TOPTOL</span>
                <span className='text-slate-700'><i>GARDENS</i></span>
            
            </h1>
            </ Link>

            <form className='bg-slate-100 p-3 rounded-lg  flex item-center'>
                <input type='text' 
                placeholder='search...'
                 className='bg-transparent focus:outline-none w-24 sm:w-64'
                 />
                <FaSearch className='text-slate-600' />
            </form>
            <ul className='flex gap-4 marginbottom-60'>
                <Link to='/'>
                    <li className='hidden sm:inline text-slate-700 hover:underline'> 
                    Home</li>
                </Link>

                <Link to='/about'>
                <li className='hidden sm:inline text-slate-700 hover:underline'> 
                About</li>
                </Link>

                <Link to='/sign in'>
                <li className='hidden sm:inline text-slate-700 hover:underline'> 
                Sign in</li>

                </Link>


            </ul>
        </div>
    </header>
  )
}
