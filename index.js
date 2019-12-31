import XButton from './components/XButton';
import XCheckbox from './components/XCheckbox';
import XCheckboxGroup from './components/XCheckboxGroup';
import XIcon from './components/XIcon';
import XLabel from './components/XLabel';
import XNavigator from './components/XNavigator';
import XPicker from './components/XPicker';
import XProgress from './components/XProgress';
import XRadio from './components/XRadio';
import XRadioGroup from './components/XRadioGroup';
import XRichText from './components/XRichText';
import XScrollView from './components/XScrollView';
import XSlider from './components/XSlider';
import XSwiper from './components/XSwiper';
import XSwitch from './components/XSwitch';
import XWebview from './components/XWebview';


import Audio from './h5/components/Audio';
import ErrorBoundary from './h5/components/ErrorBoundary';
import Image from './h5/components/Image';
import Loading from './h5/components/Loading';
import Overlay from './h5/components/Overlay';
import PageWrapper from './h5/components/PageWrapper';
import Picker from './h5/components/Picker';
import PullDownLoading from './h5/components/PullDownLoading';
import RichText from './h5/components/RichText';
import ScrollView from './h5/components/ScrollView';
import Slider from './h5/components/Slider';
import Swiper from './h5/components/Swiper';
import SwiperItem from './h5/components/SwiperItem';
import TabBar from './h5/components/TabBar';
import Textarea from './h5/components/Textarea';
import TitleBar from './h5/components/TitleBar';


const externalComponents = {
    XButton,
    XCheckbox,
    XCheckboxGroup,
    XIcon,
    XLabel,
    XNavigator,
    XPicker,
    XProgress,
    XRadio,
    XRadioGroup,
    XRichText,
    XScrollView,
    XSlider,
    XSwiper,
    XSwitch,
    XWebview
};

const h5Components = {
    Audio,
    ErrorBoundary,
    Image,
    Loading,
    Overlay,
    PageWrapper,
    Picker,
    PullDownLoading,
    RichText,
    ScrollView,
    Slider,
    Swiper,
    SwiperItem,
    TabBar,
    Textarea,
    TitleBar
};

export default { ...externalComponents, ...h5Components };