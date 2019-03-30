<template>
    <label>
        <input
            class="vh-radio"
            type="radio"
            v-on="listeners"
            v-bind="$attrs">

        {{ label }}
    </label>
</template>

<style lang="scss">
    @import '../styles/app';
</style>

<script>
// Mixins
import {sharedComputed} from '../mixins/VInput';

export default {
    name: 'VCheckbox',

    inheritAttrs: false,

    mixins: [sharedComputed],

    props:
    {
        label:
        {
            type: String,
            default: null
        }
    }
}
</script>