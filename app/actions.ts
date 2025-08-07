'use server'

export async function sendMessage(formData: FormData) {
  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string
  
  // Basic validation
  if (!name || !email || !message) {
    return {
      success: false,
      message: 'Please fill in all fields.'
    }
  }
  
  if (!email.includes('@')) {
    return {
      success: false,
      message: 'Please enter a valid email address.'
    }
  }
  
  // In a real application, you would:
  // 1. Send email using a service like Resend, SendGrid, or Nodemailer
  // 2. Save to database
  // 3. Send notification
  
  // For now, we'll simulate success
  console.log('Message received:', { name, email, message })
  
  return {
    success: true,
    message: `Thank you ${name}! Your message has been sent successfully. I'll get back to you soon at ${email}.`
  }
}
