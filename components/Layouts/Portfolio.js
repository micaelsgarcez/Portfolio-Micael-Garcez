import { useState, useEffect } from 'react'
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
      href: '/contact',
      label: 'Contato'
    }
  ]

  const [barStep, setbarStep] = useState(1)

  useEffect(() => {
    menuLinks.forEach((item, index) => {
      if (router.asPath === item.href) {
        setbarStep(index + 1)
      }
    })
  }, [router])
  return (
    <div className='flex flex-row container max-w-screen-xl mx-auto px-4'>
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
                <a
                  className={`uppercase text-md mb-9 block ${
                    router.asPath === item.href
                      ? 'underline underline-offset-2'
                      : ''
                  }`}
                >
                  {item.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <div className='mt-20 ml-5'>
          <div className='bg-white rounded-lg w-1 shadow block m-2 mb-10'>
            <div className='w-full h-72 bg-[#C8C1C1] rounded-full mt-3 bg-opacity-40'>
              <div
                className='w-full transition-all duration-300 bg-[#A7A7A7] rounded-full'
                style={{ height: `${barStep * 33.33}%` }}
              ></div>
            </div>
          </div>
          <p>{barStep}-3</p>
        </div>
      </aside>
      <main className='flex-1 px-4'>{children}</main>
    </div>
  )
}
