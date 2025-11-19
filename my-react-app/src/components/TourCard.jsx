export default function TourCard({ image, title, location }) {
  return (
    <article className="relative overflow-hidden rounded-3xl shadow-lg group">
      <img
        src={image}
        alt={title}
        className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 px-5 pb-5 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] opacity-80">
          {location}
        </p>
        <h2 className="text-lg font-bold uppercase tracking-wide">{title}</h2>
      </div>
    </article>
  )
}