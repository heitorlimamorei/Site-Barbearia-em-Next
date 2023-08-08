import Link from "next/link";

export default function Footer({ classNames }: { classNames?: string }) {
  const pages = [
    {
      name: 'Home',
      path: './'
    },
    {
      name: 'Serviços',
      path: 'services'
    }
  ]
  return (
    <footer className={`flex w-full justify-between bg-gray-600 py-5 px-4 ${classNames}`}>
      <div className="flex justify-center items-center">
        <img src="https://th.bing.com/th/id/OIG.mARqpGWgUXM1FqESmA.A?pid=ImgGn" alt="" className="w-[80px] h-[80px] rounded-full shadow-2xl" />
      </div>
      <div className="flex justify-center items-center">
        <ul className="flex">
          {pages.map((service) => {
            return (
              <>
                <Link href={service.path}>
                  <li className="text-gray-100 mx-2" key={service.path}>
                    {service.name}
                  </li>
                </Link>
              </>
            )
          })}
        </ul>
      </div>
    </footer>
  );
}
