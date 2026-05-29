import { useState } from 'react'
import { Download, Loader2 } from 'lucide-react'
import { generateResumePDF } from '../../utils/resumeGenerator'

export default function ResumeDownload({ variant = 'primary', size = 'md', className = '' }) {
  const [loading, setLoading] = useState(false)

  const handleDownload = async () => {
    if (loading) return
    setLoading(true)
    try {
      const doc = await generateResumePDF()
      doc.save('Muhammad_Zeeshan_iOS_Developer_Resume.pdf')
    } catch (err) {
      console.error('PDF generation failed:', err)
    } finally {
      setLoading(false)
    }
  }

  const variantStyles = {
    primary: 'btn-primary',
    secondary: 'btn-glass',
    outline: 'btn-glass border border-white/[0.12] dark:border-white/[0.08]',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className={`${variantStyles[variant]} ${sizes[size]} ${className} disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300`}
    >
      {loading ? (
        <>
          <Loader2 size={18} className="animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Download size={18} />
          Download Resume
        </>
      )}
    </button>
  )
}
