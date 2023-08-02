export default function Header({ classNames }: { classNames?: string }) {
  return (
    <header
      className={`flex items-center justify-center font-mono text-gray-100 py-5 bg-gray-600 w-full ${classNames}`}
    >
      <h1>Barbearia Imperador</h1>
    </header>
  );
}
