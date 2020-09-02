<template>
<b-container>
    <vs-card>
        <div class="product-edit container mt-4" v-if="loaded">
            <vs-row vs-type="flex" vs-w="12">
                <vs-col vs-type="flex" vs-w="8" vs-justify="flex-start">
                    <img :src="'http://localhost:3000/'+product.photo" alt="Product images" />
                </vs-col>
                <vs-col vs-type="flex" vs-w="4" vs-align="flex-start" vs-justify="flex-start">
                    <div class="text-left">
                        <h3>{{ product.title }}</h3>
                        <h6>{{ product.description }}</h6>
                        <h6>Rs {{ product.price }}</h6>
                        <div class="image-buttons">
                            <vs-button class="mt-2 mb-2 mr-2">
                                <span class="m-4 text-uppercase">Add Image</span>
                            </vs-button>
                            <vs-button color="danger">
                                <span class="m-3 text-uppercase">Remove Image</span>
                            </vs-button>
                        </div>
                    </div>
                </vs-col>
            </vs-row>

            <ValidationObserver v-slot="{handleSubmit}">
                <b-form ref="form" @submit.prevent="handleSubmit(onSubmit)">
                    <vs-row class="mt-5" vs-w="12">
                        <vs-col vs-w="6" vs-type="flex">
                            <div class="text-left mr-2 w-full">
                                <validation-provider name="Title" rules="required" v-slot="{ valid, errors }">
                                    <b-form-group label="Title" label-for="title-input" invalid-feedback="Title is required">
                                        <b-form-input id="title-input" :state="errors[0] ? false : (valid ? true : null)" v-model="product.title"></b-form-input>
                                    </b-form-group>
                                </validation-provider>
                                <validation-provider name="Price" rules="required" v-slot="{ valid, errors }">
                                    <b-form-group label="Price" label-for="price-input" invalid-feedback="Price is required">
                                        <b-form-input id="price-input" :state="errors[0] ? false : (valid ? true : null)" v-model="product.price"></b-form-input>
                                    </b-form-group>
                                </validation-provider>
                                <validation-provider name="StockQuantity" rules="required" v-slot="{ valid, errors }">
                                    <b-form-group label="Stock quantity" label-for="stock-input" invalid-feedback="Stock quantity is required">
                                        <b-form-input id="stock-input" :state="errors[0] ? false : (valid ? true : null)" v-model="product.stockQuantity"></b-form-input>
                                    </b-form-group>
                                </validation-provider>
                            </div>
                        </vs-col>

                        <vs-col vs-w="6" vs-type="flex">
                            <div class="text-left ml-2 w-full">
                                <validation-provider name="Category" rules="required" v-slot="{ valid, errors }">
                                    <b-form-group label="Category" label-for="category-input" invalid-feedback="Category is required">
                                        <b-form-select v-model="product.categoryID" :state="errors[0] ? false : (valid ? true : null)" id="category-input">
                                            <b-form-select-option v-for="category in categories" :key="category._id" :value="category._id">{{ category.text }}</b-form-select-option>
                                        </b-form-select>
                                    </b-form-group>
                                </validation-provider>
                                <validation-provider name="Owner" rules="required" v-slot="{ valid, errors }">
                                    <b-form-group label="Owner" label-for="owner-input" invalid-feedback="Owner is required">
                                        <b-form-select v-model="product.ownerID" :state="errors[0] ? false : (valid ? true : null)" id="owner-input">
                                            <b-form-select-option v-for="owner in owners" :key="owner._id" :value="owner._id">{{ owner.name }}</b-form-select-option>
                                        </b-form-select>
                                    </b-form-group>
                                </validation-provider>
                                <validation-provider name="Description" rules="required" v-slot="{ valid, errors }">
                                    <b-form-group label="Description" label-for="description-input" invalid-feedback="Description is required">
                                        <b-form-textarea id="description-input" :state="errors[0] ? false : (valid ? true : null)" v-model="product.description"></b-form-textarea>
                                    </b-form-group>
                                </validation-provider>
                            </div>
                        </vs-col>
                    </vs-row>
                    <vs-row vs-type="flex" vs-w="12" vs-justify="flex-end" class="my-2">
                        <b-button variant="primary" type="submit" class="mr-2">Save changes</b-button>
                        <b-button variant="outline-warning" type="reset">Reset</b-button>
                    </vs-row>
                </b-form>
            </ValidationObserver>
        </div>
        <div v-else class="text-center m-3">
            <b-spinner></b-spinner>
        </div>
    </vs-card>
</b-container>
</template>

<script>
import axios from "axios";
import {
    ValidationProvider,
    ValidationObserver,
    extend
} from "vee-validate";

extend("required", {
    validate(value) {
        return {
            required: true,
            valid: ["", null, undefined].indexOf(value) === -1
        };
    }
});
export default {
    components: {
        ValidationObserver,
        ValidationProvider
    },
    data() {
        return {
            product: {},
            categories: {},
            owners: {},
            loaded: false
        };
    },
    methods: {
        onSubmit() {
            let data = new FormData();
            data.append("title", this.product.title);
            data.append("price", this.product.price);
            data.append("stockQuantity", this.product.stockQuantity);
            data.append("description", this.product.description);
            data.append("categoryID", this.product.categoryID);
            data.append("ownerID", this.product.ownerID);
            data.append("photo", this.product.photo);
            console.log(this.product.photo);
            axios
                .put(
                    `http://localhost:3000/api/products/${this.$route.params.id}`,
                    data
                )
                .then(response => {
                    console.log(response.data.updatedProduct);
                })
                .catch(err => {
                    console.log(err.message);
                });
        }
    },
    mounted() {
        axios
            .get(`http://localhost:3000/api/products/${this.$route.params.id}`)
            .then(response => {
                this.product = response.data.product;
            })
            .catch(err => {
                console.log(err.message);
            });

        axios
            .get(`http://localhost:3000/api/categories`)
            .then(response => {
                this.categories = response.data.categories;
            })
            .catch(err => {
                console.log(err.message);
            });

        axios
            .get(`http://localhost:3000/api/owners`)
            .then(response => {
                this.owners = response.data.owners;
                this.loaded = true;
            })
            .catch(err => {
                console.log(err.message);
            });
    }
};
</script>

<style scoped>
.w-full {
    width: 100% !important;
}
</style>
