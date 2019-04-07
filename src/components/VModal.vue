<template>
    <div
        class="uis-modal"
        :class="classes">

        <div
            class="uis-modal-dialog">
            <div class="uis-modal-header">
                <slot name="header"></slot>
            </div>
            <div class="uis-modal-body">
                <slot></slot>
            </div>
            <div class="uis-modal-footer">
                <slot name="footer"></slot>
            </div>
        </div>

    </div>
</template>

<script>
import {joinClass} from '../utils/class';

export default {
    name: 'VModal',

    props:
    {
        size:
        {
            type: String,
            default: null // 'container', 'full'
        },

        title:
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
                this.size       && `vh-modal-${this.size}`
            )
        }
    }
}
</script>