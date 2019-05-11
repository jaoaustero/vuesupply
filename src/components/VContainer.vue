<template>
    <div
        class="vh-container"
        :class="size != null && `vh-container-${size}`">
        <slot></slot>
    </div>
</template>

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