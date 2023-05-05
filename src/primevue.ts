import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import AutoComplete from 'primevue/autocomplete';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import Badge from 'primevue/badge';
import BadgeDirective from 'primevue/badgedirective';
import BlockUI from 'primevue/blockui';
import Breadcrumb from 'primevue/breadcrumb';
import Button from 'primevue/button'
import Calendar from 'primevue/calendar';
import Card from 'primevue/card';
import Carousel from 'primevue/carousel';
import CascadeSelect from 'primevue/cascadeselect';
import Checkbox from 'primevue/checkbox'
import Chip from 'primevue/chip';
import Chips from 'primevue/chips';
import ColorPicker from 'primevue/colorpicker';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import ConfirmationService from 'primevue/confirmationservice';
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmPopup from 'primevue/confirmpopup';
import ContextMenu from 'primevue/contextmenu';
import DataTable from 'primevue/datatable';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
import DeferredContent from 'primevue/deferredcontent';
import Dialog from 'primevue/dialog';
import DialogService from 'primevue/dialogservice'
import Divider from 'primevue/divider';
import Dock from 'primevue/dock';
import Dropdown from 'primevue/dropdown';
import DynamicDialog from 'primevue/dynamicdialog';
import Fieldset from 'primevue/fieldset';
import FileUpload from 'primevue/fileupload';
import FocusTrap from 'primevue/focustrap';
import Galleria from 'primevue/galleria';
import Image from 'primevue/image';
import InlineMessage from 'primevue/inlinemessage';
import Inplace from 'primevue/inplace';
import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';
import InputSwitch from 'primevue/inputswitch';
import InputText from 'primevue/inputtext'
import Knob from 'primevue/knob';
import Listbox from 'primevue/listbox';
import MegaMenu from 'primevue/megamenu';
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import Message from 'primevue/message';
import MultiSelect from 'primevue/multiselect';
import OrderList from 'primevue/orderlist';
import OrganizationChart from 'primevue/organizationchart';
import OverlayPanel from 'primevue/overlaypanel';
import Paginator from 'primevue/paginator';
import Panel from 'primevue/panel';
import PanelMenu from 'primevue/panelmenu';
import Password from 'primevue/password';
import PickList from 'primevue/picklist';
import ProgressBar from 'primevue/progressbar';
import ProgressSpinner from 'primevue/progressspinner';
import RadioButton from 'primevue/radiobutton';
import Rating from 'primevue/rating';
import Ripple from 'primevue/ripple';
import Row from 'primevue/row';
import ScrollPanel from 'primevue/scrollpanel';
import ScrollTop from 'primevue/scrolltop';
import SelectButton from 'primevue/selectbutton';
import Sidebar from 'primevue/sidebar';
import Skeleton from 'primevue/skeleton';
import Slider from 'primevue/slider';
import SpeedDial from 'primevue/speeddial';
import SplitButton from 'primevue/splitbutton';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Steps from 'primevue/steps';
import StyleClass from 'primevue/styleclass';
import TabMenu from 'primevue/tabmenu';
import TabPanel from 'primevue/tabpanel';
import TabView from 'primevue/tabview';
import Tag from 'primevue/tag';
import Terminal from 'primevue/terminal';
import Textarea from 'primevue/textarea';
import TieredMenu from 'primevue/tieredmenu';
import Timeline from 'primevue/timeline';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import ToggleButton from 'primevue/togglebutton';
import Toolbar from 'primevue/toolbar';
import Tooltip from 'primevue/tooltip';
import Tree from 'primevue/tree';
import TreeSelect from 'primevue/treeselect';
import TreeTable from 'primevue/treetable';
import TriStateCheckbox from 'primevue/tristatecheckbox';
import VirtualScroller from 'primevue/virtualscroller';
import type { App } from "vue";

export const installPrimeVue = (app: App) => {

    app.directive('badge', BadgeDirective);
    app.directive('ripple', Ripple);
    app.directive('styleclass', StyleClass);
    app.directive('tooltip', Tooltip);
    app.directive('focustrap', FocusTrap);

    app.use(ConfirmationService);
    app.use(ToastService);
    app.use(DialogService);

    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Accordion', Accordion);
    app.component('AccordionTab', AccordionTab);
    app.component('AutoComplete', AutoComplete);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Avatar', Avatar);
    app.component('AvatarGroup', AvatarGroup);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Badge', Badge);
    app.component('BlockUI', BlockUI);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Breadcrumb', Breadcrumb);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Button', Button);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Calendar', Calendar);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Card', Card);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Carousel', Carousel);
    app.component('CascadeSelect', CascadeSelect);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Checkbox', Checkbox);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Chip', Chip);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Chips', Chips);
    app.component('ColorPicker', ColorPicker);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Column', Column);
    app.component('ColumnGroup', ColumnGroup);
    app.component('ConfirmDialog', ConfirmDialog);
    app.component('ConfirmPopup', ConfirmPopup);
    app.component('ContextMenu', ContextMenu);
    app.component('DataTable', DataTable);
    app.component('DataView', DataView);
    app.component('DataViewLayoutOptions', DataViewLayoutOptions);
    app.component('DeferredContent', DeferredContent);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Dialog', Dialog);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Divider', Divider);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Dock', Dock);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Dropdown', Dropdown);
    app.component('DynamicDialog', DynamicDialog);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Fieldset', Fieldset);
    app.component('FileUpload', FileUpload);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Galleria', Galleria);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Image', Image);
    app.component('InlineMessage', InlineMessage);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Inplace', Inplace);
    app.component('InputMask', InputMask);
    app.component('InputNumber', InputNumber);
    app.component('InputSwitch', InputSwitch);
    app.component('InputText', InputText);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Knob', Knob);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Listbox', Listbox);
    app.component('MegaMenu', MegaMenu);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Menu', Menu);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Menubar', Menubar);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Message', Message);
    app.component('MultiSelect', MultiSelect);
    app.component('OrderList', OrderList);
    app.component('OrganizationChart', OrganizationChart);
    app.component('OverlayPanel', OverlayPanel);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Paginator', Paginator);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Panel', Panel);
    app.component('PanelMenu', PanelMenu);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Password', Password);
    app.component('PickList', PickList);
    app.component('ProgressBar', ProgressBar);
    app.component('ProgressSpinner', ProgressSpinner);
    app.component('RadioButton', RadioButton);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Rating', Rating);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Row', Row);
    app.component('SelectButton', SelectButton);
    app.component('ScrollPanel', ScrollPanel);
    app.component('ScrollTop', ScrollTop);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Slider', Slider);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Sidebar', Sidebar);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Skeleton', Skeleton);
    app.component('SpeedDial', SpeedDial);
    app.component('SplitButton', SplitButton);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Splitter', Splitter);
    app.component('SplitterPanel', SplitterPanel);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Steps', Steps);
    app.component('TabMenu', TabMenu);
    app.component('TabView', TabView);
    app.component('TabPanel', TabPanel);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Tag', Tag);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Textarea', Textarea);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Terminal', Terminal);
    app.component('TieredMenu', TieredMenu);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Timeline', Timeline);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Toast', Toast);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Toolbar', Toolbar);
    app.component('ToggleButton', ToggleButton);
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    app.component('Tree', Tree);
    app.component('TreeSelect', TreeSelect);
    app.component('TreeTable', TreeTable);
    app.component('TriStateCheckbox', TriStateCheckbox);
    app.component('VirtualScroller', VirtualScroller);
}