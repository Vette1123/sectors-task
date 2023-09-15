import { Link } from 'react-router-dom'

import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'

export const HomePage = () => {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-semibold leading-tight tracking-tighter md:text-4xl">
          Sadge Vite Starter Template
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          A Vite starter template with TypeScript, Tailwind CSS, and more.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          to={siteConfig.links.github}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Sadge
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          to={siteConfig.links.github}
          className={buttonVariants({ variant: 'outline' })}
        >
          GitHub
        </Link>
      </div>
    </section>
  )
}
