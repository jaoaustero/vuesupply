<template>
    <button
        class="vh-button"
        :class="setColor"
        >
        <slot></slot>
    </button>
</template>

<style lang="scss">
    @import '@/styles/app';,
</style>

<script>
export default {
    name: 'VButton',

    props:
    {
        color:
        {
            type: String,
            default: 'default'
        }
    },

    computed:
    {
        setColor: function()
        {
            return 'vh-button-' + this.color;
        }
    }
}
</script>