<template>
    <h1>헬로우</h1>
    <div>{{ hello }}</div>
    <div>{{ hello }}</div>
    <div>{{ hello }}</div>
    <div>{{ hello }}</div>
    <input type="text" v-model="hello">                            
    <!-- <button @click="changeHello">안녕하세요로 변경</button>   밑에거 줄여서 적은 것 -->
    <button v-on:click="changeHello">안녕하세요로 변경</button><br>
    <FavoriteSinger />
    <FavoriteSingerProps imgSrc="https://thumbs.gfycat.com/DecimalCreepyAkitainu-size_restricted.gif" />
</template>

<script>
    import FavoriteSinger from './components/FavoriteSinger.vue';
    import FavoriteSingerProps from './components/FavoriteSingerProps.vue';
    export default {
    name: 'App',
    data() {
    return {
        hello: "안녕",
    }
    },
    methods: {
    changeHello() {
        this.hello = '안녕하세요';
    }
    },
    components: { 
        FavoriteSinger, FavoriteSingerProps
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
