import { useAuth0 } from '@auth0/auth0-react'
import { FaGithub } from 'react-icons/fa'

export const Login = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <div className="bg-login bg-no-repeat bg-cover w-screen h-screen flex justify-center lg:justify-start lg:pl-[calc((12/100)*1440px)] items-center">
      <div className="min-w-[246px] min-h-[352px] max-w-[540px] max-h-[594px] rounded-lg bg-glass px-3 pt-6 flex flex-col gap-16 lg:gap-[76px] lg:px-12 lg:pb-[102px] text-primary-100">
        <header>
          <h1 className="font-black text-4xl lg:text-6xl xl:text-7xl">
            RECIPE<span className="text-primary-900">FEED</span>
          </h1>
        </header>

        <section className="font-medium lg:text-2xl">
          <span className="block">Compartilhe suas receitas.</span>
          <span>
            Faça login com seu
            <strong className="text-secondary-700"> GITHUB</strong>.
          </span>
        </section>

        <button
          onClick={() => loginWithRedirect()}
          className="flex items-center gap-[6px] border-2 border-primary-100 rounded-md  font-bold px-14 py-1 min-w-[222px]  justify-center lg:text-2xl transition delay-150 hover:bg-glass-hover hover:text-primay-text-hover"
        >
          <FaGithub className="w-9 h-9 lg:w-14 lg:h-14" />
          Entrar
        </button>
      </div>
    </div>
  )
}
