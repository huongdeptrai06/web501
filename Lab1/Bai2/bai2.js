function creaBook(title, author, year, price){
    const discount = 'calculateDiscount';
    return{
        title,
        author,
        year,
        price,

        getBookInfo(){
            return `${this.title} - ${this.author} (${this.year}) | Giá: ${this.price.toLocaleString()} VND`;
        },

        [discount](discountPercent){
            const discount = this.price - (this.price * discountPercent/100);
            return `Giá sau khi giảm ${discount}%: ${discountPercent.toLocaleString()} VND`;
        }
    };
}