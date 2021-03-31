function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { Component } from 'react';
import QueryString from 'query-string';

var LinkedInPopUp = function (_Component) {
  _inherits(LinkedInPopUp, _Component);

  function LinkedInPopUp() {
    _classCallCheck(this, LinkedInPopUp);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  LinkedInPopUp.prototype.componentDidMount = function componentDidMount() {
    var params = QueryString.parse(window.location.search);
    if (params.error) {
      var errorMessage = params.error_description || 'Login failed. Please try again.';
      window.opener && window.opener.postMessage({ error: params.error, state: params.state, errorMessage: errorMessage, from: 'Linked In' }, window.location.origin);
      // Close tab if user cancelled login
      if (params.error === 'user_cancelled_login') {
        window.close();
      }
    }
    if (params.code) {
      window.opener && window.opener.postMessage({ code: params.code, state: params.state, from: 'Linked In' }, window.location.origin);
    }
    if (params.linkedin_redirect_url) {
      window.location.href = params.linkedin_redirect_url;
    }
  };

  LinkedInPopUp.prototype.render = function render() {
    return null;
  };

  return LinkedInPopUp;
}(Component);

export default LinkedInPopUp;