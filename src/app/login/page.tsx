"use client"
import { Button, PasswordInput, TextInput } from "@/components/shared";

export default function Login() {
  return (
    <main className="flex flex-col h-full mx-4 justify-center items-center py-3 gap-4 mt-50">
      <section className="flex flex-col items-center text-center m-5 w-full">
        <div className="w-72">
          <p className="font-semibold text-gray-900 text-[30px]/[38px]">
            ClosetFy
          </p>
        </div>
      </section>
      <section className="w-full">
        <TextInput
          placeholder="Digite seu e-mail aqui"
          label="Email"
        />
      </section>
      <section className="w-full">
        <PasswordInput
          placeholder="**********"
          label="Senha"
        />
      </section>
      <section className="flex w-full items-between text-xs">
        <span className="w-1/2">
          <input type="checkbox" /> Lembrar
        </span>
        <span className="w-1/2 text-right">
          <p>Esqueci minha senha</p>
        </span>
      </section>
      <Button className="w-full" variant="primary">
        Login
      </Button>
    </main>
  );
}
