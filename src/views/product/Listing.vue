<template>
<b-container>
    <h1>All Products</h1>
    <b-row>
        <b-col class="pb-2 mt-3" v-for="modal in modalProps" :key="modal.modalID">
            <b-button pill class="pb-2" @click="$bvModal.show(modal.modalID)" variant="dark">{{ modal.buttonName }}</b-button>
        </b-col>
    </b-row>

    <AddProduct title="Add a new Product" submitButtonName="Add Product"></AddProduct>
    <AddCategory></AddCategory>
    <AddOwner></AddOwner>

    <div>
        <b-row>
            <b-col class="mt-5" xl="3" lg="2" md="3" sm="6" v-for="product in products" :key="product._id">
                <b-card>
                    <b-link :to="`/products/${product._id}`">
                        <b-img :src="'http://localhost:3000/'+product.photo" fluid rounded></b-img>
                        <div>
                            <span class="font-weight-bold">{{ product.title }}</span>
                        </div>
                        <div class="a-row">
                            <a href="#">
                                <b-icon icon="star"></b-icon>
                                <b-icon icon="star"></b-icon>
                                <b-icon icon="star"></b-icon>
                                <b-icon icon="star"></b-icon>
                                <b-icon icon="star"></b-icon>
                            </a>
                            <span>
                                &nbsp;
                                <b-icon icon="chevron-down" scale="0.5"></b-icon>1732
                            </span>
                        </div>
                        <div>
                            <span>Rs. {{ product.price }}</span>
                        </div>
                        <b-row>
                            <b-col class="pb-2">
                                <b-button :to="`/products/${product._id}`" size="sm" variant="success">Update</b-button>
                            </b-col>
                            <b-col class="pb-2">
                                <b-button size="sm" variant="danger">Delete</b-button>
                            </b-col>
                        </b-row>
                    </b-link>
                </b-card>
            </b-col>
        </b-row>
    </div>
</b-container>
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
