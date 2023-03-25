// eslint-disable-next-line import/extensions
import { MdMenu } from 'react-icons/md/index.js';

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-black p-8">
      <a href="/web-devil/" className="text-2xl font-bold uppercase text-white">
        Web Dev
        <span className="text-red-600 opacity-50">.</span>
        il
      </a>
      <button type="button" aria-details="menu" className="bg-white p-2">
        <MdMenu />
      </button>
    </header>
  );
}
