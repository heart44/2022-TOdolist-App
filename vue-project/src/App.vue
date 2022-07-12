<template>
    <div id="app">
        <TodoHeader></TodoHeader>
        <TodoInput @childAddTodo="addTodo" @open="open"></TodoInput>
        <TodoList :propsItems="todoItems" @childRemoveTodo="removeTodo"></TodoList>   <!-- v-bind는 생략 가능 -->
        <TodoFooter @childClearTodo="clearTodo"></TodoFooter>
        <AlertModal :show="modalShow" header="알림창" body="내용을 입력해 주세요" @close="close"></AlertModal>
    </div>
</template>

<script>
    import TodoHeader from './components/todo/TodoHeader.vue';
    import TodoInput from './components/todo/TodoInput.vue';
    import TodoList from './components/todo/TodoList.vue';
    import TodoFooter from './components/todo/TodoFooter.vue';
    import AlertModal from './components/common/AlertModal.vue';
    import axios from 'axios';
    import DateUtils from './utils/DateUtils';

    export default {
    name: 'App',
    data() {
        return {
            todoItems: [],
            cnt: 0,
            modalShow: false,
        }
    },
    methods: {
        open() {
            this.modalShow = true;
        },
        close() {
            this.modalShow = false;
        },
        addTodo(todoItem) {
            const param = { 'todo': todoItem }
            axios.post('/todo/index', param)
            .then(res => {
                if(res.status === 200 && res.data) {
                    const item = {
                        'itodo': res.data.result,
                        'todo': todoItem,
                        'created_at': DateUtils.getTimestamp(new Date())
                    }
                    this.todoItems.push(item);
                }
            });
            // this.todoItems.push({
            //     key: this.cnt++,
            //     value: todoItem
            // });
        },
        removeTodo(key) {
            this.todoItems.forEach((item, idx) => {
                if(item.itodo === key) {
                    this.todoItems.splice(idx, 1);
                    axios.delete(`/todo/index/${item.itodo}`)
                    .then(res => {
                        console.log(res);
                    });
                }
            });
        },
        clearTodo() {
            axios.delete('/todo/index')
            .then(res => {
                if(res.status === 200 && res.data.result) {
                    this.todoItems.splice(0);
                }
            });
        },
        changeValue() {
            const json = JSON.stringify(this.todoItems);
            localStorage.setItem('todoItems', json);
            localStorage.setItem('cnt', this.cnt);
        }
    },
    created() {
        axios.get('/todo/index')
        .then(res => {
            console.log(res);
            //status : 200 (통신 성공~), 2로 시작하는게 클라이언트 쪽, 4로 시작하면 통신쪽
            if(res.status === 200 && res.data.length > 0) {
                res.data.forEach(item => {
                    this.todoItems.push(item);
                });
            }
        })

        // const json = localStorage.getItem('todoItems');
        // if(json) {
        //     const todoItems = JSON.parse(json);
        //     todoItems.forEach(item => {
        //         this.todoItems.push(item);
        //     }); 
        //     const cnt = localStorage.getItem('cnt');
        //     this.cnt = cnt;
        // }
    },
    // watch: {
    //     todoItems: {
    //         deep: true,     //배열 안 쪽의 값이 변경된다는 것을 알려주는 것이 deep
    //         handler() {
    //             this.changeValue();
    //         }
    //     }
    // },
    components: {   
        //'TodoHeader': TodoHeader 이렇게 적어야하지만 
        //key값과 value값이 같으면 아래처럼 적어도 됨
        TodoHeader, 
        TodoInput, 
        TodoList, 
        TodoFooter,
        AlertModal,
    }
}
</script>

<style>
    body { text-align: center; background-color: #F6F6F8; }
    input { border-style: groove; width: 200px; }
    button { border-style: groove; }
    .shadow { box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03); }

    .ctnt { font-size: 1rem; }
    .d-flex { display: flex; }

    .flex-row { flex-direction: row; }
    .flex-col { flex-direction: column; }
    .gorw-1 { flex-grow: 1; }
    .justify-content-evenly { justify-content: space-evenly; }
</style>
