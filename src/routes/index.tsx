import { HomePage } from '@/pages/home'
import { NotFound } from '@/pages/not-found'
import { Routes as BrowserRoutes, Route } from 'react-router-dom'

import { SiteHeader } from '@/components/site-header'

export const Routes = () => {
  return (
    <main className="font-rubik">
      <SiteHeader />
      <BrowserRoutes>
        <Route index element={<HomePage />} />

        {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
            routes for. */}
        <Route path="*" element={<NotFound />} />
      </BrowserRoutes>
    </main>
  )
}
