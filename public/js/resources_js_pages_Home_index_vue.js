(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Home_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/commons/ContentLoading.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/commons/ContentLoading.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'content-loading-comp',
  props: {
    count: {
      type: Number,
      "default": 3
    }
  },
  data: function data() {
    return {
      arrs: new Array(this.$props.count)
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Home/Form.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Home/Form.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/helper */ "./resources/js/utils/helper.js");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @repositories */ "./resources/js/repository/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var noteRepository = new _repositories__WEBPACK_IMPORTED_MODULE_1__.NoteRepository();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "home-form-comp",
  props: {
    onSuccess: Function
  },
  methods: {
    handleSubmit: function handleSubmit(e) {
      var _this = this;

      e.preventDefault();
      this.isLoading = true;
      var values = this.form.getFieldsValue();
      noteRepository.create(values).then(function (res) {
        _this.form.resetFields();

        _this.$props.onSuccess();

        _this.isLoading = false;
      })["catch"](function (err) {
        if (err.code == 422) {
          var errors = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.transformErrors)(err.message, values);

          _this.form.setFields(errors);
        }

        _this.isLoading = false;
      });
    }
  },
  data: function data() {
    return {
      isLoading: false,
      errors: {},
      form: this.$form.createForm(this, {})
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Home/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Home/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.scss */ "./resources/js/pages/Home/home.scss");
/* harmony import */ var _home_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form */ "./resources/js/pages/Home/Form.vue");
/* harmony import */ var _components_commons_ContentLoading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/commons/ContentLoading */ "./resources/js/components/commons/ContentLoading.vue");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @repositories */ "./resources/js/repository/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var noteRepository = new _repositories__WEBPACK_IMPORTED_MODULE_3__.NoteRepository();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'home-cmp',
  components: {
    Form: _Form__WEBPACK_IMPORTED_MODULE_1__.default,
    ContentLoading: _components_commons_ContentLoading__WEBPACK_IMPORTED_MODULE_2__.default
  },
  mounted: function mounted() {
    var _this$$route$query$pa = this.$route.query.page,
        page = _this$$route$query$pa === void 0 ? 1 : _this$$route$query$pa;
    this.getListNotes(page);
  },
  methods: {
    /* Get list notes base on page */
    getListNotes: function getListNotes(page) {
      var _this = this;

      this.isLoading = true;
      noteRepository.getList({
        page: page
      }).then(function (res) {
        var data = res.data;
        _this.notes = data.data;
        _this.pagination = {
          total: data.total,
          per_page: data.per_page,
          page: data.current_page
        };
        _this.isLoading = false;
      })["catch"](function (err) {
        _this.isLoading = false;
      });
    },

    /* Callback when create note success */
    onAddSuccess: function onAddSuccess() {
      this.$message.success('Create note success!', 3);
      this.getListNotes(this.pagination.page);
    },

    /* Method when change page */
    onChangePage: function onChangePage(page) {
      this.$router.push({
        path: '/',
        query: {
          page: page
        }
      });
    },

    /* Delete note when click btn */
    onDeleteNote: function onDeleteNote(id) {
      var _this2 = this;

      noteRepository.deleteNote(id).then(function (res) {
        _this2.$message.success(res.data, 3);

        _this2.getListNotes(_this2.pagination.page);
      });
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapState)("auth", ["payload"])),
  data: function data() {
    return {
      isLoading: true,
      notes: [],
      pagination: {}
    };
  },
  watch: {
    /* Listen change of url */
    $route: function $route(to) {
      var _to$query$page = to.query.page,
          page = _to$query$page === void 0 ? 1 : _to$query$page;
      this.getListNotes(page);
    }
  }
});

/***/ }),

/***/ "./resources/js/utils/helper.js":
/*!**************************************!*\
  !*** ./resources/js/utils/helper.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "transformErrors": () => (/* binding */ transformErrors),
/* harmony export */   "strRandom": () => (/* binding */ strRandom)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function transformErrors(errors, values) {
  var errs = {};
  errors = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isObject)(errors) ? errors : {};
  Object.keys(values).forEach(function (key) {
    var msg = errors.hasOwnProperty(key) ? [new Error(errors[key])] : null;
    errs = _objectSpread(_objectSpread({}, errs), {}, _defineProperty({}, key, {
      value: values[key],
      errors: msg
    }));
  });
  return errs;
}
var strRandom = function strRandom() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7;
  return Math.random().toString(36).substring(length);
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./resources/js/pages/Home/home.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./resources/js/pages/Home/home.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".bg-gray {\n  background: #020631;\n}\n\n.list {\n  max-width: 500px;\n  margin: auto;\n}\n.list-logo {\n  text-align: center;\n}\n.list-logo p {\n  color: #fff;\n  font-weight: 600;\n  font-size: 16px;\n  margin-top: 15px;\n}\n\n.ant-form-inline {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.ant-form-item {\n  margin-right: 0 !important;\n}\n.ant-form-item input {\n  height: 40px;\n  min-width: 250px;\n}\n\n.btn-submit {\n  height: 40px;\n  min-width: 46px;\n}\n\n.ant-btn-loading .plus-icon {\n  display: none;\n}\n\n.list-scroll {\n  margin-top: 2rem;\n}\n.list-scroll .list-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n  margin-bottom: 1rem;\n  border-bottom: 1px dashed #f5f5f5;\n  padding-bottom: 1rem;\n  color: #fff;\n}\n.list-scroll .list-item:last-child {\n  margin-bottom: 0;\n}\n.list-scroll .list-item .ant-checkbox-wrapper {\n  color: #fff;\n}\n.list-scroll .list-item .check-note {\n  flex: 0 0 80%;\n}\n\n.list-paginate {\n  margin-top: 2rem;\n  text-align: right;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/components/commons/ContentLoading.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/commons/ContentLoading.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ContentLoading_vue_vue_type_template_id_68268eb5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentLoading.vue?vue&type=template&id=68268eb5& */ "./resources/js/components/commons/ContentLoading.vue?vue&type=template&id=68268eb5&");
/* harmony import */ var _ContentLoading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentLoading.vue?vue&type=script&lang=js& */ "./resources/js/components/commons/ContentLoading.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ContentLoading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ContentLoading_vue_vue_type_template_id_68268eb5___WEBPACK_IMPORTED_MODULE_0__.render,
  _ContentLoading_vue_vue_type_template_id_68268eb5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/commons/ContentLoading.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Home/Form.vue":
/*!******************************************!*\
  !*** ./resources/js/pages/Home/Form.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Form_vue_vue_type_template_id_42b63edb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=42b63edb& */ "./resources/js/pages/Home/Form.vue?vue&type=template&id=42b63edb&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/pages/Home/Form.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Form_vue_vue_type_template_id_42b63edb___WEBPACK_IMPORTED_MODULE_0__.render,
  _Form_vue_vue_type_template_id_42b63edb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Home/Form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Home/index.vue":
/*!*******************************************!*\
  !*** ./resources/js/pages/Home/index.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_033fb0eb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=033fb0eb& */ "./resources/js/pages/Home/index.vue?vue&type=template&id=033fb0eb&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/Home/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _index_vue_vue_type_template_id_033fb0eb___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_033fb0eb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Home/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/commons/ContentLoading.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/commons/ContentLoading.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentLoading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContentLoading.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/commons/ContentLoading.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentLoading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/Home/Form.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/Home/Form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Home/Form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/Home/index.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/Home/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Home/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/commons/ContentLoading.vue?vue&type=template&id=68268eb5&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/commons/ContentLoading.vue?vue&type=template&id=68268eb5& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentLoading_vue_vue_type_template_id_68268eb5___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentLoading_vue_vue_type_template_id_68268eb5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentLoading_vue_vue_type_template_id_68268eb5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContentLoading.vue?vue&type=template&id=68268eb5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/commons/ContentLoading.vue?vue&type=template&id=68268eb5&");


/***/ }),

/***/ "./resources/js/pages/Home/Form.vue?vue&type=template&id=42b63edb&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/Home/Form.vue?vue&type=template&id=42b63edb& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_42b63edb___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_42b63edb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_42b63edb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Form.vue?vue&type=template&id=42b63edb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Home/Form.vue?vue&type=template&id=42b63edb&");


/***/ }),

/***/ "./resources/js/pages/Home/index.vue?vue&type=template&id=033fb0eb&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/Home/index.vue?vue&type=template&id=033fb0eb& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_033fb0eb___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_033fb0eb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_033fb0eb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=033fb0eb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Home/index.vue?vue&type=template&id=033fb0eb&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/commons/ContentLoading.vue?vue&type=template&id=68268eb5&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/commons/ContentLoading.vue?vue&type=template&id=68268eb5& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "content-loading" },
    _vm._l(_vm.arrs, function(item, index) {
      return _c("a-skeleton", {
        key: index,
        attrs: {
          active: "",
          paragraph: true,
          title: false,
          avatar: "",
          loading: true
        }
      })
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Home/Form.vue?vue&type=template&id=42b63edb&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Home/Form.vue?vue&type=template&id=42b63edb& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "a-form",
    {
      attrs: { form: _vm.form, layout: "inline" },
      on: { submit: _vm.handleSubmit }
    },
    [
      _c(
        "a-form-item",
        [
          _c("a-input", {
            directives: [
              {
                name: "decorator",
                rawName: "v-decorator",
                value: ["title"],
                expression: "['title']"
              }
            ],
            attrs: { placeholder: "✍️ Add note..." }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "a-button",
        {
          staticClass: "btn-submit",
          attrs: {
            type: "primary",
            "html-type": "submit",
            loading: _vm.isLoading
          }
        },
        [
          _c("b-icon", {
            staticClass: "plus-icon",
            attrs: { icon: "plus-circle" }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Home/index.vue?vue&type=template&id=033fb0eb&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Home/index.vue?vue&type=template&id=033fb0eb& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "bg-gray content pt-5 px-2" }, [
    _c(
      "div",
      { staticClass: "list" },
      [
        _c("div", { staticClass: "list-logo" }, [
          _c("img", { attrs: { src: "/images/logo.svg", alt: "logo list" } }),
          _vm._v(" "),
          _c("p", [
            _vm._v('Hello "' + _vm._s(_vm.payload && _vm.payload.name) + '" 😜')
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "list-form" },
          [_c("Form", { attrs: { onSuccess: _vm.onAddSuccess } })],
          1
        ),
        _vm._v(" "),
        _vm.isLoading
          ? _c("ContentLoading", { attrs: { count: 5 } })
          : [
              _c(
                "div",
                { staticClass: "list-scroll" },
                _vm._l(_vm.notes, function(note) {
                  return _c(
                    "div",
                    { key: note.id, staticClass: "list-item" },
                    [
                      _c("a-checkbox", { staticClass: "check-note" }, [
                        _vm._v(
                          "\n            " + _vm._s(note.title) + "\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "a-button",
                        {
                          attrs: { type: "danger", size: "small" },
                          on: {
                            click: function($event) {
                              return _vm.onDeleteNote(note.id)
                            }
                          }
                        },
                        [
                          _c("b-icon", {
                            staticClass: "plus-icon",
                            attrs: { icon: "trash" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                }),
                0
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "list-paginate" },
                [
                  _c("a-pagination", {
                    attrs: {
                      "default-current": _vm.pagination.page,
                      total: _vm.pagination.total,
                      defaultPageSize: _vm.pagination.per_page
                    },
                    on: { change: _vm.onChangePage }
                  })
                ],
                1
              )
            ]
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Home/home.scss":
/*!*******************************************!*\
  !*** ./resources/js/pages/Home/home.scss ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./home.scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./resources/js/pages/Home/home.scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1d7a8850", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);