<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" @keyup.enter="addTodo" placeholder="Type what you have to do">
        <span class="addContainer" @click="addTodo">
            <i class="addBtn fas fa-plus" aria-hidden="true"></i>
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newTodoItem: ''
        }
    },
    methods: {
        addTodo() {
            if(this.newTodoItem.trim() === '') {
                this.$emit('open');
            } else {
                const value = this.newTodoItem.trim(); 
                this.$emit('childAddTodo', value);
            }
            // if(this.newTodoItem.trim() !== '') { 
            //     const value = this.newTodoItem.trim();  //trim : 양쪽에 있는 빈칸 제거
            //     // localStorage.setItem(value, value);     //setItem(key값, value값)
            //     this.$emit('childAddTodo', value);
            // } else {
            //     this.$emit('childModalOpen');
            // }
            this.newTodoItem = '';
        }
    }
}
</script>

<style scoped>
    input:focus { outline: none; }
    .inputBox { 
        background-color: white; 
        height: 50px; width: 60%;
        line-height: 50px;
        border-radius: 5px;
        padding-left: 5px;
        display: flex;
        margin: 0 auto;
    }
    .inputBox input { 
        border-style: none; font-size: 0.9rem; 
        flex-grow: 1; padding: 0 10px;
    }
    .addContainer {
        background: linear-gradient(to right, #6478FB, #8763FB);
        width: 3rem;
        border-radius: 0 5px 5px 0;
        cursor: pointer;
    }
    .addContainer > .addBtn { color: white; vertical-align: middle; }
</style>