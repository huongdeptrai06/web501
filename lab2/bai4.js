const product = {
  name: "iPhone 15",
  price: 20000000,
  discount: 10,
  inStock: true,
};

const finalPrice = product.price * (1 - product.discount / 100);

const productCard = `
  <div class="product-card">
    <h2>${product.name}</h2>
    <p>Giá gốc: <del>${product.price.toLocaleString("vi-VN")}₫</del></p>
    <p>Giảm giá: ${product.discount}%</p>
    <p><strong>Giá sau giảm: ${finalPrice.toLocaleString("vi-VN")}₫</strong></p>
    <p>Tình trạng: 
      <span style="color:${product.inStock ? "green" : "red"};">
        ${product.inStock ? "Còn hàng" : "Hết hàng"}
      </span>
    </p>
    <button style="background:#007bff; color:#fff; border:none; padding:8px 12px; border-radius:5px; cursor:pointer;">
      Mua ngay
    </button>
  </div>
`;

console.log(productCard);
