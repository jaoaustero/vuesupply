<template>
    <div class="vh-margin">
        <label :for="id" v-if="label">{{ label }}</label>
        <textarea
            class="vh-textarea"
            v-bind="$attrs">

        </textarea>
        <small class="v-form-danger" v-if="error">{{ error }}</small>
    </div>
</template>

<script>
// Mixins
import {sharedProps, sharedComputed} from '../mixins/VInput';

export default {
    name: 'VTextarea',

    mixins: [sharedProps, sharedComputed]
}
</script>