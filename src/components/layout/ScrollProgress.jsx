import { useScrollProgress } from '../../hooks/useScrollProgress'

export default function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div className="fixed top-0 inset-x-0 z-[60] h-[2px]">
      <div
        className="h-full bg-gradient-to-r from-purple-500 via-accent to-blue-400 transition-all duration-150 ease-out shadow-lg shadow-accent/20"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
