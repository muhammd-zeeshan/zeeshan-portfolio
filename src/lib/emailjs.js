import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export async function sendContactEmail({ name, email, budget, message }) {
  const templateParams = {
    name: name,
    email: email,
    budget: budget || 'Not specified',
    message: message,
    to_name: 'Muhammad Zeeshan',
    reply_to: email,
  }

  console.log('[EmailJS] Sending with params:', {
    ...templateParams,
    email: templateParams.email.replace(/(.{2})(.*)(@.*)/, '$1***$3'),
  })

  const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
    publicKey: PUBLIC_KEY,
  })

  console.log('[EmailJS] Success:', response.status, response.text)
  return response
}
