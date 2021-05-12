/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkvue_webpack_setup"] = self["webpackChunkvue_webpack_setup"] || []).push([["main"],{

/***/ 3637:
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90&scoped=true */ 2554);\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ 5653);\n\n\n\n_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _App_vue_vue_type_template_id_7ba5bd90_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render\n_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = \"data-v-7ba5bd90\"\n/* hot reload */\nif (false) {}\n\n_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = \"src/App.vue\"\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);\n\n//# sourceURL=webpack://vue-webpack-setup/./src/App.vue?");

/***/ }),

/***/ 8427:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader-3/dist/index.js??ruleSet[1].rules[8].use[0]!./src/App.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ 9812);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  mounted() {\n    this.initialize();\n  },\n  name: \"App\",\n  components: {},\n  setup() {\n    const name = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);\n    const newName = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);\n    const state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({ userData: [] });\n    const client = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);\n\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => {\n      if (name.value) {\n        console.log();\n        client.value.request\n          .get(`https://api.github.com/users/${name.value}/repos`, {\n            headers: { \"User-Agent\": \"Vue3-App\" },\n          })\n          .then(\n            (data) => {\n              state.userData = JSON.parse(data.response);\n              console.log(\"User Details\", JSON.parse(data.response));\n            },\n            (error) => {\n              state.userData = error\n              console.error(\"error\", error);\n              console.log('state.userData',state.userData);\n            }\n          );\n      }\n    });\n    return {\n      name,\n      newName,\n      client,\n      ...(0,vue__WEBPACK_IMPORTED_MODULE_0__.toRefs)(state),\n    };\n  },\n  methods: {\n    initialize() {\n      app.initialized().then((client) => {\n        this.client = client;\n      });\n    },\n  },\n});\n\n\n//# sourceURL=webpack://vue-webpack-setup/./src/App.vue?./node_modules/vue-loader-3/dist/index.js??ruleSet%5B1%5D.rules%5B8%5D.use%5B0%5D");

/***/ }),

/***/ 5653:
/*!*********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_vue_loader_3_dist_index_js_ruleSet_1_rules_8_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_3_dist_index_js_ruleSet_1_rules_8_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader-3/dist/index.js??ruleSet[1].rules[8].use[0]!./App.vue?vue&type=script&lang=js */ 8427);\n \n\n//# sourceURL=webpack://vue-webpack-setup/./src/App.vue?");

/***/ }),

/***/ 2554:
/*!***************************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90&scoped=true ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_vue_loader_3_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_3_dist_index_js_ruleSet_1_rules_8_use_0_App_vue_vue_type_template_id_7ba5bd90_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_3_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_3_dist_index_js_ruleSet_1_rules_8_use_0_App_vue_vue_type_template_id_7ba5bd90_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader-3/dist/templateLoader.js??ruleSet[1].rules[2]!../node_modules/vue-loader-3/dist/index.js??ruleSet[1].rules[8].use[0]!./App.vue?vue&type=template&id=7ba5bd90&scoped=true */ 1537);\n\n\n//# sourceURL=webpack://vue-webpack-setup/./src/App.vue?");

/***/ }),

/***/ 1537:
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader-3/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader-3/dist/index.js??ruleSet[1].rules[8].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ 9812);\n\nconst _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)(\"data-v-7ba5bd90\")\n\n;(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-7ba5bd90\")\nconst _hoisted_1 = { class: \"container-fluid\" }\nconst _hoisted_2 = { class: \"mb-3\" }\nconst _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(\"label\", {\n  for: \"githubUser\",\n  class: \"form-label\"\n}, \"Email address\", -1 /* HOISTED */)\nconst _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" User not found or no repositories for the user\")\n;(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)()\n\nconst render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {\n  const _component_P = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"P\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(\"div\", _hoisted_1, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(\"div\", _hoisted_2, [\n        _hoisted_3,\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(\"input\", {\n          \"onUpdate:modelValue\": _cache[1] || (_cache[1] = $event => ($setup.name = $event)),\n          type: \"text\",\n          class: \"form-control\",\n          id: \"githubUser\",\n          placeholder: \"Enter Github Username\"\n        }, null, 512 /* NEED_PATCH */), [\n          [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.name]\n        ])\n      ]),\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(\"button\", {\n        onClick: _cache[2] || (_cache[2] = $event => ($setup.newName = $setup.name)),\n        type: \"button\",\n        class: \"btn btn-success\"\n      }, \" Get User \")\n    ]),\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(\"h3\", null, \"Repository list for \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.name), 1 /* TEXT */),\n    (_ctx.userData.status !== 200)\n      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_P, { key: 0 }, {\n          default: _withId(() => [\n            _hoisted_4\n          ]),\n          _: 1 /* STABLE */\n        }))\n      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true),\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(\"ul\", null, [\n      ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.userData, (repo) => {\n        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(\"li\", {\n          key: repo.name\n        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(repo.name), 1 /* TEXT */))\n      }), 128 /* KEYED_FRAGMENT */))\n    ])\n  ], 64 /* STABLE_FRAGMENT */))\n})\n\n//# sourceURL=webpack://vue-webpack-setup/./src/App.vue?./node_modules/vue-loader-3/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader-3/dist/index.js??ruleSet%5B1%5D.rules%5B8%5D.use%5B0%5D");

/***/ }),

/***/ 2225:
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ 9812);\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ 3637);\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__.default).mount('#app')\n\n//# sourceURL=webpack://vue-webpack-setup/./src/main.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors"], function() { return __webpack_exec__(6170), __webpack_exec__(2225); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);