import { SpotifySearchResult } from "@/types/spotify/aat"
import { getSpotifyToken } from "."

type Props = {
  query: string
}

export const getAAT = async ({ query }: Props) => {
  const token = await getSpotifyToken()

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SPOTIFY_BASE_URL}
    search?q=${query}&type=artist,album,track&limit=5&locale=pt-BR`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  const data = await response.json() as SpotifySearchResult
  return data
}