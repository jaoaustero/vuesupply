<template>
    <div class="vh-margin">
        <label class="vh-form-label" v-if="label">{{ label }}</label>
        <div :class="icon ? 'vh-inline' : 'vh-form-controls'">
            <i
                class="vh-form-icon fa fa-lg"
                :class="iconClasses"
                v-if="icon != null">
            </i>
            <input
                class="vh-input"
                :class="classes"
                v-on="listeners"
                v-bind="$attrs">
            <small class="vh-text-danger" v-if="error">{{ error }}</small>
        </div>
    </div>
</template>


<script>
// Mixins
import {sharedProps, sharedComputed, sharedIconProps} from '../mixins/VInput';

// Utils
import {joinClass} from '../utils/class';

export default {
    name: 'VInput',
    
    inheritAttrs: false,

    mixins: [sharedProps, sharedIconProps, sharedComputed],

    computed:
    {
        iconClasses: function()
        {
            return joinClass(
                this.icon       && `fa-${this.icon}`,
                this.iconFlip   && 'vh-form-icon-flip'
            )
        }
    }
}
</script>