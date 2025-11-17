import Footer from '../components/Footer'
import Header from '../components/Header'
import Heading from '../components/Heading'
import TourCard from '../components/TourCard'

function Home() {
  // mock data
  const tours = [
    {
      id: 1,
      title: 'Tour Du Lịch Hàn Quốc',
      image:
        'https://thuthuatnhanh.com/wp-content/uploads/2022/11/hinh-anh-han-quoc-canh-dep.jpg',
      price: '25.000.000 VNĐ',
      duration: '7 Ngày 6 Đêm',
    },
    {
      id: 2,
      title: 'Tour Du Lịch Hoa Kỳ',
      image:
        'https://vtourist.com.vn/wp-content/uploads/2024/04/Tour-Bo-Dong-My-10N9D-destination-new-york-01-1-1200x800.jpg',
      price: '45.000.000 VNĐ',
      duration: '10 Ngày 9 Đêm',
    },
    {
      id: 3,
      title: 'Tour Du Lịch Nhật Bản',
      image:
        'https://vtourist.com.vn/wp-content/uploads/2024/05/kinh-nghiem-du-lich-sydney-1200x800.jpg',
      price: '35.000.000 VNĐ',
      duration: '8 Ngày 7 Đêm',
    },
    {
      id: 4,
      title: 'Tour Du Lịch Úc',
      image:
        'https://datviettour.com.vn/uploads/images/tin-tuc/Tin-mo-ta-danh-muc-tour/chau-au/6-italia.jpg',
      price: '40.000.000 VNĐ',
      duration: '9 Ngày 8 Đêm',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main>
        <Heading title='Tour Nội Địa' />
        <p className="text-xl font-medium my-2 px-2">
          Các chuyến đi đồng hành cùng chúng tôi là khoảnh khắc đặc biêt, luôn
          sẵn sàng tạo ra những trải nghiệm độc đáo và không quên cho du khách,
          giúp mang đến những chuyến hành trình tuyệt vời.
        </p>
        <div className="flex gap-2">
          {tours.map(tour => (
            <TourCard key={tour.id} title={tour.title} image={tour.image} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home