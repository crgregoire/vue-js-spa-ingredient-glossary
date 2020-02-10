<template>
    <div id="ingredient" class="h-100">
        <span class="close" v-on:click="setActiveIngredient(false)">&times;</span>

        <div class="row">
            <div class="col-lg-10 offset-lg-1 col-12">
                <div class="row mt-5">
                    <div class="col-lg-12 text-center">
                        <img :src="ingredient.icon" :alt="ingredient.name" class="icon mx-auto d-block">

                        <h2 class="mt-4 mb-2" v-on:click="setActiveIngredient(false)">{{ ingredient.name }}</h2>
                        <p>{{ ingredient.dailyValue }}</p>
                    </div>

                    <div class="col-3 offset-3 text-center mt-3"><img class="gluten" src="assets/glutenfree@3x.png" alt="glutenfree"></div>
                    <div class="col-3 offset-right-3 text-center mt-3"><img class="gluten" src="assets/nonGMO@3x.png" alt="glutenfree">
                    </div>
                    <div class="col-3 offset-3 text-center mt-2"><p>Gluten Free</p></div>
                    <div class="col-3 offset-right-3 text-center mt-2"><p>Non-GMO</p></div>

                </div>
                <div class="row"></div>
                <div class="col-12 header-body-border">
                    <h3>Form</h3>
                </div>

                <div class="col-12">
                    <p>{{ ingredient.form }}</p>
                </div>

                <div class="col-12"><h3>About</h3></div>
                <div class="col-12"><p>{{ ingredient.about }}</p></div>
                <div class="col-12" v-if="ingredient.otherNames === ''"></div>
                <div class="col-12" v-else><h3>Other Names</h3></div>
                <div class="col-12" v-if="ingredient.otherNames === ''"></div>
                <div class="col-12" v-else><p>{{ ingredient.otherNames }}</p></div>
                <div class="col-12"><h3>Country of Origin</h3></div>

                <div class="col-12"><p>{{ ingredient.origin }}</p></div>
                <div class="col-12"><h3>Natural Sources</h3></div>
                <div class="col-12"><p>{{ ingredient.natural }}</p></div>
                <div class="faq col-12">
                    <div class="col-12"><p>See FAQs for more information: </p></div>
                    <div class="col-12">
                        <a v-for="faq in ingredient.faqs" :href="faq">{{ faq }}<br></a>
                    </div>
                </div>
                <div class="col-12"><p>We recommend that you consult with your physician before adding dietary supplements to your daily regimen.</p></div>
                <div class="col-12 mb-4"><h6>*These statements have not been evaluated by the Food and Drug
                    Administration. This product is not intended to diagnose, treat, cure, or prevent any
                    disease.</h6></div>
            </div>
        </div>
    </div>

</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        name: 'ingredient',
        computed: {
            ingredient() {
                return this.$store.getters.activeIngredient
            }
        },
        methods: {
            ...mapMutations([
                'setActiveIngredient'
            ])
        }
    }
</script>

<style lang="scss" scoped>
    #ingredient {
        flex: 1 1 auto;
        overflow-y: auto;
        min-height: 0;
        font-family: 'Lato', sans-serif;
        
        .icon{
            height: 123px;
            width: 123px;
        }
        .gluten {
            height: 35px;
            width: 35px;
        }

        h2 {
            font-size: 28px;
            font-weight: bold;
        }

        h3 {
            font-size: 16px;
            font-weight: bold;
            line-height: 1.63;
            letter-spacing: 4.5px;
            color: #ec6170;
            text-transform: uppercase;
        }

        h6 {
            opacity: 0.6;
            font-size: 12px;
            font-style: italic;
            line-height: 1.83;
            letter-spacing: 0.5px;
            color: #23223b;
        }

        p {
            opacity: 0.6;
            font-size: 14px;
            font-weight: bold;
            line-height: 1.93;
            letter-spacing: 0.5px;
            color: #23223b;
        }

        .close {
            font-size: 48px;
            color: #23223b;
            cursor: pointer;
            position: absolute;
            right: 25px;
            top: 10px;
            z-index: 25;
        }

        .faq {
            border-color: #f1e8e1;
            border-style: solid;
            border-width: 2px;
            padding: 20px 20px 20px 20px;
            margin-bottom: 36px;
            margin-top: 36px;
            opacity: 0.6;
            font-size: 14px;
            font-weight: bold;
            line-height: 1.93;
            letter-spacing: 0.5px;
            color: #23223b;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;

            a {
                font-size: 14px;
                font-weight: bold;
                line-height: 1.93;
                letter-spacing: 0.5px;
                color: #ec6170;

            }
        }

        .header-body-border {
            border-color: #f1e8e1;
            border-style: solid;
            border-width: 2px 0 0 0;
            padding-top: 40px;
            margin-top: 40px;
        }
    }
</style>
