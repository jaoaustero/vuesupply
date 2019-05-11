<template>
    <label>
        <input
            class="vh-checkbox"
            type="checkbox"
            v-on="listeners"
            v-bind="$attrs">

        {{ label }}
    </label>
</template>


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