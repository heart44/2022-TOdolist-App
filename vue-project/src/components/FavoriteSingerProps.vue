<template>
    <img class="imgsize" :src="imgSrc">
    <!-- <img v-bind:src="imgSrc2"> -->
</template>

<script>
export default {
    props: {
        imgSrc: String,
    },
}
</script>

<style scoped>
    .imgsize { width: 300px; height: 200px; }
</style>
