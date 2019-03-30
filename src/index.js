import VhBadge      from './components/VBadge';
import VhButton     from './components/VButton';
import VhCard       from './components/VCard';
import VhCheckbox   from './components/VhCheckbox';
import VhClose      from './components/VClose';
import VhContainer  from './components/VContainer';
import VhDataList   from './components/VContainer';
import VhFieldset   from './components/VFieldset';
import VhForm       from './components/VForm';
import VhInput      from './components/VInput';
import VhLabel      from './components/VLabel';
import VhList       from './components/VList';
import VhRadio      from './components/VRadio';
import VhSelect     from './components/VSelect';
import VhTable      from './components/VTable';
import VhTextarea   from './components/VTextarea';


// Automatically install Keen UI if Vue is available globally
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueSupply, window.VueSupplyConfig);
}

export {
    VhBadge,
    VhButton,
    VhCard,
    VhCheckbox,
    VhClose,
    VhContainer,
    VhDataList,
    VhFieldset,
    VhForm,
    VhInput,
    VhLabel,
    VhList,
    VhRadio,
    VhSelect,
    VhTable,
    VhTextarea
}
