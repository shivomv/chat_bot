export default function AIAvatar() {
  return (
    <div className="flex justify-center mb-3">
      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
        <img
          src="/charactor.png"
          alt="AI Avatar"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}
