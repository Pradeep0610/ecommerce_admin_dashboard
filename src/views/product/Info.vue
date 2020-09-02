<template>
<vs-row vs-justify="center" vs-w="12">
    <vs-col type="flex" vs-w="11">
        <!-- PRODUCT CARD -->
        <vs-card>
            <div class="card-content">
                <div class="product-detail">
                    <vs-row vs-type="flex" vs-w="12">
                        <!-- PRODUCT IMAGE -->
                        <vs-col vs-type="flex" vs-w="5" vs-justify="center" vs-align="center">
                            <img :src="'http://localhost:3000/' + product.photo" alt="Product Image" />
                        </vs-col>
                        <!-- PRODUCT DETAILS -->
                        <vs-col vs-type="flex" vs-w="7">
                            <div class="container text-left">
                                <!-- PRODUCT TITLE -->
                                <h2>{{ product.title }}</h2>
                                <!-- PRODUCT OWNER -->
                                <p class="my-2">
                                    <span class="mr-1">by</span>
                                    <span class="font-weight-bold">{{ productOwnerName }}</span>
                                </p>
                                <p class="flex flex-wrap mt-3">
                                    <!-- PRODUCT PRICE -->
                                    <span class="text-2xl font-weight-bold mr-2">Rs</span>
                                    <span class="text-2xl font-weight-bold mr-3">{{ product.price }}</span>
                                    <!-- PRODUCT RATING -->
                                    <span class="pl-3 pt-2 mr-2 border border-solid d-theme-border-grey-light border-top-0 border-bottom-0 border-right-0">
                                        <span>
                                            <vs-icon icon="star" size="1.2rem"></vs-icon>
                                        </span>
                                        <span>
                                            <vs-icon icon="star" size="1.2rem"></vs-icon>
                                        </span>
                                        <span>
                                            <vs-icon icon="star" size="1.2rem"></vs-icon>
                                        </span>
                                        <span>
                                            <vs-icon icon="star" size="1.2rem"></vs-icon>
                                        </span>
                                        <span>
                                            <vs-icon icon="star" size="1.2rem"></vs-icon>
                                        </span>
                                    </span>
                                    <span>424 ratings</span>
                                </p>
                                <vs-divider></vs-divider>
                                <!-- PRODUCT DESCRIPTION -->
                                <p class="text-xl">{{ product.description }}</p>

                                <!-- PRODUCT OTHER DEATAILS -->
                                <vs-list-item class="px-0 pt-4" icon="airport_shuttle" title="Free Shipping"></vs-list-item>
                                <vs-list-item class="px-0" icon="attach_money" title="EMI option Available"></vs-list-item>
                                <!-- PRODUCT COLORS IF AVAILABLE -->
                                <vs-row vs-type="flex" class="mt-2">
                                    <span class="text-xl">Color</span>
                                    <vs-col vs-type="flex" vs-w="12" class="mt-2">
                                        <div>
                                            <vs-radio color="rgb(115, 103, 240)" vs-value="purple" v-model="productColor"></vs-radio>
                                        </div>
                                        <div>
                                            <vs-radio color="rgb(234, 84, 85)" vs-value="red" v-model="productColor"></vs-radio>
                                        </div>
                                        <div>
                                            <vs-radio color="rgb(255, 159, 67)" vs-value="yellow" v-model="productColor"></vs-radio>
                                        </div>
                                        <div>
                                            <vs-radio color="rgb(40, 199, 111)" vs-value="green" v-model="productColor"></vs-radio>
                                        </div>
                                        <div>
                                            <vs-radio color="rgb(30, 30, 30)" vs-value="black" v-model="productColor"></vs-radio>
                                        </div>
                                    </vs-col>
                                </vs-row>
                                <vs-divider></vs-divider>
                                <!-- PRODUCT AVAILABILITY -->
                                <vs-row vs-type="flex">
                                    <vs-col vs-w="12">
                                        <p class="my-2">
                                            <span>Available</span>
                                            <span class="mx-2">-</span>
                                            <span class="text-success">In Stock</span>
                                        </p>
                                    </vs-col>
                                    <!-- PRODUCT BUY AND ADD TO CART BUTTONS -->
                                    <vs-col vs-w="12" class="mb-4">
                                        <vs-button class="mr-4">
                                            <vs-row class="px-4 pt-1">
                                                <vs-col vs-type="flex">
                                                    <vs-icon icon="shopping_cart" size="20px" class="mr-1"></vs-icon>VIEW IN CART
                                                </vs-col>
                                            </vs-row>
                                        </vs-button>
                                        <vs-button type="border" color="danger">
                                            <vs-row class="px-4 pt-1">
                                                <vs-icon icon="favorite" size="20px" class="mr-1"></vs-icon>WISHLIST
                                            </vs-row>
                                        </vs-button>
                                    </vs-col>
                                </vs-row>
                            </div>
                        </vs-col>
                    </vs-row>
                </div>

                <!-- PRODUCT FEATURES -->
                <div class="py-24 mb-16 mt-10 product-feature">
                    <vs-row vs-type="flex" vs-w="12" vs-justify="center">
                        <vs-col vs-type="flex" vs-w="4">
                            <div class="mx-auto">
                                <vs-icon icon="bookmark_border" size="large" class="mb-3"></vs-icon>
                                <span>
                                    <h6 class="font-weight-bold">100% Original</h6>
                                </span>
                                <span>
                                    <p>Chocolate bar candy canes ice cream toffee cookie halvah.</p>
                                </span>
                            </div>
                        </vs-col>
                        <vs-col vs-type="flex" vs-w="4">
                            <div class="mx-auto">
                                <vs-icon icon="bookmark_border" size="large" class="mb-3"></vs-icon>
                                <span>
                                    <h6 class="font-weight-bold">100% Original</h6>
                                </span>
                                <span>
                                    <p>Chocolate bar candy canes ice cream toffee cookie halvah.</p>
                                </span>
                            </div>
                        </vs-col>
                        <vs-col vs-type="flex" vs-w="4">
                            <div class="mx-auto">
                                <vs-icon icon="bookmark_border" size="large" class="mb-3"></vs-icon>
                                <span>
                                    <h6 class="font-weight-bold">100% Original</h6>
                                </span>
                                <span>
                                    <p>Chocolate bar candy canes ice cream toffee cookie halvah.</p>
                                </span>
                            </div>
                        </vs-col>
                    </vs-row>
                </div>

                <!-- RELATED PRODUCTS -->
                <div class="related-products px-5">
                    <div class="related-headings mb-5">
                        <h2 class="text-uppercase">Related Products</h2>
                        <p>People also search for this item</p>
                    </div>
                </div>
            </div>
        </vs-card>
    </vs-col>
</vs-row>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            product: {},
            productOwnerName: "",
            productColor: "red"
        };
    },
    mounted() {
        axios
            .get(`http://localhost:3000/api/products/${this.$route.params.id}`)
            .then(response => {
                this.product = response.data.product;
                axios
                    .get(`http://localhost:3000/api/owners/${this.product.ownerID}`)
                    .then(response => {
                        this.productOwnerName = response.data.owner.name;
                    })
                    .catch(err => {
                        console.log(err.message);
                    });
            })
            .catch(err => {
                console.log(err.message);
            });
    }
};
</script>

<style scoped>
.text-2xl {
    font-size: 1.25rem !important;
}

.text-xl {
    font-size: 1.1rem !important;
}

.text-md {
    font-size: 1rem !important;
}

.card-content {
    margin-top: 1.5rem !important;
}

.product-feature {
    background-color: #f7f7f7;
}

.py-24 {
    padding-top: 6rem !important;
    padding-bottom: 6rem !important;
}

.mb-16 {
    margin-bottom: 4rem !important;
}

.mt-10 {
    margin-top: 2.5rem !important;
}
</style>
