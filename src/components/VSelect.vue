<template>
    <div class="vh-margin">
        <label class="vh-form-label" v-if="label">{{ label }}</label>
        <div class="vh-form-controls">
            <select
                class="vh-select"
                :class="classes"
                v-on="listeners"
                v-bind="$attrs">
                <option selected disabled>-- Select a Option--</option>
                <option v-for="option in options" :value="option.value">{{ option.label }}</option>
            </select>
            <small class="vh-text-danger" v-if="error">{{ error }}</small>
        </div>
    </div>
</template>

<style lang="scss">
    @import '../styles/app';
</style>

<script>
// Mixins

import {sharedComputed} from '../mixins/VInput';

export default {
    name: 'VSelect',

    mixins: [sharedComputed],

    props:
    {
        error:
        {
            type: String,
            default: null
        },

        label:
        {
            type: String,
            default: null
        },

        options:
        {
            type: Array,
            default: null
        },

        success:
        {
            type: Boolean,
            default: null
        }
    }
}
</script>