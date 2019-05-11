import { shallowMount, mount } from '@vue/test-utils'
import VContainer from '@/components/VContainer.vue'
import { exportAllDeclaration } from '@babel/types';

// describe('VContainer', () => {
//     it('renders prop.size when passed', () => {
//         const size = 'large';
//         const wrapper = shallowMount(VContainer, {
//             propsData: { size }
//         })
//         expect(wrapper.text()).toBe('default')
//     })

//     it('renders default message if not passed a prop', () => {
//         const defaultSize = 'default'
//         const wrapper = shallowMount(VContainer)
//         expect(wrapper.text()).toBe('asd')
//     })
// });

// describe('Counter.vue', () => {
//     test('setup correctly', () => {
//         expect(true).toBe(true)
//     })
// })

describe('VContainer.vue', () => {
    test('it should have default class of `vh-container`', () => {
        const wrapper = mount(VContainer)

        expect(wrapper.classes()).toContain('vh-container')
        expect(wrapper.classes('vh-container')).toBe(true)
    })
})