<template>
    <a
        class="vh-close"
        :class="inverse && 'vh-close-inverse'">
        <i class="fa fa-close fa-lg"></i>
    </a>
</template>

<style lang="scss">
    @import '../styles/app';
</style>

<script>
export default {
    name: 'VClose',

    props:
    {
        inverse:
        {
            type: Boolean,
            default: false
        }
    }
}
</script>