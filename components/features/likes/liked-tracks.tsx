import { useGetLikedTracks } from "@/http/features/likes/hooks"
import { motion } from "motion/react"
import Link from "next/link"

type LikedTracksProps = {
  userId: string
}

export const LikedTracks = ({ userId }: LikedTracksProps) => {
  const { data: likedTracks } = useGetLikedTracks({ userId })

  return (
    <Link href="/my/likes?tab=tracks">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex flex-col gap-3 items-center justify-center size-[150px] bg-card rounded-lg border-primary/20 border-2">
        <img src="/track-icon.svg" alt="Track icon" className="size-[70px]" />
        <span className="text-sm font-bold">{likedTracks?.length} Faixas</span>
      </motion.div>
    </Link>
  )
}