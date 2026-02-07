import { Skeleton } from "@/components/ui/skeleton"

function ReleaseItemSkeleton() {
    return (
        <div className="flex items-center gap-3 p-2">
            <Skeleton className="h-16 w-16 rounded-md" />
            <div className="flex flex-col gap-2 flex-1">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
            </div>
            <Skeleton className="h-6 w-12" />
        </div>
    )
}

function LikedSectionSkeleton() {
    return (
        <div className="flex flex-col items-center gap-2">
            <Skeleton className="h-20 w-20" />
            <Skeleton className="h-4 w-16" />
        </div>
    )
}

export function ReviewsSkeleton() {
    return (
        <div className="flex flex-col gap-4 px-3">
            <Skeleton className="h-7 w-24" />

            <div className="flex justify-around">
                <LikedSectionSkeleton />
                <LikedSectionSkeleton />
            </div>

            <Skeleton className="h-7 w-40" />

            <Skeleton className="h-5 w-16" />
            {[...Array(3)].map((_, i) => (
                <ReleaseItemSkeleton key={`album-${i}`} />
            ))}

            <Skeleton className="h-5 w-16" />
            {[...Array(3)].map((_, i) => (
                <ReleaseItemSkeleton key={`track-${i}`} />
            ))}
        </div>
    )
}
