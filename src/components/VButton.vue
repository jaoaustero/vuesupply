<template>
    <div class="vh-inline" v-if="icon" @click="onClick">
        <div class="vh-button-icon"
            :class="'vh-button-icon-'+color">
            <i class="fa"
                :class="'fa-'+icon"></i>
        </div>
        <component
            class="vh-button"
            :class="classes"
            :disabled="disabled || loading"
            :href="isAnchor ? (disabled ? null : href) : null"
            :is="isAnchor ? 'a' : 'button'"
            style="text-indent: 20px;"
            >
            <slot v-if="!loading"></slot>
            <i v-else class="fa fa-spinner fa-lg vh-animate vh-animate-rotate vh-animate-infinite"></i>
        </component>
    </div>
    <component
        v-else
        class="vh-button"
        :class="classes"
        :disabled="disabled || loading"
        :href="isAnchor ? (disabled ? null : href) : null"
        :is="isAnchor ? 'a' : 'button'"
        @click="onClick"
        >
        <slot v-if="!loading"></slot>
        <i v-else class="fa fa-spinner fa-lg vh-animate vh-animate-rotate vh-animate-infinite"></i>
    </component>
</template>

<style lang="scss">
    @import '../styles/app';
</style>

<script>
import {joinClass} from '../utils/class';

export default {
    name: 'VButton',

    props:
    {
        color:
        {
            type: String,
            default: 'default' // 'default', 'primary', 'secondary', 'success', 'warning', 'danger'
        },

        disabled:
        {
            type: Boolean,
            default: false
        },

        href:
        {
            type: String,
            default: null
        },

        loading:
        {
            type: Boolean,
            default: false
        },

        link:
        {
            type: Boolean,
            default: false
        },

        outline:
        {
            type: Boolean,
            default: false
        },

        size:
        {
            type: String,
            default: null // 'small', 'large'
        },

        icon:
        {
            type: String,
            default: null
        }
    },

    computed:
    {
        classes: function()
        {
            return joinClass(
                this.link ? 'vh-button-link' :
                    this.outline ? `vh-button-outline-${this.color}` :
                        this.color && `vh-button-${this.color}`,
                this.size && `vh-button-${this.size}`,
            )
        },

        iconClasses: function()
        {
            return joinClass(
                this.icon       && `fa-${this.icon}`,
                this.color      && `vh-button-icon-${this.color}`
            )
        },

        isAnchor: function()
        {
            return this.href !== undefined && this.href !== null;
        }
    },

    methods:
    {
        onClick: function(e)
        {
            this.$emit('click', e);
        }
    }
}
</script>