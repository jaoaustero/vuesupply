<template>
    <div
        class="vh-container"
        :class="size != null && `vh-container-${size}`">
        <slot></slot>
    </div>
</template>

<style lang="scss">
    @import '../styles/app';
</style>

<script>
export default {
    name: 'VContainer',

    props:
    {
        size:
        {
            type: String,
            default: null // 'small', 'large', 'expand'
        }
    }
}
</script>