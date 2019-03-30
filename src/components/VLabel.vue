<template>
    <div
        class="vh-label"
        :class="classes">
        <slot></slot>
    </div>
</template>

<style lang="scss">
    @import '../styles/app';
</style>

<script>
// Utilities
import {joinClass} from '../utils/class';

export default {
    name: 'VLabel',

    props:
    {
        color:
        {
            type: String,
            default: 'primary' // 'primary', 'secondary', 'success', 'warning', 'danger'
        },

        large:
        {
            type: Boolean,
            default: false
        }
    },

    computed:
    {
        classes: function()
        {
            return joinClass(
                this.color      && `vh-label-${this.color}`,
                this.large      && `vh-label-large`
            )
        }
    }
}
</script>