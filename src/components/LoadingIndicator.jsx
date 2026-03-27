export default function LoadingIndicator() {
  return (
    <div className="flex justify-start mb-3">
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 px-4 py-3 rounded-2xl rounded-bl-none shadow-md">
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  )
}
