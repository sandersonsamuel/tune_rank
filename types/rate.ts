import { Timestamp } from "firebase/firestore"
import { SpotifyAlbum } from "./spotify/album"
import { SpotifyTrackItem } from "./spotify/track"

export type RateRelease = {
  userId: string,
  releaseId: string,
  rating: number,
  type: "album" | "track",
  review?: string,
  createdAt: Timestamp,
  updatedAt: Timestamp
}

export type DataChartRateReview = {
  rating: number,
  count: number
}

export type RatesReview = {
  data: DataChartRateReview[],
  average: number,
  total: number
}

export interface RateReleaseWithReleaseAlbum extends RateRelease {
  release: SpotifyAlbum | null | undefined
}

export interface RateReleaseWithReleaseTrack extends RateRelease {
  release: SpotifyTrackItem | null | undefined
}

export type RateReleaseResponse = {
  albums: RateReleaseWithReleaseAlbum[],
  tracks: RateReleaseWithReleaseTrack[]
}