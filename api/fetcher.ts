type Props = {
  path: string
}

export const spotifyFetcher = async ({ path }: Props) => {
  const response = await fetch(process.env.NEXT_PUBLIC_SPOTIFY_BASE_URL + path)
  return await response.json()
}