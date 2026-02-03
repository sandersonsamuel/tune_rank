import { Timestamp } from "firebase/firestore"

export type Like = {
  userId: string
  releaseId: string
  type: "track" | "album"
  createdAt: Timestamp
}