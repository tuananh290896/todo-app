import * as Constants from '@constants';

let consts = {}; // As suggested by the comments.

consts.install = function (Vue, options) {
  Vue.prototype.$get_const = (key) => {
    return Constants[key]
  }
}

export default consts