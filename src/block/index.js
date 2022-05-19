import App from './Components/App';
import blockSettings from './settings';

wp.blocks.registerBlockType('bonasoft-modular/bona-mbp-news', {
  ...blockSettings,
  edit({ attributes, setAttributes }) {
    return <App attributes={attributes} setAttributes={setAttributes} />;
  },
  save() {
    return null;
  },
});
