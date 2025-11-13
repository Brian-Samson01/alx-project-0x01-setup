import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 shadow">
      <h1 className="text-2xl font-bold">ALX Project</h1>
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/users">Users</Link>
      </nav>
    </header>
  );
};

export default Header;
