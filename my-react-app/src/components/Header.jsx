const NAV_ITEMS = [
  'Tour quốc tế',
  'Tour nội địa',
  'Dịch vụ tư vấn visa',
  'Giới thiệu',
  'Tin tức',
]

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-2xl font-black text-white shadow-md">
            V
          </div>
          <div>
            <p className="text-3xl font-black uppercase tracking-wide text-blue-700">
              Tourist
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-slate-400">
              Hơn cả lời nói
            </p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="text-right">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Hotline
            </p>
            <p className="text-lg font-bold text-orange-500">0337862988</p>
          </div>
          <button className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-md transition hover:bg-orange-600">
            Đặt ngay
          </button>
        </div>
      </div>
      <div className="border-t border-slate-100">
        <ul className="mx-auto flex max-w-6xl flex-wrap gap-4 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-blue-900 lg:justify-between">
          {NAV_ITEMS.map((item, index) => (
            <li
              key={item}
              className={`cursor-pointer rounded-full px-4 py-2 ${
                index === 0
                  ? 'bg-orange-500 text-white shadow'
                  : 'hover:text-orange-500'
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}