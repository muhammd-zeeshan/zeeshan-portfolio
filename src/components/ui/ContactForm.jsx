import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Send, Loader2 } from 'lucide-react'
import { sendContactEmail } from '../../lib/emailjs'
import Toast from './Toast'
import { fadeInUp } from '../animations/variants'

const budgetOptions = [
  { value: '', label: 'Select a range (optional)' },
  { value: '< $2,000', label: 'Less than $2,000' },
  { value: '$2,000 - $5,000', label: '$2,000 — $5,000' },
  { value: '$5,000 - $10,000', label: '$5,000 — $10,000' },
  { value: '$10,000 - $25,000', label: '$10,000 — $25,000' },
  { value: '$25,000+', label: '$25,000+' },
  { value: 'Not sure', label: 'Not sure yet' },
]

const initialForm = { name: '', email: '', budget: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [focused, setFocused] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [toast, setToast] = useState({ visible: false, message: '', type: 'success' })

  const showToast = useCallback((message, type = 'success') => {
    setToast({ visible: true, message, type })
  }, [])

  const hideToast = useCallback(() => {
    setToast(prev => ({ ...prev, visible: false }))
  }, [])

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) {
      errs.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email'
    }
    if (!form.message.trim()) {
      errs.message = 'Message is required'
    } else if (form.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters'
    }
    if (form.name.trim().toLowerCase() === form.email.trim().toLowerCase()) {
      errs.email = 'Name and email must be different'
    }
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      showToast('Please fix the form errors and try again.', 'error')
      return
    }

    if (!import.meta.env.VITE_EMAILJS_SERVICE_ID) {
      showToast(
        'Email service is not configured. Please set up environment variables.',
        'error'
      )
      return
    }

    setIsLoading(true)
    try {
      await sendContactEmail(form)
      setForm(initialForm)
      setFocused(null)
      showToast('Message sent successfully! I\'ll get back to you within 24 hours.', 'success')
    } catch (err) {
      const message =
        err?.status === 0
          ? 'Network error. Please check your connection and try again.'
          : err?.text || 'Something went wrong. Please try again later.'
      showToast(message, 'error')
    } finally {
      setIsLoading(false)
    }
  }

  const inputClass = (name) =>
    `input-glass ${
      focused === name
        ? '!border-accent/50 !bg-white/[0.06]'
        : errors[name]
          ? '!border-red-400/50'
          : ''
    }`

  return (
    <>
      <motion.form
        variants={fadeInUp}
        onSubmit={handleSubmit}
        className="space-y-5"
        noValidate
      >
        <div>
          <label className="block text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-1.5">
            Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            onFocus={() => setFocused('name')}
            onBlur={() => setFocused(null)}
            placeholder="John Appleseed"
            className={inputClass('name')}
            disabled={isLoading}
            autoComplete="name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-1.5">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onFocus={() => setFocused('email')}
            onBlur={() => setFocused(null)}
            placeholder="john@apple.com"
            className={inputClass('email')}
            disabled={isLoading}
            autoComplete="email"
          />
          {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-1.5">
            Project Budget
          </label>
          <select
            name="budget"
            value={form.budget}
            onChange={handleChange}
            onFocus={() => setFocused('budget')}
            onBlur={() => setFocused(null)}
            className={`${inputClass('budget')} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%239ca3af%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat pr-10`}
            disabled={isLoading}
          >
            {budgetOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-1.5">
            Message <span className="text-red-400">*</span>
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            onFocus={() => setFocused('message')}
            onBlur={() => setFocused(null)}
            rows={5}
            placeholder="Tell me about your project, your goals, and how I can help..."
            className={`${inputClass('message')} resize-none min-h-[120px]`}
            disabled={isLoading}
          />
          {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="btn-primary px-8 py-3.5 w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isLoading ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={18} />
              Send Message
            </>
          )}
        </button>
      </motion.form>

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.visible}
        onClose={hideToast}
      />
    </>
  )
}
