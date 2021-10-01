<template>
    <money3 v-model="viewModel" v-bind="config"></money3> {{ viewModel }}
</template>

<script>
import { Money3Component } from "v-money3";
import { ref, watch } from "vue";

export default {
    components: { money3: Money3Component },
    props: {
        ViewModel: {
            type: [String, Number],
            required: false,
            default: 0,
        },
    },
    //emits: ["teste"],
    setup(props, context) {
        let viewModel = ref(props.ViewModel);

        watch(props, () => {
            console.log("vMOdel mudou", viewModel.value);
            context.emit("teste", viewModel.value)
           
        });
        return {
            viewModel,

            config: {
                masked: false,
                prefix: "",
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
        };
    },
};
</script>