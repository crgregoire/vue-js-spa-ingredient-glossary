<template>
    <div id="app">
        <div id="wrap" class="d-flex flex-row h-100 flex-wrap">
            <div id="col-l" class="col-xl-3 col-md-4 col-sm-12 col-xs-12 align-self-stretch d-flex flex-column">
                <div id="header" class="text-center">
                    <div id="logo">
                        <a href="https://gettespo.com">
                            <span>Tespo</span>
                        </a>
                    </div>

                    <h1>Glossary</h1>

                    <categories></categories>
                </div>

                <navigation></navigation>
            </div>

            <div id="col-r" class="col-xl-9 col-md-8 col-sm-12 col-xs-12 align-self-stretch d-none d-md-block">
                <ingredient v-if="ingredient"></ingredient>
                <descriptor v-else></descriptor>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        computed: {
            ingredient() {
                return this.$store.getters.activeIngredient
            }
        },
        created() {
            this.$store.dispatch('getIngredients')
        }
    }
</script>
<style lang="scss">
    @import '~bootstrap/scss/bootstrap';
    @import url('https://fonts.googleapis.com/css?family=Lato:400,700');

    html, body, #app {
        height: 100%;
        font-family: 'Lato', sans-serif;
    }

    @media (max-width: 767.98px) {
        #descriptor {
            display: none !important;
        }

        #wrap > #col-r {
            display: block !important;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 10;
        }
    }

    #app {
        #col-l {
            background: #fff;

            #header {
                #logo {
                    background: url('../public/assets/logo.png');
                    margin: 35px auto 21px;
                }

                #logo,
                #logo a,
                #logo a span {
                    display: block;
                    width: 36px;
                    height: 36px;
                    text-indent: -9999px;
                }


                h1 {
                    font-size: 28px;
                    font-weight: 700;
                    line-height: 1.46;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: #23223b;
                    margin: 0;
                }
            }
        }

        #col-r {
            background: #faf8f6;

        }
    }
</style>