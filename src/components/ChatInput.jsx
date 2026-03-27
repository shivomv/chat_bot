export default function ChatInput({ input, setInput, onSubmit, loading }) {
  return (
    <form onSubmit={onSubmit} className="bg-white p-2 sm:p-3 md:p-4 rounded-b-2xl sm:rounded-b-3xl border-t border-gray-200 shadow-lg">
      <div className="flex flex-col gap-2 sm:gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="w-full px-4 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs sm:text-sm font-semibold rounded-lg sm:rounded-xl hover:from-blue-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-400 transition-all duration-300 shadow-md hover:shadow-lg disabled:shadow-none"
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </form>
  )
}
