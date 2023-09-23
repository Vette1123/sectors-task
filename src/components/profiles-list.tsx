import React from 'react'
import { ProfileInfoContext } from '@/context/infos-context'

import { ProfileCard } from './profile-card'

export const ProfilesList = () => {
  const { infos } = React.useContext(ProfileInfoContext)
  return (
    <section>
      {infos.length
        ? infos?.map((info, index) => {
            return <ProfileCard key={index} info={info} />
          })
        : null}
      {!infos.length ? (
        <div className="text-center text-muted-foreground">
          No profiles yet, try adding one!
        </div>
      ) : null}
    </section>
  )
}
