<template>
    <div id="categories">
        <select name="categories" v-on:change="setActiveCategory(category)" v-model="category">
            <option value="false">ALL INGREDIENTS</option>
            <option value="vitamins">VITAMINS</option>
            <option value="minerals">MINERALS</option>
            <option value="specialty">SPECIALTY</option>
        </select>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        name: 'categories',
        data() {
            return {
                category: false,
            }
        },
        methods: {
            ...mapMutations([
                'setActiveCategory'
            ])
        }
    }
</script>

<style lang="scss">
#categories {
    select {
        border: 0;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
        padding: 17px 55px 17px 10px;
        margin: 26px 0 12px;
        width: 100%;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        text-align-last: center;
        cursor: pointer;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 1.8px;
        color: #23223b;
        outline: none;
        background: #faf8f6 url('../../public/assets/arrow.png') center right / auto 100% no-repeat;
    }
}
</style>