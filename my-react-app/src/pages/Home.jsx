import Footer from '../components/Footer'
import Header from '../components/Header'
import TourCard from '../components/TourCard'

const TOURS = [
  {
    id: 1,
    title: 'Tour Du Lịch Mỹ',
    location: 'Hoa Kỳ',
    image:
      'https://nld.mediacdn.vn/291774122806476800/2022/8/7/tuong-nu-than-tu-do-my-16598637021351558201229.jpg',
  },
  {
    id: 2,
    title: 'Tour Du Lịch Canada',
    location: 'Canada',
    image:
      'https://dulichperu.vn/wp-content/uploads/2022/08/tour-du-lich-canada-1-1.jpg',
  },
  {
    id: 3,
    title: 'Tour Du Lịch Châu Âu',
    location: 'Châu Âu',
    image:
      'https://deviet.vn/wp-content/uploads/2019/01/chau-au.jpg',
  },
  {
    id: 4,
    title: 'Tour Du Lịch Úc',
    location: 'Châu Úc',
    image:
      'https://www.vietnambooking.com/wp-content/uploads/2018/12/du-lich-chau-uc-27-12-2018.jpg',
  },
  {
    id: 5,
    title: 'Tour Du Lịch Cuba',
    location: 'Châu Mỹ',
    image:
      'https://dulichdiaphuong.com/nuocngoai/thu-do-havana-cuba.jpg',
  },
  {
    id: 6,
    title: 'Tour Du Lịch Nga',
    location: 'Châu Âu',
    image:
      'https://dulichviet.com.vn/images/bandidau/du-lich-nga.jpg',
  },
  {
    id: 7,
    title: 'Tour Singapore - Malaysia',
    location: 'Đông Nam Á',
    image:
      'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    title: 'Tour Du Lịch Châu Á',
    location: 'Châu Á',
    image:
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80',
  },
]

function Home() {
  return (
    <div className="min-h-screen bg-[#f6f7fb] text-slate-700">
      <Header />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-12">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.6em] text-slate-400">
            V Tourist
          </p>
          <h1 className="mt-2 text-4xl font-black uppercase tracking-wide text-blue-900">
            Tour Quốc Tế
          </h1>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-orange-500" />
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-500">
            Những hành trình đẳng cấp cùng chuyên gia bản địa, mang đến trải
            nghiệm tinh tế tại các điểm đến nổi tiếng nhất thế giới.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TOURS.map((tour) => (
            <TourCard key={tour.id} {...tour} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="rounded-full bg-orange-500 px-10 py-3 text-base font-semibold uppercase tracking-wide text-white shadow-lg transition hover:bg-orange-600">
            Xem tất cả
          </button>
        </div>
      </main>

      <Footer />

      <div className="fixed right-5 top-1/3 flex flex-col gap-3">
        {[
          {
            src: "https://cdn-icons-png.flaticon.com/512/724/724664.png",
            alt: "Phone",
            bg: "bg-green-500",
          },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/512px-Icon_of_Zalo.svg.png",
            alt: "Zalo",
            bg: "bg-blue-500",
          },
        ].map((icon) => (
          <button
            key={icon.alt}
            className={`${icon.bg} rounded-full p-3 shadow-lg transition hover:-translate-y-1`}
          >
            <img src={icon.src} alt={icon.alt} className="w-7 h-7" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home