import Theme from 'vitepress/theme';
import Layout from './Layout.vue';

// @ts-ignore
import './styles/var.css';
// @ts-ignore
import './styles/rainbow.css';

export default {
  extends: Theme,
  Layout,
};
