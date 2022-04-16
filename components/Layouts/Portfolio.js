import { useRouter } from 'next/router'
import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'

export default function PortfolioLayout({ children }) {
  const router = useRouter()

  const menuLinks = [
    {
      href: '/',
      label: 'Sobre mim'
    },
    {
      href: '/portfolio',
      label: 'Portfólio'
    },
    {
      href: '/contato',
      label: 'Contato'
    }
  ]
  return (
    <div className='flex flex-row container max-w-screen-xl mx-auto'>
      <aside className='flex-none w-48 pt-9'>
        <FiMenu
          size={24}
          color='#000'
          opacity={0.67}
          className='cursor-pointer mb-28'
        />

        <ul>
          {menuLinks.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                <a className='uppercase text-md underline underline-offset-2 mb-9 block'>
                  {item.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <div>
          <div className='bg-white rounded-lg w-2 shadow block m-auto'>
            <div className='w-full h-72 bg-[#C8C1C1] rounded-full mt-3'>
              <div className='h-1/3 w-full bg-[#A7A7A7] rounded-full'></div>
            </div>
          </div>
          <p>1-3</p>
        </div>
      </aside>
      <main className='flex-1'>{children}</main>
      <aside className='flex-none w-24 flex items-center justify-center'>
        <ul>
          <li>
            <a href='#'>Linkedin</a>
          </li>
          <li>
            <a href='#'>Github</a>
          </li>
          <li>
            <a href='#'>Instagram</a>
          </li>
          <li>
            <a href='#'>Youtube</a>
          </li>
        </ul>
      </aside>
    </div>
  )
}
