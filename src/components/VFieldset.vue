<template>
    <fieldset class="vh-fieldset">
        <legend class="vh-legend" v-if="legend != null">{{ legend }}</legend>
        <slot></slot>
    </fieldset>
</template>

<style lang="scss">
    @import '../styles/app';
</style>

<script>
export default {
    name: 'VFieldset',

    props:
    {
        legend:{
            type: String,
            default: null
        }
    }
}
</script>