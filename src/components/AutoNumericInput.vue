<template>
    <money3 v-model="valueInput" @blur="atualizaBlur" v-bind="config"></money3>
</template>

<script>
import { Money3Component } from "v-money3";
import { watch, ref } from "vue";

export default {
    components: { money3: Money3Component },
    props: {
        ViewModel: {
            type: [String, Number],
            required: false,
            default: 0,
        },
        atualizaTab: {
            type: Boolean,
            required: false,
            default: false,
        },
        config: {
            type: Object,
            required: true,
            default() {
                return {
                    masked: false,
                    prefix: "$", //$
                    suffix: "#", //#
                    thousands: ",",
                    decimal: ".",
                    precision: 2,
                    disableNegative: false,
                    disabled: false,
                    min: null,
                    max: null,
                    allowBlank: false,
                    minimumNumberOfCharacters: 0,
                };
            },
        },
    },
    emits: ["atualizarViewModel"],
    setup(props, context) {
        let valueInput = ref(0);

        const atualizaBlur = () => {
            if (props.atualizaTab) {
                context.emit("atualizarViewModel", valueInput.value);
            }
        };
        if (!props.atualizaTab) {
            watch(valueInput, () => {
                context.emit("atualizarViewModel", valueInput.value);
            });
        }
        watch(props, () => {
            valueInput.value = props.ViewModel;
        });
        return {
            valueInput,
            atualizaBlur,
        };
    },
};
</script>