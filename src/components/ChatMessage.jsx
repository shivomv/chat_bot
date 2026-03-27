export default function ChatMessage({ message }) {
  const isUser = message.sender === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3 animate-fadeIn`}>
      <div
        className={`max-w-xs px-4 py-3 rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg ${
          isUser
            ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-none'
            : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-bl-none'
        }`}
      >
        <p className="text-sm font-medium">{message.text}</p>
      </div>
    </div>
  )
}
