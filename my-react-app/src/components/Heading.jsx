export default function Heading({ title = 'Tour Nội Địa' }) {
  return (
    <h1 className="font-bold uppercase text-blue-600 border-b-2 border-blue-600 pb-1">
      {title}
    </h1>
  )
}

