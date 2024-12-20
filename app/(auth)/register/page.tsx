import { buttonVariants } from '@/components/ui/button'
import UserAuthForm from '@/components/user-auth-form'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function Register() {
  return (
    <div className="container grid flex-col lg:grid-cols-2 h-screen w-screen items-center justify-center 1g:max-w-none 1g:px-0">
      <Link
        href={'/login'}
        className={cn(buttonVariants({ variant: 'ghost' }), 'absolute left-4 md:left-8 md:top-8')}
      >
        login
      </Link>
      <div className="h-full bg-muted lg:block hidden">
        <div className="mx-auto w-full sm:w-[350px] flex flex-col justify-center space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl front-semibold tracking-tight">Welcome back</h1>
            <p className="text-sm text-muted-foreground">Sign in to your account with Email</p>
          </div>
          <UserAuthForm />
          <p className="text-muted-foreground px-8 text-center text-sm">
            続けてクリックすれば私たちの利用規約とプライバシーポリシーに同意することになります。
          </p>
        </div>
      </div>
    </div>
  )
}
