<template>
    <div class="vh-margin">
        <label class="vh-form-label" v-if="label">{{ label }}</label>
        <input
            class="vh-input"
            :class="classes"
            :list="list"
            v-on="listeners"
            v-bind="$attrs">
        <small class="vh-text-danger" v-if="error">{{ error }}</small>

        <datalist :id="list">
            <option v-for="value in values" :value="value" />
        </datalist>
    </div>
</template>

<script>
// Mixins
import {sharedProps, sharedComputed, classes} from '../mixins/VInput';

export default {
    name: 'VDataList',

    mixins: [sharedProps, sharedComputed],

    props:
    {
        list:
        {
            type: String,
            default: null
        },

        values:
        {
            type: Array,
            default: null
        }
    }
}
</script>