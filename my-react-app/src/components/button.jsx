export default function Button({ label }) {
  return (
    <button className="px-4 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
      {label}
    </button>
  )
}

