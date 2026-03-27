export default function AIAvatar() {
  return (
    <div className="flex justify-center mb-3">
      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src="/ai.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}
