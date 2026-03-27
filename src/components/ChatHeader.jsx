export default function ChatHeader() {
  return (
    <div className="bg-white rounded-t-2xl sm:rounded-t-3xl overflow-hidden">
      <div className="w-full h-40 sm:h-56 md:h-64 bg-gray-100 flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src="/ct.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}
