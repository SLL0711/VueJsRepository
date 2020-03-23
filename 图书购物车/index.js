let app = new Vue({
    el: '#divDemo1',
    data: {
        books: [
            { name: '计算机组成原理', count: 0, price: 100 },
            { name: 'Vue.js', count: 0, price: 200 },
            { name: 'ASPNETCORE', count: 0, price: 300 },
            { name: 'entityframerok', count: 0, price: 400 }
        ],
        TotalPrice: 0
    },
    methods: {
        btnAdd(index, type) {
            if (type == "1") {
                //+
                this.books[index].count++;
                this.getTotalPrice();
            } else if (type == "0") {
                //-
                if (this.books[index].count < 1)
                    return;
                this.books[index].count--;
                this.getTotalPrice();
            }
        },
        btnRemove(index) {
            this.books[index].count = 0;
            this.getTotalPrice();
        },
        getPriceFixed2(price, num) {
            return price.toFixed(num || 2);
        },
        getTotalPrice() {
            this.TotalPrice = this.books.reduce(function (total, book) {
                return total + book.price * book.count;
            }, 0);
        }
    },
    computed: {

    }
})