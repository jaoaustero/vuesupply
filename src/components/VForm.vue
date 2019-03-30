<template>
    <form
        class="vh-form"
        :class="classes">
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