const CONTACT = [
  { label: 'Hotline', value: '0337869288' },
  { label: 'Email', value: 'huongtp@vtourist.com' },
  { label: 'Địa chỉ', value: 'Cổng Ong, Tòa nhà FPT Polytechnic, 13 phố Phan Tây Nhạc, phường Xuân Phương, TP Hà Nội.' },
]

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#0c1b4d] text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 md:flex-row md:justify-between md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-orange-400">
            V Tourist
          </p>
          <h2 className="mt-2 text-3xl font-black uppercase tracking-wide">
            Đồng Hành Mọi Hành Trình
          </h2>
          <p className="mt-3 max-w-md text-sm text-slate-200">
            Chuyên tour trong nước – quốc tế, dịch vụ đặt vé máy bay, khách sạn,
            visa và tổ chức tour đoàn – teambuilding cho doanh nghiệp.
          </p>
        </div>

        <div className="grid gap-4 text-sm">
          {CONTACT.map(item => (
            <div key={item.label}>
              <p className="font-semibold uppercase tracking-wide text-orange-300">
                {item.label}
              </p>
              <p className="text-slate-100">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-center text-xs uppercase tracking-[0.4em] text-slate-300">
          © {new Date().getFullYear()} V Tourist. All rights reserved.
        </p>
      </div>
    </footer>
  )
}