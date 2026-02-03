import { Timestamp } from "firebase/firestore"

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