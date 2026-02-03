import { db } from "@/firebase/config"
import { LikeAlbum } from "@/types/album"
import { Like } from "@/types/track"
import { deleteDoc, doc, getDoc, setDoc, Timestamp } from "firebase/firestore"

// Track Services
type TrackProps = {
  trackId: string
  userId: string
}

export const likeTrack = async ({ trackId, userId }: TrackProps) => {
  try {
    const payload: Like = {
      userId,
      releaseId: trackId,
      type: "track",
      createdAt: Timestamp.now()
    }
    await setDoc(doc(db, "likes", trackId + "_" + userId), payload)
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const unlikeTrack = async ({ trackId, userId }: TrackProps) => {
  try {
    await deleteDoc(doc(db, "likes", trackId + "_" + userId))
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getLikeTrack = async (userId: string, trackId: string) => {
  const response = await getDoc(doc(db, "likes", trackId + "_" + userId))
  return !!response.data()
}

// Album Services
type AlbumProps = {
  albumId: string
  userId: string
}

export const likeAlbum = async ({ albumId, userId }: AlbumProps) => {
  try {
    const payload: Like = {
      userId,
      releaseId: albumId,
      type: "album",
      createdAt: Timestamp.now()
    }
    await setDoc(doc(db, "likes", albumId + "_" + userId), payload)
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const unlikeAlbum = async ({ albumId, userId }: AlbumProps) => {
  try {
    await deleteDoc(doc(db, "likes", albumId + "_" + userId))
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getLikeAlbum = async (userId: string, albumId: string) => {
  const response = await getDoc(doc(db, "likes", albumId + "_" + userId))
  return !!response.data()
}
