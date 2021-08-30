var sum = 0;
var app = new Vue({
    el: '#app',

    data: {

        itemList: [
            {
                id: '1',
                time: '2:43秒',
                itemName: '上半身訓練',
                cal: '71',
                count: '0'
            },
            {
                id: '2',
                time: '2:42秒',
                itemName: '下半身訓練',
                cal: '92',
                count: '0'
            },
            {
                id: '3',
                time: '2:40秒',
                itemName: '核心訓練',
                cal: '79',
                count: '0'
            },
            {
                id: '4',
                time: '2:42秒',
                itemName: '腹肌養成班',
                cal: '82',
                count: '0'
            },

        ]
    },
    methods: {
        handlePlus: function (item) {
            item.count++;
            sum = sum + item.cal * 1;
        },
        handleSub: function (item) {
            if (item.count > 0) {
                item.count--;
                sum = sum - item.cal;
            }
        },



    },
    computed: {


    }
})
