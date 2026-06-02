import { memo } from 'react'
import { cn } from '../utils/cn'

/**
 * Skeleton loader component for improved perceived performance
 * Shows content placeholder while loading
 */
const SkeletonItem = memo(({ className, ...props }) => (
  <div
    className={cn(
      'animate-pulse rounded bg-gradient-to-r from-zinc-200 via-zinc-100 to-zinc-200 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800',
      className
    )}
    {...props}
  />
))

SkeletonItem.displayName = 'SkeletonItem'

export const CardSkeleton = memo(() => (
  <div className="space-y-4 p-4">
    <SkeletonItem className="h-4 w-3/4" />
    <SkeletonItem className="h-4 w-1/2" />
    <SkeletonItem className="h-20 w-full" />
  </div>
))

CardSkeleton.displayName = 'CardSkeleton'

export const ProjectSkeleton = memo(() => (
  <div className="space-y-3 p-4">
    <SkeletonItem className="h-48 w-full rounded" />
    <SkeletonItem className="h-5 w-2/3" />
    <SkeletonItem className="h-4 w-full" />
    <SkeletonItem className="h-4 w-4/5" />
    <div className="flex gap-2 pt-2">
      <SkeletonItem className="h-6 w-20 rounded-full" />
      <SkeletonItem className="h-6 w-20 rounded-full" />
    </div>
  </div>
))

ProjectSkeleton.displayName = 'ProjectSkeleton'

export const HeaderSkeleton = memo(() => (
  <div className="space-y-4">
    <SkeletonItem className="h-8 w-2/3" />
    <SkeletonItem className="h-4 w-4/5" />
  </div>
))

HeaderSkeleton.displayName = 'HeaderSkeleton'

export default SkeletonItem
