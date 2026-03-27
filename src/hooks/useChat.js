import { useState, useRef, useEffect } from 'react'
import { generateBotResponse } from '../utils/botResponses'

export function useChat() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! How can I help you today?', sender: 'bot' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user'
    }
    
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: generateBotResponse(input),
        sender: 'bot'
      }
      setMessages(prev => [...prev, botMessage])
      setLoading(false)
    }, 500)
  }

  return {
    messages,
    input,
    setInput,
    loading,
    handleSendMessage,
    messagesEndRef
  }
}
