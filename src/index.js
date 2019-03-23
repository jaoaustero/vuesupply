import VButton from '@/components/VButton';

Vue.component('VButton', VButton)

const VueSupply = {
    VButton
}

// Automatically install Keen UI if Vue is available globally
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueSupply, window.VueSupplyConfig);
}

export default VueSupply;

export {
    VButton
}