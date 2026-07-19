import { defineEnableDraftMode } from 'next-sanity/draft-mode'
import { client } from '@/sanity/lib/client'
import { token } from '@/sanity/env'

if (!token) {
  throw new Error(
    'SANITY_API_READ_TOKEN is not set. Add it to .env.local and restart the dev server. Generate one at sanity.io/manage → project 8otz28ab → API → Tokens (role: Viewer or Editor).',
  )
}

export const { GET } = defineEnableDraftMode({
  client: client.withConfig({ token }),
})
