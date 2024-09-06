import { Link } from 'next-view-transitions'

export default function Home() {
  return (
    <div>
      <Link href="/presentation" className="text-2xl font-bold">
        Testes de interface
      </Link>
    </div>
  );
}
