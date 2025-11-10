//bai 1
// Function 1
const multiply = (a, b) => a*b;

// Function 2
const isPositive = number => number >= 0;

// Function 3
const getRandomNumber = () => Math.random();
// Function 4
document.addEventListener("click", () => console.log("Clicked!"));

// bai 2
const createUser = (name = "Anonymous", age = 18, isAdmin = false) => ({
    name,
    age,
    isAdmin,
});
// bai 3
const mergeArrays = (...arrays) => [].concat(...arrays);
console.log(mergeArrays([1, 2], [3, 4], [5, 6]));

const sumAll = (...numbers) => numbers.reduce((sum, n) => sum + n, 0);
console.log(sumAll(1, 2, 3, 4, 5));

const createProduct = (info) => {
  const defaultProduct = {
    name: "Sản phẩm chưa có tên",
    price: 0,
    inStock: true,
  };
  return { ...defaultProduct, ...info };
};
console.log(createProduct({ name: "Điện thoại", price: 5000000 }));   

// bai 4
const shoppingCart = (customerName, ...products) => ({
  customerName,
  products,
  totalItems: products.length,
});
console.log("Đơn hàng 1:", shoppingCart("Huong", "Táo", "Chuối", "Cam"));
console.log("Đơn hàng 2:", shoppingCart("Truong", "Laptop", "Chuột"));
console.log("Đơn hàng trống:", shoppingCart("Khách lạ"));



