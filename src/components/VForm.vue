<template>
    <form
        class="vh-form"
        :class="classes"
        @submit.prevent="submit">
        <slot></slot>
    </form>
</template>

<style lang="scss">
    @import '../styles/app';
</style>

<script>
import {joinClass} from '../utils/class';

export default {
    name: 'VForm',

    props:
    {
        layout:
        {
            type: String,
            default: null // 'stacked', 'horizontal'
        },

        size:
        {
            type: String,
            default: null // 'small', 'large'
        },

        submit:
        {
            type: Function
        }
    },

    computed:
    {
        classes: function()
        {
            return joinClass(
                this.layout     && `vh-form-${this.layout}`,
                this.size       && `vh-form-${this.size}`
            )
        }
    }
}
</script>