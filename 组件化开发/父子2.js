
let app = new Vue({
    el: '#divDemo',
    data: {
        name: 'sll'
    },
    components: {
        'cpt-1': {
            template: '#tem',
            data() {
                return {
                    categories: [
                        { name: '家用电器1', id: '1' },
                        { name: '家用电器2', id: '2' },
                        { name: '家用电器3', id: '3' },
                        { name: '家用电器4', id: '4' }
                    ]
                }
            },
            methods: {
                alert(item) {
                    // console.log(item);
                    this.$emit('item-click', item);
                    // this.$parent.receiveClick(item)
                }
            }
        }
    },
    methods: {
        receiveClick(item) {
            console.log(item)
            this.name = item.name;
            //执行网络请求...
        }
    }
})
