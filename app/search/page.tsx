import { getAAT } from "@/api/spotify/get-AAT"

export default async function Search(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const searchParams = await props.searchParams
  const query = searchParams.query as string
  const { albums, artists, tracks } = await getAAT({ query })
  
  return (
    <div>
    </div>
  )
}
