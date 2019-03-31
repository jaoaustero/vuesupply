import {joinClass} from '../utils/class';

export const sharedProps = {
    props:
    {
        error:
        {
            type: String,
            default: null
        },

        label:
        {
            type: String,
            default: null
        },

        size:
        {
            type: String,
            default: null // 'large', 'small'
        },

        success:
        {
            type: Boolean,
            default: false
        },

        width:
        {
            type: String,
            default: null // 'xsmall' 'small', 'medium', 'large'
        }
        
    }
}

export const sharedIconProps = {
    props:
    {
        icon:
        {
            type: String,
            default: null // 'line-awesome icon'
        },

        iconFlip:
        {
            type: Boolean,
            defualt: false
        }
    }
}

export const sharedComputed = {
    computed:
    {
        listeners: function()
        {
            var vm = this;

            return Object.assign({},
                this.$listeners,
                
                {
                    input: event =>
                        vm.$emit('input', event.target.value)
                }
            )
        },

        classes: function()
        {
            return joinClass(
                this.error      && 'vh-form-danger',
                this.success    && 'vh-form-success',
                this.size       && `vh-form-${this.size}`,
                this.width      && `vh-form-width-${this.width}`
            )
        }
    }
}