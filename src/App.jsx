import { useChat } from './hooks/useChat'
import ChatHeader from './components/ChatHeader'
import ChatMessage from './components/ChatMessage'
import ChatInput from './components/ChatInput'
import LoadingIndicator from './components/LoadingIndicator'

export default function App() {
  const { messages, input, setInput, loading, handleSendMessage, messagesEndRef } = useChat()

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-2 sm:p-4 overflow-hidden">
      {/* Chat Card - Full Screen Responsive */}
      <div className="w-full h-full max-w-sm sm:max-w-md lg:max-w-lg max-h-screen bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header with Video */}
        <div className="flex-shrink-0">
          <ChatHeader />
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2 sm:space-y-3 bg-white">
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
