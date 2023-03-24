import { MdMenu } from 'react-icons/md';

export default () => (
<header className="p-8 bg-black flex justify-between items-center">
<p className="uppercase text-white text-2xl font-bold">Web Dev<span className="opacity-50 text-red-600">.</span>il</p>
<button className="bg-white p-2"><MdMenu /></button>
</header>
)