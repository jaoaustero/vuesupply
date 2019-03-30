<template>
    <div
        class="vh-card"
        :class="classes">

        <div
            v-if="hasHeaderSlot"
            :class="'vh-card-header'">
            <slot
                v-if="hasHeaderSlot"
                name="header">
            </slot>
        </div>

        <div
            v-if="hasMediaTop"
            class="vh-card-media-bottom">
            <slot name="mediaTop"></slot>
        </div>

        <div class="vh-card-body">
            <slot></slot>
        </div>

        <div
            v-if="hasMediaBottom"
            class="vh-card-media-bottom'">
            <slot name="mediaBottom"></slot>
        </div>

        <div class="vh-card-footer" v-if="hasFooterSlot">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<style lang="scss">
    @import '../styles/app';
</style>

<script>
import {joinClass} from '../utils/class';

export default {
    name: 'VCard',

    props:
    {
        color:
        {
            type: String,
            default: null // 'default', 'secondary', 'secondary'
        },

        hover:
        {
            type: Boolean,
            default: false
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
                this.color      && `vh-card-${this.color}`,
                this.hover      && 'vh-card-hover',
                this.size       && `vh-card-${this.size}`
            )
        },

        hasHeaderSlot: function()
        {
            return this.$slots.header
        },

        hasFooterSlot: function()
        {
            return this.$slots.footer
        },

        hasMediaTop: function()
        {
            return this.$slots.mediaTop
        },

        hasMediaBottom: function()
        {
            return this.$slots.mediaBottom
        },
    }
}
</script>