var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Control from './Control';
import Message from '../constant/Message';

var AbstractMultiSelection = function (_Control) {
  _inherits(AbstractMultiSelection, _Control);

  function AbstractMultiSelection() {
    _classCallCheck(this, AbstractMultiSelection);

    return _possibleConstructorReturn(this, (AbstractMultiSelection.__proto__ || Object.getPrototypeOf(AbstractMultiSelection)).apply(this, arguments));
  }

  _createClass(AbstractMultiSelection, [{
    key: '_setDisabledItem',
    value: function _setDisabledItem(value, isDisabled) {
      if (!this._getState().items) {
        return;
      }
      var newItems = [].concat(_toConsumableArray(this._getState().items));
      newItems.forEach(function (item, i) {
        if (item.value === value) {
          newItems[i].isDisabled = isDisabled;
        }
      });
      this._setState({ items: newItems });
    }
  }, {
    key: '_setValue',
    value: function _setValue(value) {
      if (!this._getState().items) {
        return;
      }
      this._setState({ value: value });
    }
  }, {
    key: '_removeItem',
    value: function _removeItem(index) {

      if (isNaN(index) && !isFinite(index) || index === '') {
        throw new Error(Message.common.INVALID_ARGUMENT);
      }

      var items = this._getState().items;
      if (!items || !items[index]) {
        return;
      }

      var value = this._getState().value;
      if (value && items[index]) {
        value = value.filter(function (item) {
          return item !== items[index].value;
        });
        this._setState({ value: value });
      }

      items.splice(index, 1);
      this._setState({ items: items });
    }
  }]);

  return AbstractMultiSelection;
}(Control);

export default AbstractMultiSelection;