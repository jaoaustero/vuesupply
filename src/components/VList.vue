<template>
    <ul
        class="vh-list"
        :class="classes">
        <slot></slot>
    </ul>
</template>

<script>
// Uitlities
import {joinClass} from '../utils/class';

export default {
    name: 'VList',

    props:
    {
        bullet:
        {
            type: Boolean,
            default: false,
        },

        divider:
        {
            type: Boolean,
            default: false
        },

        large:
        {
            type: Boolean,
            default: false
        },

        striped:
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
                this.bullet     && 'vh-list-bullet',
                this.divider    && 'vh-list-divider',
                this.large      && 'vh-list-large',
                this.striped    && 'vh-list-striped'
            )
        }
    }
}
</script>