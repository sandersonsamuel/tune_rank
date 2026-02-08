import { SpotifyTrackItem } from "@/types/spotify/track"
import { getSpotifyToken } from "."

export const getTrack = async (id: string | string[]): Promise<SpotifyTrackItem | {tracks: SpotifyTrackItem[]}> => {

  if (Array.isArray(id) && id.length === 0) {
    return {tracks: []}
  }

  const token = await getSpotifyToken()

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SPOTIFY_BASE_URL}tracks${Array.isArray(id) && id.length > 1 ? "?ids=" + id.join(",") + "&" : "/" + id + "?"}locale=pt-BR`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  const data = await response.json()

  return data
}
