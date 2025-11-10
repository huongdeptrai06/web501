//bai1
const getFirstLast = (array) => {
    if (array.length === 0 ) return [];
    return [array[0], array[array.length - 1]];
};
console.log(getFirstLast([1, 2, 3, 4]));
console.log(getFirstLast(['a', 'b', 'c']));
console.log(getFirstLast([]));

const swapElements =(arr) => {
    if (arr.length < 4) return arr;
    [arr[1], arr[3]] = [arr[3], arr[1]];
    return arr;
};
console.log(swapElements([1,2,3,4,5]));
console.log(swapElements([10, 20, 30, 40]));
console.log(swapElements([1,2,3]));

//bai2
const getUserInfo  = (user) => {
    const { personalInfo: { name, contact: { email } } } = user;
    return { name, email };
};

const user ={
    id: 1,
    personalInfo: {
    name: "huongtp",
    contact: {
      email: "huongtp@email.com",
      phone: "033-4567-888",
    },
  },
};
console.log(getUserInfo(user));

const createProduct = ({ name, price, category = "general", inStock = true }) => {
  return { name, price, category, inStock };
};

const product = createProduct({ name: "Laptop", price: 999 });
console.log(product);

const product2 = createProduct({ name: "Phone", price: 499, category: "electronics", inStock: false });
console.log(product2);

// bai3
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
delay(2000).then(() => console.log("2 seconds passed"));

const fetchMultipleData = async (urls) => {
  try {
    const promises = urls.map(url => fetch(url).then(res => res.json()));
    const results = await Promise.all(promises);
    return results;
  } catch (err) {
    console.error("Error fetching data:", err);
    return [];
  }
};

fetchMultipleData([
    "https://jsonplaceholder.typicode.com/users/1",
    "https://jsonplaceholder.typicode.com/users/2"
    ])
  .then(users => console.log(users))
  .catch(err => console.error(err));



