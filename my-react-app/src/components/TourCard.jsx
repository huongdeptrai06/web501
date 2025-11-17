import Button from './button'

export default function TourCard(props) {
  return (
    <div>
      <img src={props.image} width={500} alt="" height={300} />
      <h2 className="text-3xl font-bold text-orange-300">{props.title}</h2>
      <div className="mt-4 flex gap-2">
        <Button label="Xem thêm" />
        <Button label="Đặt tour" />
      </div>
    </div>
  )
}