<template>
<div class="container-fluid">
    <h1>All Products</h1>
    <vs-row vs-w="12">
        <vs-col class="pb-2 my-3" v-for="modal in modalProps" :key="modal.modalID" vs-w="4">
            <b-button pill class="pb-2" @click="$bvModal.show(modal.modalID)" variant="dark">{{ modal.buttonName }}</b-button>
        </vs-col>
    </vs-row>

    <AddProduct title="Add a new Product" submitButtonName="Add Product"></AddProduct>
    <AddCategory></AddCategory>
    <AddOwner></AddOwner>

    <div class="container-fluid">
        <vs-row class="match-height" vs-w="12" vs-type="flex">
            <vs-col v-for="product in products" :key="product._id" vs-type="flex" vs-lg="4" vs-md="6" vs-sm="12" class="mb-base">
                <vs-card class="mb-base container" actionable>
                    <div slot="media" class="mb-4 h-64 bg-white items-center justify-center flex">
                        <b-img :src="'http://localhost:3000/' + product.photo" alt class="px-4 grid-view-img" />
                    </div>
                    <div class="item-details flex justify-between items-center">
                        <div class="text-warning border border-solid border-warning flex rounded py-1 px-2">
                            <span class="mr-1 text-sm">4</span>
                            <span>
                                <vs-icon icon="star_border" size="16px"></vs-icon>
                            </span>
                        </div>
                        <h6 class="font-weight-bold">Rs {{ product.price }}</h6>
                    </div>
                    <div class="my-4">
                        <h6 class="mb-1 font-semibold text-left truncate">{{ product.title }}</h6>
                        <p class="text-left text-sm truncate">{{ product.description }}</p>
                    </div>
                    <div class="flex-wrap">
                        <vs-button class="mb-2">
                            <span class="text-sm font-semibold py-2">WISHLIST</span>
                        </vs-button>
                        <vs-button>
                            <span class="text-sm font-semibold py-2">ADD TO CART</span>
                        </vs-button>
                    </div>
                </vs-card>
            </vs-col>
        </vs-row>
    </div>
</div>
</template>

<script>
import axios from "axios";
import AddProduct from "../components/AddNewProductModal";
import AddCategory from "../components/AddNewCategory";
import AddOwner from "../components/AddNewOwnerModal";
import UpdateProduct from "../components/UpdateProduct";
export default {
    name: "Product",
    data() {
        return {
            products: [],
            modalProps: [{
                    modalID: "add-product-modal",
                    buttonName: "Add a new Product"
                },
                {
                    modalID: "add-category-modal",
                    buttonName: "Add a new Category"
                },
                {
                    modalID: "add-owner-modal",
                    buttonName: "Add a new owner"
                }
            ]
        };
    },
    components: {
        AddProduct,
        AddCategory,
        AddOwner,
        UpdateProduct
    },
    methods: {
        showProductInfo(productID) {
            this.$router.push(`/products/${productID}`);
        }
    },
    mounted() {
        axios
            .get("http://localhost:3000/api/products")
            .then(res => {
                this.products = res.data.products;
            })
            .catch(err => console.log(err));
    }
};
</script>

<style scoped>
.container-fluid {
    position: relative !important;
}

.mb-base {
    margin-bottom: 2.2rem !important;
}

.vs-button {
    width: 100%;
}

button:focus {
    outline: 0px !important;
}

.vs-row>.vs-col {
    padding: 0 1rem;
}

.h-64 {
    height: 18rem !important;
}

.bg-white {
    background-color: #fff !important;
}

h6 {
    font-size: 14px !important;
}

.item-view-primary-action-btn {
    background-color: #f6f6f6;
    color: #2c2c2c !important;
    min-width: 50%;
}

.item-details {
    padding: 0px !important;
    font-size: 1rem !important;
    margin-bottom: 0px !important;
}
</style>
