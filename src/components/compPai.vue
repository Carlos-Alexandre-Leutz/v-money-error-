<template>
    <div>
        <div v-for="index in teste" :key="index">         
            <auto-numeric-input
                :ViewModel="ViewModel"
                :atualizaTab="true"
                :config="index"
                @atualizarViewModel="atualizarViewModel"
            ></auto-numeric-input> 
            type  a string in input
        </div>

    </div>
</template>
 
<script>
import AutoNumericInput from "./AutoNumericInput.vue";
import { ref } from "vue";
export default {
    components: {
        AutoNumericInput,
    },
    setup() {
        let ViewModel = ref(0);
        let teste = [
            {
                masked: false,
                prefix: "",
                suffix: "#",
                thousands: ",",
                decimal: ".",
                precision: 2,
                disableNegative: false,
                disabled: false,
                min: null,
                max: null,
                allowBlank: false,
                minimumNumberOfCharacters: 0,
            },
            {
                masked: false,
                prefix: "R$",
                suffix: "",
                thousands: ",",
                decimal: ".",
                precision: 2,
                disableNegative: false,
                disabled: false,
                min: null,
                max: null,
                allowBlank: false,
                minimumNumberOfCharacters: 0,
            },
            {
                masked: false,
                prefix: "",
                suffix: "%",
                thousands: ",",
                decimal: ".",
                precision: 2,
                disableNegative: false,
                disabled: false,
                min: null,
                max: null,
                allowBlank: false,
                minimumNumberOfCharacters: 0,
            },
            {
                masked: false,
                prefix: "",
                suffix: "º",
                thousands: ",",
                decimal: ".",
                precision: 2,
                disableNegative: false,
                disabled: false,
                min: null,
                max: null,
                allowBlank: false,
                minimumNumberOfCharacters: 0,
            },
        ];

        let config = ref({
            masked: false,
            prefix: "",
            suffix: "#",
            thousands: ",",
            decimal: ".",
            precision: 2,
            disableNegative: false,
            disabled: false,
            min: null,
            max: null,
            allowBlank: false,
            minimumNumberOfCharacters: 0,
        });
        const atualizarViewModel = (e) => {
            ViewModel.value = e;
        };
        return {
            ViewModel,
            atualizarViewModel,
            config,
            teste,
        };
    },
};
</script> 