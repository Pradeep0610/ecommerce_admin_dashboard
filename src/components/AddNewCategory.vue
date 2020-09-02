<template>
<b-modal id="add-category-modal" ref="modal" title="Add a new Category" @show="resetModal" @hide="resetModal" hide-footer>
    <ValidationObserver v-slot="{ handleSubmit }">
        <b-form ref="form" @submit.prevent="handleSubmit(onSubmit)">
            <!-- Category type input -->
            <validation-provider name="Type" rules="required" v-slot="{ valid, errors }">
                <b-form-group label="Type" label-for="category-type" invalid-feedback="Category type is required">
                    <b-form-input id="category-type" v-model="type" :state="errors[0] ? false : (valid ? true : null)"></b-form-input>
                </b-form-group>
            </validation-provider>

            <!-- Buttons -->
            <b-button type="submit" variant="success">Add Category</b-button>
            <b-button variant="light" @click="closeModal">Cancel</b-button>
        </b-form>
    </ValidationObserver>
</b-modal>
</template>

<script>
import {
    ValidationObserver,
    ValidationProvider,
    extend
} from "vee-validate";
import axios from "axios";
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
            type: ""
        };
    },
    methods: {
        onSubmit() {
            let data = {
                text: this.type
            };

            axios
                .post("http://localhost:3000/api/categories", data)
                .then(response => {
                    console.log(response);
                })
                .catch(err => {
                    console.log(err);
                });

            this.closeModal();
        },
        resetModal() {
            this.type = "";
        },
        closeModal() {
            this.$nextTick(() => {
                this.$bvModal.hide("add-category-modal");
            });
        }
    }
};
</script>
