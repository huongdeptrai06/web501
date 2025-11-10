const user = {
  firstName: "Nguyen",
  lastName: "Van A",
  product: "Laptop Dell XPS",
  price: 25000000,
  orderDate: "2024-01-15",
};

const emailTemplate = `
Xin chào ${user.firstName} ${user.lastName},

Cảm ơn bạn đã đặt hàng tại cửa hàng của chúng tôi!

Thông tin đơn hàng:
- Sản phẩm: ${user.product}
- Giá: ${user.price.toLocaleString("vi-VN")}₫
- Ngày đặt hàng: ${user.orderDate}

Chúng tôi sẽ liên hệ với bạn sớm nhất để xác nhận và giao hàng.

Trân trọng,
Đội ngũ hỗ trợ khách hàng
`;

console.log(emailTemplate);
