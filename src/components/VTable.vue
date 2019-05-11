<template>
    <table
        class="vh-table"
        :class="classes">
        
        <caption v-if="caption">{{ caption }}</caption>

        <slot name="thead"></slot>

        <slot name="tbody"></slot>

        <slot name="tfoot"></slot>

    </table>
</template>

<script>
// Utilities
import {joinClass} from '../utils/class';

export default {
    name: 'VTable',

    props:
    {
        caption:
        {
            type: String,
            default: null
        },

        divider:
        {
            type: Boolean,
            default: false
        },

        hover:
        {
            type: Boolean,
            default: false
        },

        justify:
        {
            type: Boolean,
            default: false
        },

        middle:
        {
            type: Boolean,
            default: false
        },

        responsive:
        {
            type: Boolean,
            default: false
        },

        small:
        {
            type: Boolean,
            default: false,
        },

        striped:
        {
            type: Boolean,
            default: false,
        }
    },

    computed:
    {
        classes: function()
        {
            return joinClass(
                this.divider        && 'vh-table-divider',
                this.hover          && 'vh-table-hover',
                this.justify        && 'vh-table-justify',
                this.middle         && 'vh-table-middle',
                this.responsive     && 'vh-table-responsive',
                this.small          && 'vh-table-small',
                this.striped        && 'vh-table-striped'
            )
        }
    }
}
</script>