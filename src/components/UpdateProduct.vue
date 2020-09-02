<template>
<b-jumbotron>
    <ValidationObserver v-slot="{ handleSubmit }">
        <b-form ref="form" @submit.prevent="handleSubmit(onSubmit)">
            <!-- Category Dropdown -->
            <validation-provider name="Category" rules="required" v-slot="{ valid, errors }">
                <b-form-group label="Category" label-for="category-input" invalid-feedback="Category is required" label-cols-sm="4" label-cols-lg="4">
                    <b-form-select v-model="categoryID" :state="errors[0] ? false : (valid ? true : null)" id="category-input">
                        <b-form-select-option v-for="category in categoryOptions" :key="category._id" :value="category._id">{{ category.text }}</b-form-select-option>
                    </b-form-select>
                </b-form-group>
            </validation-provider>

            <!-- Owner Dropdown -->
            <validation-provider name="Owner" rules="required" v-slot="{ valid, errors }">
                <b-form-group label="Owner" label-for="owner-input" invalid-feedback="Owner is required" label-cols-sm="4" label-cols-lg="4">
                    <b-form-select v-model="ownerID" :state="errors[0] ? false : (valid ? true : null)" id="owner-input">
                        <b-form-select-option v-for="owner in ownerOptions" :key="owner._id" :value="owner._id">{{ owner.name }}</b-form-select-option>
                    </b-form-select>
                </b-form-group>
            </validation-provider>

            <!-- Title input -->
            <validation-provider name="Title" rules="required" v-slot="{ valid, errors }">
                <b-form-group label="Title" label-for="title-input" invalid-feedback="Title is required" label-cols-sm="4" label-cols-lg="4">
                    <b-form-input id="title-input" :state="errors[0] ? false : (valid ? true : null)" v-model="productTitle"></b-form-input>
                </b-form-group>
            </validation-provider>

            <!-- Price input -->
            <validation-provider name="Price" rules="required" v-slot="{ valid, errors }">
                <b-form-group label="Price" label-for="price-input" invalid-feedback="Price is required" label-cols-sm="4" label-cols-lg="4">
                    <b-form-input id="price-input" :state="errors[0] ? false : (valid ? true : null)" v-model="price"></b-form-input>
                </b-form-group>
            </validation-provider>

            <!-- StockQuantity input -->
            <validation-provider name="StockQuantity" rules="required" v-slot="{ valid, errors }">
                <b-form-group label="Stock quantity" label-for="stock-input" invalid-feedback="Stock quantity is required" label-cols-sm="4" label-cols-lg="4">
                    <b-form-input id="stock-input" :state="errors[0] ? false : (valid ? true : null)" v-model="stockQuantity"></b-form-input>
                </b-form-group>
            </validation-provider>

            <!-- Description textarea -->
            <validation-provider name="Description" rules="required" v-slot="{ valid, errors }">
                <b-form-group label="Description" label-for="description-input" invalid-feedback="Description is required" label-cols-sm="4" label-cols-lg="4">
                    <b-form-textarea id="description-input" size="default" :state="errors[0] ? false : (valid ? true : null)" v-model="description"></b-form-textarea>
                </b-form-group>
            </validation-provider>

            <!-- Photo file -->
            <validation-provider name="Photo" rules="required|image" v-slot="{ validate, errors }">
                <b-form-group label="Photo" label-for="photo-input" invalid-feedback="Photo is required" label-cols-sm="4" label-cols-lg="4">
                    <b-form-file placeholder="Choose a file or drop it here..." drop-placeholder="Drop file here..." :state="errors[0] ? false : (validate ? true : null)" @input="validate" v-model="selectedFile"></b-form-file>
                </b-form-group>
            </validation-provider>

            <b-button type="submit" variant="success">Update</b-button>
            <b-button variant="light" @click="closeModal">Cancel</b-button>
        </b-form>
    </ValidationObserver>
</b-jumbotron>
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
    },
    computesRequired: true
});
extend("image", {
    validate(value) {
        return {
            required: true,
            valid: ["", null, undefined].indexOf(value) === -1
        };
    },
    computesRequired: true
});
export default {
    name: "AddProduct",
    components: {
        ValidationProvider,
        ValidationObserver
    },
    data() {
        return {
            categoryID: null,
            ownerID: null,
            productTitle: "",
            price: "",
            stockQuantity: "",
            description: "",
            selectedFile: null,
            categoryOptions: [{
                text: "Select an option",
                _id: null
            }],
            ownerOptions: [{
                name: "Select an option",
                _id: null
            }],
            productInfo: null
        };
    },
    methods: {
        onSubmit() {
            let data = new FormData();
            data.append("title", this.productTitle);
            data.append("price", this.price);
            data.append("description", this.description);
            data.append("ownerID", this.ownerID);
            data.append("stockQuantity", this.stockQuantity);
            data.append("categoryID", this.categoryID);
            data.append("photo", this.selectedFile);

            this.closeModal();
        },
        resetModal() {
            this.categoryID = null;
            this.ownerID = null;
            this.productTitle = "";
            this.price = "";
            this.stockQuantity = "";
            this.description = "";
            this.photo = [];
            this.selectedFile = null;
        },
        closeModal() {
            this.$nextTick(() => {
                this.$bvModal.hide("update-product-modal");
            });
        }
    },
    mounted() {
        axios
            .get("http://localhost:3000/api/categories")
            .then(response => {
                const categories = response.data.categories;
                categories.forEach(category => {
                    this.categoryOptions.push(category);
                });
            })
            .catch(err => {
                console.log(err.message);
            });

        axios
            .get("http://localhost:3000/api/owners")
            .then(response => {
                const owners = response.data.owners;
                owners.forEach(owner => {
                    this.ownerOptions.push(owner);
                });
            })
            .catch(err => {
                console.log(err.message);
            });

        axios
            .get(`http://localhost:3000/api/products/${this.$route.params.id}`)
            .then(response => {
                this.productInfo = response.data.product;
            })
            .catch(err => {
                console.log(err.message);
            });
    }
};
</script>
