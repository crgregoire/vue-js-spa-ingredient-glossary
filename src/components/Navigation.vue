<template>
    <div id="navigation">
        <div class="list-group list-group-flush">
            <a class="ingredient list-group-item" v-for="ingredient in ingredients" v-on:click="setActiveIngredient(ingredient)">
                <span class="icon">
                    <img :src="ingredient.icon" :alt="ingredient.name" width="100%">
                </span>

                {{ ingredient.name }}
            </a>
        </div>
    </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: 'navigation',

      computed: {
          ingredients() {
              if(this.$store.getters.activeCategory === false) {
                  return this.$getters.ingredients
              }

              return this.$store.getters.ingredients.reduce((carry, ingredient) => {
                  if(ingredient.category === this.$store.getters.activeCategory) {
                      carry.push(ingredient)
                  }

                  return carry
              }, [])
          }
      }
    methods: {
      ...mapMutations([
        'setActiveIngredient'
      ]),
  }}
</script>

<style lang="scss">
#navigation {
    flex: 1 1 auto;
    overflow-y: auto;
    min-height: 0px;

    .ingredient {
        padding-left: 65px;
        color: #23223b;
        cursor: pointer;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 1px;
        border: none;
        margin: 2.5px 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        -o-transition: .5s ease-out;
        -ms-transition: .5s ease-out;
        -moz-transition: .5s ease-out;
        -webkit-transition: .5s ease-out;

        .icon {
            display: inline-block;
            width: 42px;
            height: 42px;
            position: absolute;
            top: 1.5px;
            left: 3px;
        }

        &:hover,
        &:focus {
            color: #ec6170;
        }
    }
}
</style>