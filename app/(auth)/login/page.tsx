import UserAuthForm from '@/components/user-auth-form'
import Link from 'next/link'

export default function Login() {
  return (
    <div className="container flex justify-center h-screen items-center">
      <div className="mx-auto w-full sm:w-[350px] flex flex-col justify-center">
        <div className="text-center space-y-2">
          <h1 className="text-2xl front-semibold tracking-tight">Welcome back</h1>
          <p className="text-sm text-muted-foreground">Sign in to your account with Email</p>
        </div>
        <UserAuthForm />
        <p className="text-muted-foreground px-8 text-center text-sm">
          <Link href={'/register'} className="underline hoger:text-brand">
            アカウント持っていませんか？
          </Link>
        </p>
      </div>
    </div>
  )
}
