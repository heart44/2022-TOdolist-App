<template>
    <img class="imgsize" :src="imgSrc">
    <!-- <img :src="imgSrc2"> -->
</template>

<script>
export default {
    data() {
        return {
            imgSrc: 'https://blog.kakaocdn.net/dn/DRs4v/btrvYuQp5ov/3pUbHFEz0czb2oPEnV8w3k/img.gif'
        }
    }
}
</script>

<style scoped>
    .imgsize { width: 500px; height: 350px; }
</style>
