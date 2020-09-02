<template>
<b-modal id="add-owner-modal" ref="modal" title="Add a new Owner" @show="resetModal" @hide="resetModal" hide-footer>
    <ValidationObserver v-slot="{ handleSubmit }">
        <b-form @submit.prevent="handleSubmit(onSubmit)">
            <!-- Name input -->
            <validation-provider name="Name" rules="required" v-slot="{ valid, errors }">
                <b-form-group label="Name" label-for="name-input" invalid-feedback="Name is required">
                    <b-form-input id="name-input" :state="errors[0] ? false : (valid ? true : null)" v-model="name"></b-form-input>
                </b-form-group>
            </validation-provider>

            <!-- About input -->
            <validation-provider name="About" rules="required" v-slot="{ valid, errors }">
                <b-form-group label="About" label-for="about-input" invalid-feedback="About is required">
                    <b-form-textarea id="about-input" :state="errors[0] ? false : (valid ? true : null)" size="default" placeholder="Describe about owner" v-model="about"></b-form-textarea>
                </b-form-group>
            </validation-provider>

            <!-- Photo input -->
            <validation-provider name="Photo" rules="required" v-slot="{ validate, errors }">
                <b-form-group label="Photo" label-for="photo-input" invalid-feedback="Photo is required">
                    <b-form-file placeholder="Choose a file or drop it here..." drop-placeholder="Drop file here..." :state="errors[0] ? false : (validate ? true : null)" @input="validate" v-model="selectedFile"></b-form-file>
                </b-form-group>
            </validation-provider>

            <!-- Buttons -->
            <b-button type="submit" variant="success">Add Owner</b-button>
            <b-button @click="closeModal" variant="light">Cancel</b-button>
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
        ValidationProvider,
        ValidationObserver
    },
    data() {
        return {
            name: "",
            about: "",
            selectedFile: null
        };
    },
    methods: {
        onSubmit() {
            let data = new FormData();
            data.append("name", this.name);
            data.append("about", this.about);
            data.append("photo", this.selectedFile);

            axios
                .post("http://localhost:3000/api/owners", data)
                .then(response => {
                    console.log(response);
                })
                .catch(err => {
                    console.log(err.message);
                });

            this.closeModal();
        },
        resetModal() {
            this.name = "";
            this.about = "";
            this.selectedFile = null;
        },
        closeModal() {
            this.$nextTick(() => {
                this.$bvModal.hide("add-owner-modal");
            });
        }
    }
};
</script>
