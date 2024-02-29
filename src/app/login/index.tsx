"use client"
import { jwtDecode } from 'jwt-decode'
import { Button, PasswordInput, TextInput } from "@/components/shared";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from "clsx";
import { z } from 'zod'
import { setCookie } from 'nookies'
import { useRecoilState } from 'recoil'
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { authState } from '@/state/auth';

const loginFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Digite seu email' })
    .email({ message: 'Digite um email valido' }),
  password: z.string().min(8, { message: 'Senha deve ter no minimo 8 letras' }),
})
type LoginFormData = z.infer<typeof loginFormSchema>

export default function Login() {
  const router = useRouter()
  const { login } = useAuth();
  const [_, setAuth] = useRecoilState(authState)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  })


  async function handleSingin(data: LoginFormData) {
    console.log('entrou no handle', data)
    const resp = await login({
      variables: {
        email: data.email,
        password: data.password,
      },
    })
    console.log('resp', resp)
    const accessToken = resp?.data?.login?.token

    // if (accountId) {
    //   setCookie(undefined, '@eicontador/accountid', accountId, {
    //     maxAge: 60 * 60 * 8,
    //   })
    // }
    if (accessToken) {
      setCookie(undefined, '@closetfy/token', accessToken, {
        maxAge: 60 * 60 * 8,
      })
      const user = jwtDecode<{
        id: string
        name: string
        closets: any[]
      }>(accessToken)
      setCookie(undefined, '@closetfy/user', JSON.stringify(user), {
        maxAge: 60 * 60 * 8,
      })
    }

    // setAuth({
    //   accessToken: accessToken,
    //   accessAccountId: accountId,
    //   isLoggedIn: true,
    // })

    return new Promise<void>(resolve => {
      setTimeout(async () => {
        router.push(`/home`)
        resolve()
      }, 1000)
    })
  }

  return (
    <form
      className='flex w-full flex-col'
      onSubmit={handleSubmit(handleSingin)}
    >
      <div className="flex flex-col h-full mx-4 justify-center items-center py-3 gap-4 mt-50 w-72">
        <div className="flex flex-col items-center text-center m-5 w-full">
          <span className="font-semibold text-gray-900 text-[30px]/[38px]">
            ClosetFy
          </span>
        </div>

        <label className="font-medium text-gray-700">Email</label>
        <input
          className={clsx(
            "rounded-[8px] border-[1px] border-gray-300 shadow-sm focus:outline-none",
            "w-full py-2 px-4 text-md"
          )}
          {...register('email')}
          placeholder="Digite seu e-mail aqui"
        />
        <span
          title={errors.email?.message}
          className={clsx(
            'mb-2 ml-1 truncate text-xs font-normal text-error-500',
            {
              hidden: !errors.email?.message,
            }
          )}
        >
          {errors.email?.message}
        </span>

        <label className="font-medium text-gray-700">Senha</label>
        <input
          type="password"
          className={clsx(
            "rounded-[8px] border-[1px] border-gray-300 shadow-sm focus:outline-none",
            "w-full py-2 px-4 text-md"
          )}
          placeholder="**********"
          {...register('password')}
        />
        <span
          title={errors.password?.message}
          className={clsx(
            'mb-2 ml-1 truncate text-xs font-normal text-error-500',
            {
              hidden: !errors.password?.message,
            }
          )}
        >
          {errors.password?.message}
        </span>

        <div className="flex w-full items-between text-xs">
          <div className="w-1/2">
            <input type="checkbox" /> Lembrar
          </div>
          <div className="w-1/2 text-right">
            <span>Esqueci minha senha</span>
          </div>
        </div>
        <Button
          type="submit"
          className="w-full"
          variant="primary"
          onClick={() => {
            console.log("Login");
          }}
        >
          Login
        </Button>
      </div>
    </form>
  );
}
