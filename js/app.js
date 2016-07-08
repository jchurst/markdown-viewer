'use strict';

var Main = React.createClass({
  displayName: 'Main',

  getInitialState: function getInitialState() {
    return {
      htmlObj: { '__html': '' }
    };
  },
  convert: function convert(e) {
    var newMarkdown = marked(e.target.value);
    this.setState({ htmlObj: { __html: newMarkdown } });
  },
  render: function render() {
    var htmlObj = this.state.htmlObj;

    return React.createElement('div', null, React.createElement('textarea', { id: 'editor', placeholder: '# Type Code Here - HTML code here will render as normal content in area to the right', onChange: this.convert }), React.createElement('div', { id: 'preview', dangerouslySetInnerHTML: htmlObj }));
  }
});

var App = React.createClass({
  displayName: 'app',

  render: function render() {
    return React.createElement('div', null, React.createElement(Main, null));
  }
});

ReactDOM.render(React.createElement(App, null), document.querySelector('#App'));
