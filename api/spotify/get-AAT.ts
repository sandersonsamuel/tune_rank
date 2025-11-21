import { SpotifySearchResult } from "@/types/spotify/aat"
import { getSpotifyToken } from "."

type Props = {
  query: string
}

export const getAAT = async ({ query }: Props) => {
  const token = await getSpotifyToken()

  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${query}&type=artist,album,track&limit=1`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  const data = await response.json() as SpotifySearchResult
  return data
}