import { useChat } from './hooks/useChat'
import ChatHeader from './components/ChatHeader'
import ChatMessage from './components/ChatMessage'
import ChatInput from './components/ChatInput'
import LoadingIndicator from './components/LoadingIndicator'

export default function App() {
  const { messages, input, setInput, loading, handleSendMessage, messagesEndRef } = useChat()

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      {/* Chat Card - Proper Layout */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col" style={{ height: '800px' }}>
        {/* Header with Video */}
        <div className="flex-shrink-0">
          <ChatHeader />
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-white">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          {loading && <LoadingIndicator />}
          <div ref={messagesEndRef} />
        </div>

        {/* Input - Fixed at bottom */}
        <div className="flex-shrink-0">
          <ChatInput
            input={input}
            setInput={setInput}
            onSubmit={handleSendMessage}
            loading={loading}
          />
        </div>
      </div>
    </div>
  )
}
