<template>
    <div id="descriptor" class="h-100 d-flex align-items-center justify-content-center">
        <div class="row d-flex align-items-center">
            <div class="col-lg-10 offset-lg-1 col-12">
                <div class="col-12 text-center">
                    <img class="mx-auto d-block" src="/assets/arrow-right.png">
                </div>

                <div class="col-12 text-center mt-5 mb-5">
                    <h3>Select Item from the left for more details</h3>
                </div>

                <div class="col-12">
                    <img class="mx-auto d-block" src="/assets/arrow-right.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'descriptor'
  }
</script>

<style lang="scss" scoped>
    h3 {
        font-family: 'Lato', sans-serif;
        font-size: 28px;
        font-weight: bold;
    }

    img {
        width: 30px;
        height: 30px;
        transform:scale(-1,1);
        -webkit-transform:scale(-1,1);
        -moz-transform:scale(-1,1);
        -o-transform:scale(-1,1)
    }
</style>
