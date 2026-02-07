import { useQuery } from "@tanstack/react-query"
import { getLikeAlbum, getLikeTrack, getLikedTracks, getLikedAlbums } from "./services"

type TrackProps = {
  userId?: string
  trackId: string
}

export const useGetLikeTrack = ({ userId, trackId }: TrackProps) => {
  return useQuery({
    queryKey: ["like-track", userId, trackId],
    queryFn: () => getLikeTrack(userId!, trackId),
    enabled: !!userId
  })
}

export const useGetLikedTracks = ({ userId }: { userId?: string }) => {
  return useQuery({
    queryKey: ["like-tracks", userId],
    queryFn: () => getLikedTracks(userId!),
    enabled: !!userId
  })
}

type AlbumProps = {
  userId?: string
  albumId: string
}

export const useGetLikeAlbum = ({ userId, albumId }: AlbumProps) => {
  return useQuery({
    queryKey: ["like-album", userId, albumId],
    queryFn: () => getLikeAlbum(userId!, albumId),
    enabled: !!userId
  })
}

export const useGetLikedAlbums = ({ userId }: { userId?: string }) => {
  return useQuery({
    queryKey: ["like-albums", userId],
    queryFn: () => getLikedAlbums(userId!),
    enabled: !!userId
  })
}

