(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["store_permission"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/permissions/Create_permission.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/settings/permissions/Create_permission.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);
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

/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: "Create Permissions"
  },
  data: function data() {
    return {
      SubmitProcessing: false,
      isLoading: true,
      permissions: [],
      role: {
        name: "",
        description: ""
      }
    };
  },
  methods: {
    //------------- Submit Validation Create Permissions
    Submit_Permission: function Submit_Permission() {
      var _this = this;

      this.$refs.Create_Permission.validate().then(function (success) {
        if (!success) {
          _this.makeToast("danger", _this.$t("Please_fill_the_form_correctly"), _this.$t("Failed"));
        } else {
          _this.Create_Permission();
        }
      });
    },
    //---Validate State Fields
    getValidationState: function getValidationState(_ref) {
      var dirty = _ref.dirty,
          validated = _ref.validated,
          _ref$valid = _ref.valid,
          valid = _ref$valid === void 0 ? null : _ref$valid;
      return dirty || validated ? valid : null;
    },
    //------ Toast
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    //------------------------Check_Create_Page -------------------\\
    Check_Create_Page: function Check_Create_Page() {
      var _this2 = this;

      axios.get("roles/check/Create_page").then(function (response) {
        _this2.isLoading = false;
      })["catch"](function (response) {
        setTimeout(function () {
          _this2.isLoading = false;
        }, 500);
      });
    },
    //------------------------ Create Permissions -------------------\\
    Create_Permission: function Create_Permission() {
      var _this3 = this;

      this.SubmitProcessing = true;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.set(0.1);
      axios.post("roles", {
        role: this.role,
        permissions: this.permissions
      }).then(function (response) {
        _this3.SubmitProcessing = false;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();

        _this3.makeToast("success", _this3.$t("Create.TitleRole"), _this3.$t("Success"));

        _this3.$router.push({
          name: "groupPermission"
        });
      })["catch"](function (error) {
        _this3.SubmitProcessing = false;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();

        _this3.makeToast("danger", _this3.$t("InvalidData"), _this3.$t("Failed"));
      });
    }
  },
  //end Methods
  created: function created() {
    this.Check_Create_Page();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/permissions/Create_permission.vue?vue&type=template&id=39e7b8b8&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/settings/permissions/Create_permission.vue?vue&type=template&id=39e7b8b8& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "main-content" },
    [
      _c("breadcumb", {
        attrs: {
          page: _vm.$t("Create_Permission"),
          folder: _vm.$t("Settings"),
        },
      }),
      _vm._v(" "),
      _vm.isLoading
        ? _c("div", {
            staticClass: "loading_page spinner spinner-primary mr-3",
          })
        : _vm._e(),
      _vm._v(" "),
      !_vm.isLoading
        ? _c(
            "validation-observer",
            { ref: "Create_Permission" },
            [
              _c(
                "b-form",
                {
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.Submit_Permission($event)
                    },
                  },
                },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { lg: "12", md: "12", sm: "12" } },
                        [
                          _c(
                            "b-card",
                            [
                              _c(
                                "b-row",
                                [
                                  _c(
                                    "b-col",
                                    { attrs: { md: "6" } },
                                    [
                                      _c("validation-provider", {
                                        attrs: {
                                          name: "Role name",
                                          rules: { required: true },
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (validationContext) {
                                                return [
                                                  _c(
                                                    "b-form-group",
                                                    {
                                                      attrs: {
                                                        label:
                                                          _vm.$t("RoleName"),
                                                      },
                                                    },
                                                    [
                                                      _c("b-form-input", {
                                                        attrs: {
                                                          placeholder:
                                                            _vm.$t(
                                                              "Enter_Role_Name"
                                                            ),
                                                          state:
                                                            _vm.getValidationState(
                                                              validationContext
                                                            ),
                                                          "aria-describedby":
                                                            "Role-feedback",
                                                        },
                                                        model: {
                                                          value: _vm.role.name,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.role,
                                                              "name",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "role.name",
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-invalid-feedback",
                                                        {
                                                          attrs: {
                                                            id: "Role-feedback",
                                                          },
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              validationContext
                                                                .errors[0]
                                                            )
                                                          ),
                                                        ]
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              },
                                            },
                                          ],
                                          null,
                                          false,
                                          1511685217
                                        ),
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { attrs: { md: "6" } },
                                    [
                                      _c(
                                        "b-form-group",
                                        {
                                          attrs: {
                                            label: _vm.$t("RoleDescription"),
                                          },
                                        },
                                        [
                                          _c("b-form-input", {
                                            attrs: {
                                              placeholder: _vm.$t(
                                                "Enter_Role_Description"
                                              ),
                                            },
                                            model: {
                                              value: _vm.role.description,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.role,
                                                  "description",
                                                  $$v
                                                )
                                              },
                                              expression: "role.description",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-row",
                                { staticClass: "mt-4" },
                                [
                                  _c(
                                    "b-col",
                                    { attrs: { md: "4" } },
                                    [
                                      _c(
                                        "b-card",
                                        {
                                          staticClass: "ul-card__border-radius",
                                          attrs: { "no-body": "" },
                                        },
                                        [
                                          _c(
                                            "b-card-header",
                                            {
                                              staticClass: "p-1",
                                              attrs: {
                                                "header-tag": "header",
                                                role: "tab",
                                              },
                                            },
                                            [
                                              _c(
                                                "b-button",
                                                {
                                                  directives: [
                                                    {
                                                      name: "b-toggle",
                                                      rawName:
                                                        "v-b-toggle.panel-UserManagement",
                                                      modifiers: {
                                                        "panel-UserManagement": true,
                                                      },
                                                    },
                                                  ],
                                                  staticClass:
                                                    "card-title mb-0",
                                                  attrs: {
                                                    block: "",
                                                    href: "#",
                                                    variant: "transparent",
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t("UserManagement")
                                                    )
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-collapse",
                                            {
                                              attrs: {
                                                id: "panel-UserManagement ",
                                                visible: true,
                                                accordion: "my-accordion1",
                                                role: "tabpanel",
                                              },
                                            },
                                            [
                                              _c(
                                                "b-card-body",
                                                [
                                                  _c(
                                                    "b-card-text",
                                                    [
                                                      _c(
                                                        "b-row",
                                                        [
                                                          _c(
                                                            "b-col",
                                                            {
                                                              attrs: {
                                                                md: "6",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "checkbox checkbox-outline-primary",
                                                                },
                                                                [
                                                                  _c("input", {
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            _vm.permissions,
                                                                          expression:
                                                                            "permissions",
                                                                        },
                                                                      ],
                                                                    attrs: {
                                                                      type: "checkbox",
                                                                      checked:
                                                                        "",
                                                                      value:
                                                                        "users_view",
                                                                    },
                                                                    domProps: {
                                                                      checked:
                                                                        Array.isArray(
                                                                          _vm.permissions
                                                                        )
                                                                          ? _vm._i(
                                                                              _vm.permissions,
                                                                              "users_view"
                                                                            ) >
                                                                            -1
                                                                          : _vm.permissions,
                                                                    },
                                                                    on: {
                                                                      change:
                                                                        function (
                                                                          $event
                                                                        ) {
                                                                          var $$a =
                                                                              _vm.permissions,
                                                                            $$el =
                                                                              $event.target,
                                                                            $$c =
                                                                              $$el.checked
                                                                                ? true
                                                                                : false
                                                                          if (
                                                                            Array.isArray(
                                                                              $$a
                                                                            )
                                                                          ) {
                                                                            var $$v =
                                                                                "users_view",
                                                                              $$i =
                                                                                _vm._i(
                                                                                  $$a,
                                                                                  $$v
                                                                                )
                                                                            if (
                                                                              $$el.checked
                                                                            ) {
                                                                              $$i <
                                                                                0 &&
                                                                                (_vm.permissions =
                                                                                  $$a.concat(
                                                                                    [
                                                                                      $$v,
                                                                                    ]
                                                                                  ))
                                                                            } else {
                                                                              $$i >
                                                                                -1 &&
                                                                                (_vm.permissions =
                                                                                  $$a
                                                                                    .slice(
                                                                                      0,
                                                                                      $$i
                                                                                    )
                                                                                    .concat(
                                                                                      $$a.slice(
                                                                                        $$i +
                                                                                          1
                                                                                      )
                                                                                    ))
                                                                            }
                                                                          } else {
                                                                            _vm.permissions =
                                                                              $$c
                                                                          }
                                                                        },
                                                                    },
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _c("span", [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "View"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("span", {
                                                                    staticClass:
                                                                      "checkmark",
                                                                  }),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-col",
                                                            {
                                                              attrs: {
                                                                md: "6",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "checkbox checkbox-outline-primary",
                                                                },
                                                                [
                                                                  _c("input", {
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            _vm.permissions,
                                                                          expression:
                                                                            "permissions",
                                                                        },
                                                                      ],
                                                                    attrs: {
                                                                      type: "checkbox",
                                                                      checked:
                                                                        "",
                                                                      value:
                                                                        "users_add",
                                                                    },
                                                                    domProps: {
                                                                      checked:
                                                                        Array.isArray(
                                                                          _vm.permissions
                                                                        )
                                                                          ? _vm._i(
                                                                              _vm.permissions,
                                                                              "users_add"
                                                                            ) >
                                                                            -1
                                                                          : _vm.permissions,
                                                                    },
                                                                    on: {
                                                                      change:
                                                                        function (
                                                                          $event
                                                                        ) {
                                                                          var $$a =
                                                                              _vm.permissions,
                                                                            $$el =
                                                                              $event.target,
                                                                            $$c =
                                                                              $$el.checked
                                                                                ? true
                                                                                : false
                                                                          if (
                                                                            Array.isArray(
                                                                              $$a
                                                                            )
                                                                          ) {
                                                                            var $$v =
                                                                                "users_add",
                                                                              $$i =
                                                                                _vm._i(
                                                                                  $$a,
                                                                                  $$v
                                                                                )
                                                                            if (
                                                                              $$el.checked
                                                                            ) {
                                                                              $$i <
                                                                                0 &&
                                                                                (_vm.permissions =
                                                                                  $$a.concat(
                                                                                    [
                                                                                      $$v,
                                                                                    ]
                                                                                  ))
                                                                            } else {
                                                                              $$i >
                                                                                -1 &&
                                                                                (_vm.permissions =
                                                                                  $$a
                                                                                    .slice(
                                                                                      0,
                                                                                      $$i
                                                                                    )
                                                                                    .concat(
                                                                                      $$a.slice(
                                                                                        $$i +
                                                                                          1
                                                                                      )
                                                                                    ))
                                                                            }
                                                                          } else {
                                                                            _vm.permissions =
                                                                              $$c
                                                                          }
                                                                        },
                                                                    },
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _c("span", [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Add"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("span", {
                                                                    staticClass:
                                                                      "checkmark",
                                                                  }),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-col",
                                                            {
                                                              attrs: {
                                                                md: "6",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "checkbox checkbox-outline-primary",
                                                                },
                                                                [
                                                                  _c("input", {
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            _vm.permissions,
                                                                          expression:
                                                                            "permissions",
                                                                        },
                                                                      ],
                                                                    attrs: {
                                                                      type: "checkbox",
                                                                      checked:
                                                                        "",
                                                                      value:
                                                                        "users_edit",
                                                                    },
                                                                    domProps: {
                                                                      checked:
                                                                        Array.isArray(
                                                                          _vm.permissions
                                                                        )
                                                                          ? _vm._i(
                                                                              _vm.permissions,
                                                                              "users_edit"
                                                                            ) >
                                                                            -1
                                                                          : _vm.permissions,
                                                                    },
                                                                    on: {
                                                                      change:
                                                                        function (
                                                                          $event
                                                                        ) {
                                                                          var $$a =
                                                                              _vm.permissions,
                                                                            $$el =
                                                                              $event.target,
                                                                            $$c =
                                                                              $$el.checked
                                                                                ? true
                                                                                : false
                                                                          if (
                                                                            Array.isArray(
                                                                              $$a
                                                                            )
                                                                          ) {
                                                                            var $$v =
                                                                                "users_edit",
                                                                              $$i =
                                                                                _vm._i(
                                                                                  $$a,
                                                                                  $$v
                                                                                )
                                                                            if (
                                                                              $$el.checked
                                                                            ) {
                                                                              $$i <
                                                                                0 &&
                                                                                (_vm.permissions =
                                                                                  $$a.concat(
                                                                                    [
                                                                                      $$v,
                                                                                    ]
                                                                                  ))
                                                                            } else {
                                                                              $$i >
                                                                                -1 &&
                                                                                (_vm.permissions =
                                                                                  $$a
                                                                                    .slice(
                                                                                      0,
                                                                                      $$i
                                                                                    )
                                                                                    .concat(
                                                                                      $$a.slice(
                                                                                        $$i +
                                                                                          1
                                                                                      )
                                                                                    ))
                                                                            }
                                                                          } else {
                                                                            _vm.permissions =
                                                                              $$c
                                                                          }
                                                                        },
                                                                    },
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _c("span", [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Edit"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("span", {
                                                                    staticClass:
                                                                      "checkmark",
                                                                  }),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-col",
                                                            {
                                                              attrs: {
                                                                md: "6",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "checkbox checkbox-outline-primary",
                                                                },
                                                                [
                                                                  _c("input", {
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            _vm.permissions,
                                                                          expression:
                                                                            "permissions",
                                                                        },
                                                                      ],
                                                                    attrs: {
                                                                      type: "checkbox",
                                                                      checked:
                                                                        "",
                                                                      value:
                                                                        "users_delete",
                                                                    },
                                                                    domProps: {
                                                                      checked:
                                                                        Array.isArray(
                                                                          _vm.permissions
                                                                        )
                                                                          ? _vm._i(
                                                                              _vm.permissions,
                                                                              "users_delete"
                                                                            ) >
                                                                            -1
                                                                          : _vm.permissions,
                                                                    },
                                                                    on: {
                                                                      change:
                                                                        function (
                                                                          $event
                                                                        ) {
                                                                          var $$a =
                                                                              _vm.permissions,
                                                                            $$el =
                                                                              $event.target,
                                                                            $$c =
                                                                              $$el.checked
                                                                                ? true
                                                                                : false
                                                                          if (
                                                                            Array.isArray(
                                                                              $$a
                                                                            )
                                                                          ) {
                                                                            var $$v =
                                                                                "users_delete",
                                                                              $$i =
                                                                                _vm._i(
                                                                                  $$a,
                                                                                  $$v
                                                                                )
                                                                            if (
                                                                              $$el.checked
                                                                            ) {
                                                                              $$i <
                                                                                0 &&
                                                                                (_vm.permissions =
                                                                                  $$a.concat(
                                                                                    [
                                                                                      $$v,
                                                                                    ]
                                                                                  ))
                                                                            } else {
                                                                              $$i >
                                                                                -1 &&
                                                                                (_vm.permissions =
                                                                                  $$a
                                                                                    .slice(
                                                                                      0,
                                                                                      $$i
                                                                                    )
                                                                                    .concat(
                                                                                      $$a.slice(
                                                                                        $$i +
                                                                                          1
                                                                                      )
                                                                                    ))
                                                                            }
                                                                          } else {
                                                                            _vm.permissions =
                                                                              $$c
                                                                          }
                                                                        },
                                                                    },
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _c("span", [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Del"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("span", {
                                                                    staticClass:
                                                                      "checkmark",
                                                                  }),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-col",
                                                            {
                                                              attrs: {
                                                                md: "12",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "checkbox checkbox-outline-primary",
                                                                },
                                                                [
                                                                  _c("input", {
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            _vm.permissions,
                                                                          expression:
                                                                            "permissions",
                                                                        },
                                                                      ],
                                                                    attrs: {
                                                                      type: "checkbox",
                                                                      checked:
                                                                        "",
                                                                      value:
                                                                        "record_view",
                                                                    },
                                                                    domProps: {
                                                                      checked:
                                                                        Array.isArray(
                                                                          _vm.permissions
                                                                        )
                                                                          ? _vm._i(
                                                                              _vm.permissions,
                                                                              "record_view"
                                                                            ) >
                                                                            -1
                                                                          : _vm.permissions,
                                                                    },
                                                                    on: {
                                                                      change:
                                                                        function (
                                                                          $event
                                                                        ) {
                                                                          var $$a =
                                                                              _vm.permissions,
                                                                            $$el =
                                                                              $event.target,
                                                                            $$c =
                                                                              $$el.checked
                                                                                ? true
                                                                                : false
                                                                          if (
                                                                            Array.isArray(
                                                                              $$a
                                                                            )
                                                                          ) {
                                                                            var $$v =
                                                                                "record_view",
                                                                              $$i =
                                                                                _vm._i(
                                                                                  $$a,
                                                                                  $$v
                                                                                )
                                                                            if (
                                                                              $$el.checked
                                                                            ) {
                                                                              $$i <
                                                                                0 &&
                                                                                (_vm.permissions =
                                                                                  $$a.concat(
                                                                                    [
                                                                                      $$v,
                                                                                    ]
                                                                                  ))
                                                                            } else {
                                                                              $$i >
                                                                                -1 &&
                                                                                (_vm.permissions =
                                                                                  $$a
                                                                                    .slice(
                                                                                      0,
                                                                                      $$i
                                                                                    )
                                                                                    .concat(
                                                                                      $$a.slice(
                                                                                        $$i +
                                                                                          1
                                                                                      )
                                                                                    ))
                                                                            }
                                                                          } else {
                                                                            _vm.permissions =
                                                                              $$c
                                                                          }
                                                                        },
                                                                    },
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _c("span", [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "ShowAll"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("span", {
                                                                    staticClass:
                                                                      "checkmark",
                                                                  }),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { attrs: { md: "4" } },
                                    [
                                      _c(
                                        "b-card",
                                        {
                                          staticClass: "ul-card__border-radius",
                                          attrs: { "no-body": "" },
                                        },
                                        [
                                          _c(
                                            "b-card-header",
                                            {
                                              staticClass: "p-1",
                                              attrs: {
                                                "header-tag": "header",
                                                role: "tab",
                                              },
                                            },
                                            [
                                              _c(
                                                "b-button",
                                                {
                                                  directives: [
                                                    {
                                                      name: "b-toggle",
                                                      rawName:
                                                        "v-b-toggle.panel-Permissions",
                                                      modifiers: {
                                                        "panel-Permissions": true,
                                                      },
                                                    },
                                                  ],
                                                  staticClass:
                                                    "card-title mb-0",
                                                  attrs: {
                                                    block: "",
                                                    href: "#",
                                                    variant: "transparent",
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t("UserPermissions")
                                                    )
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-collapse",
                                            {
                                              attrs: {
                                                id: "panel-Permissions ",
                                                visible: true,
                                                accordion: "my-accordion2",
                                                role: "tabpanel",
                                              },
                                            },
                                            [
                                              _c(
                                                "b-card-body",
                                                [
                                                  _c(
                                                    "b-card-text",
                                                    [
                                                      _c(
                                                        "b-row",
                                                        [
                                                          _c(
                                                            "b-col",
                                                            {
                                                              attrs: {
                                                                md: "6",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "checkbox checkbox-outline-primary",
                                                                },
                                                                [
                                                                  _c("input", {
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            _vm.permissions,
                                                                          expression:
                                                                            "permissions",
                                                                        },
                                                                      ],
                                                                    attrs: {
                                                                      type: "checkbox",
                                                                      checked:
                                                                        "",
                                                                      value:
                                                                        "permissions_view",
                                                                    },
                                                                    domProps: {
                                                                      checked:
                                                                        Array.isArray(
                                                                          _vm.permissions
                                                                        )
                                                                          ? _vm._i(
                                                                              _vm.permissions,
                                                                              "permissions_view"
                                                                            ) >
                                                                            -1
                                                                          : _vm.permissions,
                                                                    },
                                                                    on: {
                                                                      change:
                                                                        function (
                                                                          $event
                                                                        ) {
                                                                          var $$a =
                                                                              _vm.permissions,
                                                                            $$el =
                                                                              $event.target,
                                                                            $$c =
                                                                              $$el.checked
                                                                                ? true
                                                                                : false
                                                                          if (
                                                                            Array.isArray(
                                                                              $$a
                                                                            )
                                                                          ) {
                                                                            var $$v =
                                                                                "permissions_view",
                                                                              $$i =
                                                                                _vm._i(
                                                                                  $$a,
                                                                                  $$v
                                                                                )
                                                                            if (
                                                                              $$el.checked
                                                                            ) {
                                                                              $$i <
                                                                                0 &&
                                                                                (_vm.permissions =
                                                                                  $$a.concat(
                                                                                    [
                                                                                      $$v,
                                                                                    ]
                                                                                  ))
                                                                            } else {
                                                                              $$i >
                                                                                -1 &&
                                                                                (_vm.permissions =
                                                                                  $$a
                                                                                    .slice(
                                                                                      0,
                                                                                      $$i
                                                                                    )
                                                                                    .concat(
                                                                                      $$a.slice(
                                                                                        $$i +
                                                                                          1
                                                                                      )
                                                                                    ))
                                                                            }
                                                                          } else {
                                                                            _vm.permissions =
                                                                              $$c
                                                                          }
                                                                        },
                                                                    },
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _c("span", [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "View"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("span", {
                                                                    staticClass:
                                                                      "checkmark",
                                                                  }),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-col",
                                                            {
                                                              attrs: {
                                                                md: "6",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "checkbox checkbox-outline-primary",
                                                                },
                                                                [
                                                                  _c("input", {
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            _vm.permissions,
                                                                          expression:
                                                                            "permissions",
                                                                        },
                                                                      ],
                                                                    attrs: {
                                                                      type: "checkbox",
                                                                      checked:
                                                                        "",
                                                                      value:
                                                                        "permissions_add",
                                                                    },
                                                                    domProps: {
                                                                      checked:
                                                                        Array.isArray(
                                                                          _vm.permissions
                                                                        )
                                                                          ? _vm._i(
                                                                              _vm.permissions,
                                                                              "permissions_add"
                                                                            ) >
                                                                            -1
                                                                          : _vm.permissions,
                                                                    },
                                                                    on: {
                                                                      change:
                                                                        function (
                                                                          $event
                                                                        ) {
                                                                          var $$a =
                                                                              _vm.permissions,
                                                                            $$el =
                                                                              $event.target,
                                                                            $$c =
                                                                              $$el.checked
                                                                                ? true
                                                                                : false
                                                                          if (
                                                                            Array.isArray(
                                                                              $$a
                                                                            )
                                                                          ) {
                                                                            var $$v =
                                                                                "permissions_add",
                                                                              $$i =
                                                                                _vm._i(
                                                                                  $$a,
                                                                                  $$v
                                                                                )
                                                                            if (
                                                                              $$el.checked
                                                                            ) {
                                                                              $$i <
                                                                                0 &&
                                                                                (_vm.permissions =
                                                                                  $$a.concat(
                                                                                    [
                                                                                      $$v,
                                                                                    ]
                                                                                  ))
                                                                            } else {
                                                                              $$i >
                                                                                -1 &&
                                                                                (_vm.permissions =
                                                                                  $$a
                                                                                    .slice(
                                                                                      0,
                                                                                      $$i
                                                                                    )
                                                                                    .concat(
                                                                                      $$a.slice(
                                                                                        $$i +
                                                                                          1
                                                                                      )
                                                                                    ))
                                                                            }
                                                                          } else {
                                                                            _vm.permissions =
                                                                              $$c
                                                                          }
                                                                        },
                                                                    },
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _c("span", [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Add"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("span", {
                                                                    staticClass:
                                                                      "checkmark",
                                                                  }),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-col",
                                                            {
                                                              attrs: {
                                                                md: "6",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "checkbox checkbox-outline-primary",
                                                                },
                                                                [
                                                                  _c("input", {
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            _vm.permissions,
                                                                          expression:
                                                                            "permissions",
                                                                        },
                                                                      ],
                                                                    attrs: {
                                                                      type: "checkbox",
                                                                      checked:
                                                                        "",
                                                                      value:
                                                                        "permissions_edit",
                                                                    },
                                                                    domProps: {
                                                                      checked:
                                                                        Array.isArray(
                                                                          _vm.permissions
                                                                        )
                                                                          ? _vm._i(
                                                                              _vm.permissions,
                                                                              "permissions_edit"
                                                                            ) >
                                                                            -1
                                                                          : _vm.permissions,
                                                                    },
                                                                    on: {
                                                                      change:
                                                                        function (
                                                                          $event
                                                                        ) {
                                                                          var $$a =
                                                                              _vm.permissions,
                                                                            $$el =
                                                                              $event.target,
                                                                            $$c =
                                                                              $$el.checked
                                                                                ? true
                                                                                : false
                                                                          if (
                                                                            Array.isArray(
                                                                              $$a
                                                                            )
                                                                          ) {
                                                                            var $$v =
                                                                                "permissions_edit",
                                                                              $$i =
                                                                                _vm._i(
                                                                                  $$a,
                                                                                  $$v
                                                                                )
                                                                            if (
                                                                              $$el.checked
                                                                            ) {
                                                                              $$i <
                                                                                0 &&
                                                                                (_vm.permissions =
                                                                                  $$a.concat(
                                                                                    [
                                                                                      $$v,
                                                                                    ]
                                                                                  ))
                                                                            } else {
                                                                              $$i >
                                                                                -1 &&
                                                                                (_vm.permissions =
                                                                                  $$a
                                                                                    .slice(
                                                                                      0,
                                                                                      $$i
                                                                                    )
                                                                                    .concat(
                                                                                      $$a.slice(
                                                                                        $$i +
                                                                                          1
                                                                                      )
                                                                                    ))
                                                                            }
                                                                          } else {
                                                                            _vm.permissions =
                                                                              $$c
                                                                          }
                                                                        },
                                                                    },
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _c("span", [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Edit"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("span", {
                                                                    staticClass:
                                                                      "checkmark",
                                                                  }),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-col",
                                                            {
                                                              attrs: {
                                                                md: "6",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "checkbox checkbox-outline-primary",
                                                                },
                                                                [
                                                                  _c("input", {
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            _vm.permissions,
                                                                          expression:
                                                                            "permissions",
                                                                        },
                                                                      ],
                                                                    attrs: {
                                                                      type: "checkbox",
                                                                      checked:
                                                                        "",
                                                                      value:
                                                                        "permissions_delete",
                                                                    },
                                                                    domProps: {
                                                                      checked:
                                                                        Array.isArray(
                                                                          _vm.permissions
                                                                        )
                                                                          ? _vm._i(
                                                                              _vm.permissions,
                                                                              "permissions_delete"
                                                                            ) >
                                                                            -1
                                                                          : _vm.permissions,
                                                                    },
                                                                    on: {
                                                                      change:
                                                                        function (
                                                                          $event
                                                                        ) {
                                                                          var $$a =
                                                                              _vm.permissions,
                                                                            $$el =
                                                                              $event.target,
                                                                            $$c =
                                                                              $$el.checked
                                                                                ? true
                                                                                : false
                                                                          if (
                                                                            Array.isArray(
                                                                              $$a
                                                                            )
                                                                          ) {
                                                                            var $$v =
                                                                                "permissions_delete",
                                                                              $$i =
                                                                                _vm._i(
                                                                                  $$a,
                                                                                  $$v
                                                                                )
                                                                            if (
                                                                              $$el.checked
                                                                            ) {
                                                                              $$i <
                                                                                0 &&
                                                                                (_vm.permissions =
                                                                                  $$a.concat(
                                                                                    [
                                                                                      $$v,
                                                                                    ]
                                                                                  ))
                                                                            } else {
                                                                              $$i >
                                                                                -1 &&
                                                                                (_vm.permissions =
                                                                                  $$a
                                                                                    .slice(
                                                                                      0,
                                                                                      $$i
                                                                                    )
                                                                                    .concat(
                                                                                      $$a.slice(
                                                                                        $$i +
                                                                                          1
                                                                                      )
                                                                                    ))
                                                                            }
                                                                          } else {
                                                                            _vm.permissions =
                                                                              $$c
                                                                          }
                                                                        },
                                                                    },
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _c("span", [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Del"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("span", {
                                                                    staticClass:
                                                                      "checkmark",
                                                                  }),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { attrs: { md: "4" } },
                                    [
                                      _c(
                                        "b-card",
                                        {
                                          staticClass: "ul-card__border-radius",
                                          attrs: { "no-body": "" },
                                        },
                                        [
                                          _c(
                                            "b-card-header",
                                            {
                                              staticClass: "p-1",
                                              attrs: {
                                                "header-tag": "header",
                                                role: "tab",
                                              },
                                            },
                                            [
                                              _c(
                                                "b-button",
                                                {
                                                  directives: [
                                                    {
                                                      name: "b-toggle",
                                                      rawName:
                                                        "v-b-toggle.panel-Products",
                                                      modifiers: {
                                                        "panel-Products": true,
                                                      },
                                                    },
                                                  ],
                                                  staticClass:
                                                    "card-title mb-0",
                                                  attrs: {
                                                    block: "",
                                                    href: "#",
                                                    variant: "transparent",
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.$t("Products"))
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-collapse",
                                            {
                                              attrs: {
                                                id: "panel-Products",
                                                visible: true,
                                                accordion: "my-accordion3",
                                                role: "tabpanel",
                                              },
                                            },
                                            [
                                              _c(
                                                "b-card-body",
                                                [
                                                  _c(
                                                    "b-card-text",
                                                    [
                                                      _c(
                                                        "b-row",
                                                        [
                                                          _c(
                                                            "b-col",
                                                            {
                                                              attrs: {
                                                                md: "6",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "checkbox checkbox-outline-primary",
                                                                },
                                                                [
                                                                  _c("input", {
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            _vm.permissions,
                                                                          expression:
                                                                            "permissions",
                                                                        },
                                                                      ],
                                                                    attrs: {
                                                                      type: "checkbox",
                                                                      checked:
                                                                        "",
                                                                      value:
                                                                        "products_view",
                                                                    },
                                                                    domProps: {
                                                                      checked:
                                                                        Array.isArray(
                                                                          _vm.permissions
                                                                        )
                                                                          ? _vm._i(
                                                                              _vm.permissions,
                                                                              "products_view"
                                                                            ) >
                                                                            -1
                                                                          : _vm.permissions,
                                                                    },
                                                                    on: {
                                                                      change:
                                                                        function (
                                                                          $event
                                                                        ) {
                                                                          var $$a =
                                                                              _vm.permissions,
                                                                            $$el =
                                                                              $event.target,
                                                                            $$c =
                                                                              $$el.checked
                                                                                ? true
                                                                                : false
                                                                          if (
                                                                            Array.isArray(
                                                                              $$a
                                                                            )
                                                                          ) {
                                                                            var $$v =
                                                                                "products_view",
                                                                              $$i =
                                                                                _vm._i(
                                                                                  $$a,
                                                                                  $$v
                                                                                )
                                                                            if (
                                                                              $$el.checked
                                                                            ) {
                                                                              $$i <
                                                                                0 &&
                                                                                (_vm.permissions =
                                                                                  $$a.concat(
                                                                                    [
                                                                                      $$v,
                                                                                    ]
                                                                                  ))
                                                                            } else {
                                                                              $$i >
                                                                                -1 &&
                                                                                (_vm.permissions =
                                                                                  $$a
                                                                                    .slice(
                                                                                      0,
                                                                                      $$i
                                                                                    )
                                                                                    .concat(
                                                                                      $$a.slice(
                                                                                        $$i +
                                                                                          1
                                                                                      )
                                                                                    ))
                                                                            }
                                                                          } else {
                                                                            _vm.permissions =
                                                                              $$c
                                                                          }
                                                                        },
                                                                    },
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _c("span", [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "View"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("span", {
                                                                    staticClass:
                                                                      "checkmark",
                                                                  }),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-col",
                                                            {
                                                              attrs: {
                                                                md: "6",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "checkbox checkbox-outline-primary",
                                                                },
                                                                [
                                                                  _c("input", {
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            _vm.permissions,
                                                                          expression:
                                                                            "permissions",
                                                                        },
                                                                      ],
                                                                    attrs: {
                                                                      type: "checkbox",
                                                                      checked:
                                                                        "",
                                                                      value:
                                                                        "products_add",
                                                                    },
                                                                    domProps: {
                                                                      checked:
                                                                        Array.isArray(
                                                                          _vm.permissions
                                                                        )
                                                                          ? _vm._i(
                                                                              _vm.permissions,
                                                                              "products_add"
                                                                            ) >
                                                                            -1
                                                                          : _vm.permissions,
                                                                    },
                                                                    on: {
                                                                      change:
                                                                        function (
                                                                          $event
                                                                        ) {
                                                                          var $$a =
                                                                              _vm.permissions,
                                                                            $$el =
                                                                              $event.target,
                                                                            $$c =
                                                                              $$el.checked
                                                                                ? true
                                                                                : false
                                                                          if (
                                                                            Array.isArray(
                                                                              $$a
                                                                            )
                                                                          ) {
                                                                            var $$v =
                                                                                "products_add",
                                                                              $$i =
                                                                                _vm._i(
                                                                                  $$a,
                                                                                  $$v
                                                                                )
                                                                            if (
                                                                              $$el.checked
                                                                            ) {
                                                                              $$i <
                                                                                0 &&
                                                                                (_vm.permissions =
                                                                                  $$a.concat(
                                                                                    [
                                                                                      $$v,
                                                                                    ]
                                                                                  ))
                                                                            } else {
                                                                              $$i >
                                                                                -1 &&
                                                                                (_vm.permissions =
                                                                                  $$a
                                                                                    .slice(
                                                                                      0,
                                                                                      $$i
                                                                                    )
                                                                                    .concat(
                                                                                      $$a.slice(
                                                                                        $$i +
                                                                                          1
                                                                                      )
                                                                                    ))
                                                                            }
                                                                          } else {
                                                                            _vm.permissions =
                                                                              $$c
                                                                          }
                                                                        },
                                                                    },
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _c("span", [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Add"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("span", {
                                                                    staticClass:
                                                                      "checkmark",
                                                                  }),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-col",
                                                            {
                                                              attrs: {
                                                                md: "6",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "checkbox checkbox-outline-primary",
                                                                },
                                                                [
                                                                  _c("input", {
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            _vm.permissions,
                                                                          expression:
                                                                            "permissions",
                                                                        },
                                                                      ],
                                                                    attrs: {
                                                                      type: "checkbox",
                                                                      checked:
                                                                        "",
                                                                      value:
                                                                        "products_edit",
                                                                    },
                                                                    domProps: {
                                                                      checked:
                                                                        Array.isArray(
                                                                          _vm.permissions
                                                                        )
                                                                          ? _vm._i(
                                                                              _vm.permissions,
                                                                              "products_edit"
                                                                            ) >
                                                                            -1
                                                                          : _vm.permissions,
                                                                    },
                                                                    on: {
                                                                      change:
                                                                        function (
                                                                          $event
                                                                        ) {
                                                                          var $$a =
                                                                              _vm.permissions,
                                                                            $$el =
                                                                              $event.target,
                                                                            $$c =
                                                                              $$el.checked
                                                                                ? true
                                                                                : false
                                                                          if (
                                                                            Array.isArray(
                                                                              $$a
                                                                            )
                                                                          ) {
                                                                            var $$v =
                                                                                "products_edit",
                                                                              $$i =
                                                                                _vm._i(
                                                                                  $$a,
                                                                                  $$v
                                                                                )
                                                                            if (
                                                                              $$el.checked
                                                                            ) {
                                                                              $$i <
                                                                                0 &&
                                                                                (_vm.permissions =
                                                                                  $$a.concat(
                                                                                    [
                                                                                      $$v,
                                                                                    ]
                                                                                  ))
                                                                            } else {
                                                                              $$i >
                                                                                -1 &&
                                                                                (_vm.permissions =
                                                                                  $$a
                                                                                    .slice(
                                                                                      0,
                                                                                      $$i
                                                                                    )
                                                                                    .concat(
                                                                                      $$a.slice(
                                                                                        $$i +
                                                                                          1
                                                                                      )
                                                                                    ))
                                                                            }
                                                                          } else {
                                                                            _vm.permissions =
                                                                              $$c
                                                                          }
                                                                        },
                                                                    },
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _c("span", [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Edit"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("span", {
                                                                    staticClass:
                                                                      "checkmark",
                                                                  }),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-col",
                                                            {
                                                              attrs: {
                                                                md: "6",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "checkbox checkbox-outline-primary",
                                                                },
                                                                [
                                                                  _c("input", {
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            _vm.permissions,
                                                                          expression:
                                                                            "permissions",
                                                                        },
                                                                      ],
                                                                    attrs: {
                                                                      type: "checkbox",
                                                                      checked:
                                                                        "",
                                                                      value:
                                                                        "products_delete",
                                                                    },
                                                                    domProps: {
                                                                      checked:
                                                                        Array.isArray(
                                                                          _vm.permissions
                                                                        )
                                                                          ? _vm._i(
                                                                              _vm.permissions,
                                                                              "products_delete"
                                                                            ) >
                                                                            -1
                                                                          : _vm.permissions,
                                                                    },
                                                                    on: {
                                                                      change:
                                                                        function (
                                                                          $event
                                                                        ) {
                                                                          var $$a =
                                                                              _vm.permissions,
                                                                            $$el =
                                                                              $event.target,
                                                                            $$c =
                                                                              $$el.checked
                                                                                ? true
                                                                                : false
                                                                          if (
                                                                            Array.isArray(
                                                                              $$a
                                                                            )
                                                                          ) {
                                                                            var $$v =
                                                                                "products_delete",
                                                                              $$i =
                                                                                _vm._i(
                                                                                  $$a,
                                                                                  $$v
                                                                                )
                                                                            if (
                                                                              $$el.checked
                                                                            ) {
                                                                              $$i <
                                                                                0 &&
                                                                                (_vm.permissions =
                                                                                  $$a.concat(
                                                                                    [
                                                                                      $$v,
                                                                                    ]
                                                                                  ))
                                                                            } else {
                                                                              $$i >
                                                                                -1 &&
                                                                                (_vm.permissions =
                                                                                  $$a
                                                                                    .slice(
                                                                                      0,
                                                                                      $$i
                                                                                    )
                                                                                    .concat(
                                                                                      $$a.slice(
                                                                                        $$i +
                                                                                          1
                                                                                      )
                                                                                    ))
                                                                            }
                                                                          } else {
                                                                            _vm.permissions =
                                                                              $$c
                                                                          }
                                                                        },
                                                                    },
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _c("span", [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Del"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("span", {
                                                                    staticClass:
                                                                      "checkmark",
                                                                  }),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-col",
                                                            {
                                                              attrs: {
                                                                md: "6",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "checkbox checkbox-outline-primary",
                                                                },
                                                                [
                                                                  _c("input", {
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            _vm.permissions,
                                                                          expression:
                                                                            "permissions",
                                                                        },
                                                                      ],
                                                                    attrs: {
                                                                      type: "checkbox",
                                                                      checked:
                                                                        "",
                                                                      value:
                                                                        "barcode_view",
                                                                    },
                                                                    domProps: {
                                                                      checked:
                                                                        Array.isArray(
                                                                          _vm.permissions
                                                                        )
                                                                          ? _vm._i(
                                                                              _vm.permissions,
                                                                              "barcode_view"
                                                                            ) >
                                                                            -1
                                                                          : _vm.permissions,
                                                                    },
                                                                    on: {
                                                                      change:
                                                                        function (
                                                                          $event
                                                                        ) {
                                                                          var $$a =
                                                                              _vm.permissions,
                                                                            $$el =
                                                                              $event.target,
                                                                            $$c =
                                                                              $$el.checked
                                                                                ? true
                                                                                : false
                                                                          if (
                                                                            Array.isArray(
                                                                              $$a
                                                                            )
                                                                          ) {
                                                                            var $$v =
                                                                                "barcode_view",
                                                                              $$i =
                                                                                _vm._i(
                                                                                  $$a,
                                                                                  $$v
                                                                                )
                                                                            if (
                                                                              $$el.checked
                                                                            ) {
                                                                              $$i <
                                                                                0 &&
                                                                                (_vm.permissions =
                                                                                  $$a.concat(
                                                                                    [
                                                                                      $$v,
                                                                                    ]
                                                                                  ))
                                                                            } else {
                                                                              $$i >
                                                                                -1 &&
                                                                                (_vm.permissions =
                                                                                  $$a
                                                                                    .slice(
                                                                                      0,
                                                                                      $$i
                                                                                    )
                                                                                    .concat(
                                                                                      $$a.slice(
                                                                                        $$i +
                                                                                          1
                                                                                      )
                                                                                    ))
                                                                            }
                                                                          } else {
                                                                            _vm.permissions =
                                                                              $$c
                                                                          }
                                                                        },
                                                                    },
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _c("span", [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Barcode"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("span", {
                                                                    staticClass:
                                                                      "checkmark",
                                                                  }),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-col",
                                                            {
                                                              attrs: {
                                                                md: "6",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "checkbox checkbox-outline-primary",
                                                                },
                                                                [
                                                                  _c("input", {
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            _vm.permissions,
                                                                          expression:
                                                                            "permissions",
                                                                        },
                                                                      ],
                                                                    attrs: {
                                                                      type: "checkbox",
                                                                      checked:
                                                                        "",
                                                                      value:
                                                                        "product_import",
                                                                    },
                                                                    domProps: {
                                                                      checked:
                                                                        Array.isArray(
                                                                          _vm.permissions
                                                                        )
                                                                          ? _vm._i(
                                                                              _vm.permissions,
                                                                              "product_import"
                                                                            ) >
                                                                            -1
                                                                          : _vm.permissions,
                                                                    },
                                                                    on: {
                                                                      change:
                                                                        function (
                                                                          $event
                                                                        ) {
                                                                          var $$a =
                                                                              _vm.permissions,
                                                                            $$el =
                                                                              $event.target,
                                                                            $$c =
                                                                              $$el.checked
                                                                                ? true
                                                                                : false
                                                                          if (
                                                                            Array.isArray(
                                                                              $$a
                                                                            )
                                                                          ) {
                                                                            var $$v =
                                                                                "product_import",
                                                                              $$i =
                                                                                _vm._i(
                                                                                  $$a,
                                                                                  $$v
                                                                                )
                                                                            if (
                                                                              $$el.checked
                                                                            ) {
                                                                              $$i <
                                                                                0 &&
                                                                                (_vm.permissions =
                                                                                  $$a.concat(
                                                                                    [
                                                                                      $$v,
                                                                                    ]
                                                                                  ))
                                                                            } else {
                                                                              $$i >
                                                                                -1 &&
                                                                                (_vm.permissions =
                                                                                  $$a
                                                                                    .slice(
                                                                                      0,
                                                                                      $$i
                                                                                    )
                                                                                    .concat(
                                                                                      $$a.slice(
                                                                                        $$i +
                                                                                          1
                                                                                      )
                                                                                    ))
                                                                            }
                                                                          } else {
                                                                            _vm.permissions =
                                                                              $$c
                                                                          }
                                                                        },
                                                                    },
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _c("span", [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "import_products"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("span", {
                                                                    staticClass:
                                                                      "checkmark",
                                                                  }),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { attrs: { md: "4" } },
                                    [
                                      _c(
                                        "b-card",
                                        {
                                          staticClass: "ul-card__border-radius",
                                          attrs: { "no-body": "" },
                                        },
                                        [
                                          _c(
                                            "b-card-header",
                                            {
                                              staticClass: "p-1",
                                              attrs: {
                                                "header-tag": "header",
                                                role: "tab",
                                              },
                                            },
                                            [
                                              _c(
                                                "b-button",
                                                {
                                                  directives: [
                                                    {
                                                      name: "b-toggle",
                                                      rawName:
                                                        "v-b-toggle.panel-Customers",
                                                      modifiers: {
                                                        "panel-Customers": true,
                                                      },
                                                    },
                                                  ],
                                                  staticClass:
                                                    "card-title mb-0",
                                                  attrs: {
                                                    block: "",
                                                    href: "#",
                                                    variant: "transparent",
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.$t("Customers"))
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-collapse",
                                            {
                                              attrs: {
                                                id: "panel-Customers",
                                                visible: true,
                                                accordion: "my-accordion15",
                                                role: "tabpanel",
                                              },
                                            },
                                            [
                                              _c(
                                                "b-card-body",
                                                [
                                                  _c(
                                                    "b-card-text",
                                                    [
                                                      _c(
                                                        "b-row",
                                                        [
                                                          _c(
                                                            "b-col",
                                                            {
                                                              attrs: {
                                                                md: "6",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "checkbox checkbox-outline-primary",
                                                                },
                                                                [
                                                                  _c("input", {
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            _vm.permissions,
                                                                          expression:
                                                                            "permissions",
                                                                        },
                                                                      ],
                                                                    attrs: {
                                                                      type: "checkbox",
                                                                      checked:
                                                                        "",
                                                                      value:
                                                                        "Customers_view",
                                                                    },
                                                                    domProps: {
                                                                      checked:
                                                                        Array.isArray(
                                                                          _vm.permissions
                                                                        )
                                                                          ? _vm._i(
                                                                              _vm.permissions,
                                                                              "Customers_view"
                                                                            ) >
                                                                            -1
                                                                          : _vm.permissions,
                                                                    },
                                                                    on: {
                                                                      change:
                                                                        function (
                                                                          $event
                                                                        ) {
                                                                          var $$a =
                                                                              _vm.permissions,
                                                                            $$el =
                                                                              $event.target,
                                                                            $$c =
                                                                              $$el.checked
                                                                                ? true
                                                                                : false
                                                                          if (
                                                                            Array.isArray(
                                                                              $$a
                                                                            )
                                                                          ) {
                                                                            var $$v =
                                                                                "Customers_view",
                                                                              $$i =
                                                                                _vm._i(
                                                                                  $$a,
                                                                                  $$v
                                                                                )
                                                                            if (
                                                                              $$el.checked
                                                                            ) {
                                                                              $$i <
                                                                                0 &&
                                                                                (_vm.permissions =
                                                                                  $$a.concat(
                                                                                    [
                                                                                      $$v,
                                                                                    ]
                                                                                  ))
                                                                            } else {
                                                                              $$i >
                                                                                -1 &&
                                                                                (_vm.permissions =
                                                                                  $$a
                                                                                    .slice(
                                                                                      0,
                                                                                      $$i
                                                                                    )
                                                                                    .concat(
                                                                                      $$a.slice(
                                                                                        $$i +
                                                                                          1
                                                                                      )
                                                                                    ))
                                                                            }
                                                                          } else {
                                                                            _vm.permissions =
                                                                              $$c
                                                                          }
                                                                        },
                                                                    },
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _c("span", [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "View"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("span", {
                                                                    staticClass:
                                                                      "checkmark",
                                                                  }),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-col",
                                                            {
                                                              attrs: {
                                                                md: "6",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "checkbox checkbox-outline-primary",
                                                                },
                                                                [
                                                                  _c("input", {
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            _vm.permissions,
                                                                          expression:
                                                                            "permissions",
                                                                        },
                                                                      ],
                                                                    attrs: {
                                                                      type: "checkbox",
                                                                      checked:
                                                                        "",
                                                                      value:
                                                                        "Customers_add",
                                                                    },
                                                                    domProps: {
                                                                      checked:
                                                                        Array.isArray(
                                                                          _vm.permissions
                                                                        )
                                                                          ? _vm._i(
                                                                              _vm.permissions,
                                                                              "Customers_add"
                                                                            ) >
                                                                            -1
                                                                          : _vm.permissions,
                                                                    },
                                                                    on: {
                                                                      change:
                                                                        function (
                                                                          $event
                                                                        ) {
                                                                          var $$a =
                                                                              _vm.permissions,
                                                                            $$el =
                                                                              $event.target,
                                                                            $$c =
                                                                              $$el.checked
                                                                                ? true
                                                                                : false
                                                                          if (
                                                                            Array.isArray(
                                                                              $$a
                                                                            )
                                                                          ) {
                                                                            var $$v =
                                                                                "Customers_add",
                                                                              $$i =
                                                                                _vm._i(
                                                                                  $$a,
                                                                                  $$v
                                                                                )
                                                                            if (
                                                                              $$el.checked
                                                                            ) {
                                                                              $$i <
                                                                                0 &&
                                                                                (_vm.permissions =
                                                                                  $$a.concat(
                                                                                    [
                                                                                      $$v,
                                                                                    ]
                                                                                  ))
                                                                            } else {
                                                                              $$i >
                                                                                -1 &&
                                                                                (_vm.permissions =
                                                                                  $$a
                                                                                    .slice(
                                                                                      0,
                                                                                      $$i
                                                                                    )
                                                                                    .concat(
                                                                                      $$a.slice(
                                                                                        $$i +
                                                                                          1
                                                                                      )
                                                                                    ))
                                                                            }
                                                                          } else {
                                                                            _vm.permissions =
                                                                              $$c
                                                                          }
                                                                        },
                                                                    },
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _c("span", [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Add"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("span", {
                                                                    staticClass:
                                                                      "checkmark",
                                                                  }),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-col",
                                                            {
                                                              attrs: {
                                                                md: "6",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "checkbox checkbox-outline-primary",
                                                                },
                                                                [
                                                                  _c("input", {
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            _vm.permissions,
                                                                          expression:
                                                                            "permissions",
                                                                        },
                                                                      ],
                                                                    attrs: {
                                                                      type: "checkbox",
                                                                      checked:
                                                                        "",
                                                                      value:
                                                                        "Customers_edit",
                                                                    },
                                                                    domProps: {
                                                                      checked:
                                                                        Array.isArray(
                                                                          _vm.permissions
                                                                        )
                                                                          ? _vm._i(
                                                                              _vm.permissions,
                                                                              "Customers_edit"
                                                                            ) >
                                                                            -1
                                                                          : _vm.permissions,
                                                                    },
                                                                    on: {
                                                                      change:
                                                                        function (
                                                                          $event
                                                                        ) {
                                                                          var $$a =
                                                                              _vm.permissions,
                                                                            $$el =
                                                                              $event.target,
                                                                            $$c =
                                                                              $$el.checked
                                                                                ? true
                                                                                : false
                                                                          if (
                                                                            Array.isArray(
                                                                              $$a
                                                                            )
                                                                          ) {
                                                                            var $$v =
                                                                                "Customers_edit",
                                                                              $$i =
                                                                                _vm._i(
                                                                                  $$a,
                                                                                  $$v
                                                                                )
                                                                            if (
                                                                              $$el.checked
                                                                            ) {
                                                                              $$i <
                                                                                0 &&
                                                                                (_vm.permissions =
                                                                                  $$a.concat(
                                                                                    [
                                                                                      $$v,
                                                                                    ]
                                                                                  ))
                                                                            } else {
                                                                              $$i >
                                                                                -1 &&
                                                                                (_vm.permissions =
                                                                                  $$a
                                                                                    .slice(
                                                                                      0,
                                                                                      $$i
                                                                                    )
                                                                                    .concat(
                                                                                      $$a.slice(
                                                                                        $$i +
                                                                                          1
                                                                                      )
                                                                                    ))
                                                                            }
                                                                          } else {
                                                                            _vm.permissions =
                                                                              $$c
                                                                          }
                                                                        },
                                                                    },
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _c("span", [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Edit"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("span", {
                                                                    staticClass:
                                                                      "checkmark",
                                                                  }),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-col",
                                                            {
                                                              attrs: {
                                                                md: "6",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "checkbox checkbox-outline-primary",
                                                                },
                                                                [
                                                                  _c("input", {
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            _vm.permissions,
                                                                          expression:
                                                                            "permissions",
                                                                        },
                                                                      ],
                                                                    attrs: {
                                                                      type: "checkbox",
                                                                      checked:
                                                                        "",
                                                                      value:
                                                                        "Customers_delete",
                                                                    },
                                                                    domProps: {
                                                                      checked:
                                                                        Array.isArray(
                                                                          _vm.permissions
                                                                        )
                                                                          ? _vm._i(
                                                                              _vm.permissions,
                                                                              "Customers_delete"
                                                                            ) >
                                                                            -1
                                                                          : _vm.permissions,
                                                                    },
                                                                    on: {
                                                                      change:
                                                                        function (
                                                                          $event
                                                                        ) {
                                                                          var $$a =
                                                                              _vm.permissions,
                                                                            $$el =
                                                                              $event.target,
                                                                            $$c =
                                                                              $$el.checked
                                                                                ? true
                                                                                : false
                                                                          if (
                                                                            Array.isArray(
                                                                              $$a
                                                                            )
                                                                          ) {
                                                                            var $$v =
                                                                                "Customers_delete",
                                                                              $$i =
                                                                                _vm._i(
                                                                                  $$a,
                                                                                  $$v
                                                                                )
                                                                            if (
                                                                              $$el.checked
                                                                            ) {
                                                                              $$i <
                                                                                0 &&
                                                                                (_vm.permissions =
                                                                                  $$a.concat(
                                                                                    [
                                                                                      $$v,
                                                                                    ]
                                                                                  ))
                                                                            } else {
                                                                              $$i >
                                                                                -1 &&
                                                                                (_vm.permissions =
                                                                                  $$a
                                                                                    .slice(
                                                                                      0,
                                                                                      $$i
                                                                                    )
                                                                                    .concat(
                                                                                      $$a.slice(
                                                                                        $$i +
                                                                                          1
                                                                                      )
                                                                                    ))
                                                                            }
                                                                          } else {
                                                                            _vm.permissions =
                                                                              $$c
                                                                          }
                                                                        },
                                                                    },
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _c("span", [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Del"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("span", {
                                                                    staticClass:
                                                                      "checkmark",
                                                                  }),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-col",
                                                            {
                                                              attrs: {
                                                                md: "6",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "checkbox checkbox-outline-primary",
                                                                },
                                                                [
                                                                  _c("input", {
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            _vm.permissions,
                                                                          expression:
                                                                            "permissions",
                                                                        },
                                                                      ],
                                                                    attrs: {
                                                                      type: "checkbox",
                                                                      checked:
                                                                        "",
                                                                      value:
                                                                        "customers_import",
                                                                    },
                                                                    domProps: {
                                                                      checked:
                                                                        Array.isArray(
                                                                          _vm.permissions
                                                                        )
                                                                          ? _vm._i(
                                                                              _vm.permissions,
                                                                              "customers_import"
                                                                            ) >
                                                                            -1
                                                                          : _vm.permissions,
                                                                    },
                                                                    on: {
                                                                      change:
                                                                        function (
                                                                          $event
                                                                        ) {
                                                                          var $$a =
                                                                              _vm.permissions,
                                                                            $$el =
                                                                              $event.target,
                                                                            $$c =
                                                                              $$el.checked
                                                                                ? true
                                                                                : false
                                                                          if (
                                                                            Array.isArray(
                                                                              $$a
                                                                            )
                                                                          ) {
                                                                            var $$v =
                                                                                "customers_import",
                                                                              $$i =
                                                                                _vm._i(
                                                                                  $$a,
                                                                                  $$v
                                                                                )
                                                                            if (
                                                                              $$el.checked
                                                                            ) {
                                                                              $$i <
                                                                                0 &&
                                                                                (_vm.permissions =
                                                                                  $$a.concat(
                                                                                    [
                                                                                      $$v,
                                                                                    ]
                                                                                  ))
                                                                            } else {
                                                                              $$i >
                                                                                -1 &&
                                                                                (_vm.permissions =
                                                                                  $$a
                                                                                    .slice(
                                                                                      0,
                                                                                      $$i
                                                                                    )
                                                                                    .concat(
                                                                                      $$a.slice(
                                                                                        $$i +
                                                                                          1
                                                                                      )
                                                                                    ))
                                                                            }
                                                                          } else {
                                                                            _vm.permissions =
                                                                              $$c
                                                                          }
                                                                        },
                                                                    },
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _c("span", [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Import_Customers"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("span", {
                                                                    staticClass:
                                                                      "checkmark",
                                                                  }),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { attrs: { md: "4" } },
                                    [
                                      _c(
                                        "b-card",
                                        {
                                          staticClass: "ul-card__border-radius",
                                          attrs: { "no-body": "" },
                                        },
                                        [
                                          _c(
                                            "b-card-header",
                                            {
                                              staticClass: "p-1",
                                              attrs: {
                                                "header-tag": "header",
                                                role: "tab",
                                              },
                                            },
                                            [
                                              _c(
                                                "b-button",
                                                {
                                                  directives: [
                                                    {
                                                      name: "b-toggle",
                                                      rawName:
                                                        "v-b-toggle.panel-Reports",
                                                      modifiers: {
                                                        "panel-Reports": true,
                                                      },
                                                    },
                                                  ],
                                                  staticClass:
                                                    "card-title mb-0",
                                                  attrs: {
                                                    block: "",
                                                    href: "#",
                                                    variant: "transparent",
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.$t("Reports"))
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-collapse",
                                            {
                                              attrs: {
                                                id: "panel-Reports",
                                                visible: true,
                                                accordion: "my-accordion17",
                                                role: "tabpanel",
                                              },
                                            },
                                            [
                                              _c(
                                                "b-card-body",
                                                [
                                                  _c(
                                                    "b-card-text",
                                                    [
                                                      _c(
                                                        "b-row",
                                                        [
                                                          _c(
                                                            "b-col",
                                                            {
                                                              attrs: {
                                                                md: "12",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "checkbox checkbox-outline-primary",
                                                                },
                                                                [
                                                                  _c("input", {
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            _vm.permissions,
                                                                          expression:
                                                                            "permissions",
                                                                        },
                                                                      ],
                                                                    attrs: {
                                                                      type: "checkbox",
                                                                      checked:
                                                                        "",
                                                                      value:
                                                                        "Reports_quantity_alerts",
                                                                    },
                                                                    domProps: {
                                                                      checked:
                                                                        Array.isArray(
                                                                          _vm.permissions
                                                                        )
                                                                          ? _vm._i(
                                                                              _vm.permissions,
                                                                              "Reports_quantity_alerts"
                                                                            ) >
                                                                            -1
                                                                          : _vm.permissions,
                                                                    },
                                                                    on: {
                                                                      change:
                                                                        function (
                                                                          $event
                                                                        ) {
                                                                          var $$a =
                                                                              _vm.permissions,
                                                                            $$el =
                                                                              $event.target,
                                                                            $$c =
                                                                              $$el.checked
                                                                                ? true
                                                                                : false
                                                                          if (
                                                                            Array.isArray(
                                                                              $$a
                                                                            )
                                                                          ) {
                                                                            var $$v =
                                                                                "Reports_quantity_alerts",
                                                                              $$i =
                                                                                _vm._i(
                                                                                  $$a,
                                                                                  $$v
                                                                                )
                                                                            if (
                                                                              $$el.checked
                                                                            ) {
                                                                              $$i <
                                                                                0 &&
                                                                                (_vm.permissions =
                                                                                  $$a.concat(
                                                                                    [
                                                                                      $$v,
                                                                                    ]
                                                                                  ))
                                                                            } else {
                                                                              $$i >
                                                                                -1 &&
                                                                                (_vm.permissions =
                                                                                  $$a
                                                                                    .slice(
                                                                                      0,
                                                                                      $$i
                                                                                    )
                                                                                    .concat(
                                                                                      $$a.slice(
                                                                                        $$i +
                                                                                          1
                                                                                      )
                                                                                    ))
                                                                            }
                                                                          } else {
                                                                            _vm.permissions =
                                                                              $$c
                                                                          }
                                                                        },
                                                                    },
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _c("span", [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "ProductQuantityAlerts"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("span", {
                                                                    staticClass:
                                                                      "checkmark",
                                                                  }),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { attrs: { md: "4" } },
                                    [
                                      _c(
                                        "b-card",
                                        {
                                          staticClass: "ul-card__border-radius",
                                          attrs: { "no-body": "" },
                                        },
                                        [
                                          _c(
                                            "b-card-header",
                                            {
                                              staticClass: "p-1",
                                              attrs: {
                                                "header-tag": "header",
                                                role: "tab",
                                              },
                                            },
                                            [
                                              _c(
                                                "b-button",
                                                {
                                                  directives: [
                                                    {
                                                      name: "b-toggle",
                                                      rawName:
                                                        "v-b-toggle.panel-Settings",
                                                      modifiers: {
                                                        "panel-Settings": true,
                                                      },
                                                    },
                                                  ],
                                                  staticClass:
                                                    "card-title mb-0",
                                                  attrs: {
                                                    block: "",
                                                    href: "#",
                                                    variant: "transparent",
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.$t("Settings"))
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-collapse",
                                            {
                                              attrs: {
                                                id: "panel-Settings",
                                                visible: true,
                                                accordion: "my-accordion18",
                                                role: "tabpanel",
                                              },
                                            },
                                            [
                                              _c(
                                                "b-card-body",
                                                [
                                                  _c(
                                                    "b-card-text",
                                                    [
                                                      _c(
                                                        "b-row",
                                                        [
                                                          _c(
                                                            "b-col",
                                                            {
                                                              attrs: {
                                                                md: "6",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "checkbox checkbox-outline-primary",
                                                                },
                                                                [
                                                                  _c("input", {
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            _vm.permissions,
                                                                          expression:
                                                                            "permissions",
                                                                        },
                                                                      ],
                                                                    attrs: {
                                                                      type: "checkbox",
                                                                      checked:
                                                                        "",
                                                                      value:
                                                                        "setting_system",
                                                                    },
                                                                    domProps: {
                                                                      checked:
                                                                        Array.isArray(
                                                                          _vm.permissions
                                                                        )
                                                                          ? _vm._i(
                                                                              _vm.permissions,
                                                                              "setting_system"
                                                                            ) >
                                                                            -1
                                                                          : _vm.permissions,
                                                                    },
                                                                    on: {
                                                                      change:
                                                                        function (
                                                                          $event
                                                                        ) {
                                                                          var $$a =
                                                                              _vm.permissions,
                                                                            $$el =
                                                                              $event.target,
                                                                            $$c =
                                                                              $$el.checked
                                                                                ? true
                                                                                : false
                                                                          if (
                                                                            Array.isArray(
                                                                              $$a
                                                                            )
                                                                          ) {
                                                                            var $$v =
                                                                                "setting_system",
                                                                              $$i =
                                                                                _vm._i(
                                                                                  $$a,
                                                                                  $$v
                                                                                )
                                                                            if (
                                                                              $$el.checked
                                                                            ) {
                                                                              $$i <
                                                                                0 &&
                                                                                (_vm.permissions =
                                                                                  $$a.concat(
                                                                                    [
                                                                                      $$v,
                                                                                    ]
                                                                                  ))
                                                                            } else {
                                                                              $$i >
                                                                                -1 &&
                                                                                (_vm.permissions =
                                                                                  $$a
                                                                                    .slice(
                                                                                      0,
                                                                                      $$i
                                                                                    )
                                                                                    .concat(
                                                                                      $$a.slice(
                                                                                        $$i +
                                                                                          1
                                                                                      )
                                                                                    ))
                                                                            }
                                                                          } else {
                                                                            _vm.permissions =
                                                                              $$c
                                                                          }
                                                                        },
                                                                    },
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _c("span", [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "SystemSettings"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("span", {
                                                                    staticClass:
                                                                      "checkmark",
                                                                  }),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-col",
                                                            {
                                                              attrs: {
                                                                md: "6",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "checkbox checkbox-outline-primary",
                                                                },
                                                                [
                                                                  _c("input", {
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            _vm.permissions,
                                                                          expression:
                                                                            "permissions",
                                                                        },
                                                                      ],
                                                                    attrs: {
                                                                      type: "checkbox",
                                                                      checked:
                                                                        "",
                                                                      value:
                                                                        "category",
                                                                    },
                                                                    domProps: {
                                                                      checked:
                                                                        Array.isArray(
                                                                          _vm.permissions
                                                                        )
                                                                          ? _vm._i(
                                                                              _vm.permissions,
                                                                              "category"
                                                                            ) >
                                                                            -1
                                                                          : _vm.permissions,
                                                                    },
                                                                    on: {
                                                                      change:
                                                                        function (
                                                                          $event
                                                                        ) {
                                                                          var $$a =
                                                                              _vm.permissions,
                                                                            $$el =
                                                                              $event.target,
                                                                            $$c =
                                                                              $$el.checked
                                                                                ? true
                                                                                : false
                                                                          if (
                                                                            Array.isArray(
                                                                              $$a
                                                                            )
                                                                          ) {
                                                                            var $$v =
                                                                                "category",
                                                                              $$i =
                                                                                _vm._i(
                                                                                  $$a,
                                                                                  $$v
                                                                                )
                                                                            if (
                                                                              $$el.checked
                                                                            ) {
                                                                              $$i <
                                                                                0 &&
                                                                                (_vm.permissions =
                                                                                  $$a.concat(
                                                                                    [
                                                                                      $$v,
                                                                                    ]
                                                                                  ))
                                                                            } else {
                                                                              $$i >
                                                                                -1 &&
                                                                                (_vm.permissions =
                                                                                  $$a
                                                                                    .slice(
                                                                                      0,
                                                                                      $$i
                                                                                    )
                                                                                    .concat(
                                                                                      $$a.slice(
                                                                                        $$i +
                                                                                          1
                                                                                      )
                                                                                    ))
                                                                            }
                                                                          } else {
                                                                            _vm.permissions =
                                                                              $$c
                                                                          }
                                                                        },
                                                                    },
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _c("span", [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Categories"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("span", {
                                                                    staticClass:
                                                                      "checkmark",
                                                                  }),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-col",
                                                            {
                                                              attrs: {
                                                                md: "6",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "checkbox checkbox-outline-primary",
                                                                },
                                                                [
                                                                  _c("input", {
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            _vm.permissions,
                                                                          expression:
                                                                            "permissions",
                                                                        },
                                                                      ],
                                                                    attrs: {
                                                                      type: "checkbox",
                                                                      checked:
                                                                        "",
                                                                      value:
                                                                        "brand",
                                                                    },
                                                                    domProps: {
                                                                      checked:
                                                                        Array.isArray(
                                                                          _vm.permissions
                                                                        )
                                                                          ? _vm._i(
                                                                              _vm.permissions,
                                                                              "brand"
                                                                            ) >
                                                                            -1
                                                                          : _vm.permissions,
                                                                    },
                                                                    on: {
                                                                      change:
                                                                        function (
                                                                          $event
                                                                        ) {
                                                                          var $$a =
                                                                              _vm.permissions,
                                                                            $$el =
                                                                              $event.target,
                                                                            $$c =
                                                                              $$el.checked
                                                                                ? true
                                                                                : false
                                                                          if (
                                                                            Array.isArray(
                                                                              $$a
                                                                            )
                                                                          ) {
                                                                            var $$v =
                                                                                "brand",
                                                                              $$i =
                                                                                _vm._i(
                                                                                  $$a,
                                                                                  $$v
                                                                                )
                                                                            if (
                                                                              $$el.checked
                                                                            ) {
                                                                              $$i <
                                                                                0 &&
                                                                                (_vm.permissions =
                                                                                  $$a.concat(
                                                                                    [
                                                                                      $$v,
                                                                                    ]
                                                                                  ))
                                                                            } else {
                                                                              $$i >
                                                                                -1 &&
                                                                                (_vm.permissions =
                                                                                  $$a
                                                                                    .slice(
                                                                                      0,
                                                                                      $$i
                                                                                    )
                                                                                    .concat(
                                                                                      $$a.slice(
                                                                                        $$i +
                                                                                          1
                                                                                      )
                                                                                    ))
                                                                            }
                                                                          } else {
                                                                            _vm.permissions =
                                                                              $$c
                                                                          }
                                                                        },
                                                                    },
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _c("span", [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Brand"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("span", {
                                                                    staticClass:
                                                                      "checkmark",
                                                                  }),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-col",
                                                            {
                                                              attrs: {
                                                                md: "6",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "checkbox checkbox-outline-primary",
                                                                },
                                                                [
                                                                  _c("input", {
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            _vm.permissions,
                                                                          expression:
                                                                            "permissions",
                                                                        },
                                                                      ],
                                                                    attrs: {
                                                                      type: "checkbox",
                                                                      checked:
                                                                        "",
                                                                      value:
                                                                        "currency",
                                                                    },
                                                                    domProps: {
                                                                      checked:
                                                                        Array.isArray(
                                                                          _vm.permissions
                                                                        )
                                                                          ? _vm._i(
                                                                              _vm.permissions,
                                                                              "currency"
                                                                            ) >
                                                                            -1
                                                                          : _vm.permissions,
                                                                    },
                                                                    on: {
                                                                      change:
                                                                        function (
                                                                          $event
                                                                        ) {
                                                                          var $$a =
                                                                              _vm.permissions,
                                                                            $$el =
                                                                              $event.target,
                                                                            $$c =
                                                                              $$el.checked
                                                                                ? true
                                                                                : false
                                                                          if (
                                                                            Array.isArray(
                                                                              $$a
                                                                            )
                                                                          ) {
                                                                            var $$v =
                                                                                "currency",
                                                                              $$i =
                                                                                _vm._i(
                                                                                  $$a,
                                                                                  $$v
                                                                                )
                                                                            if (
                                                                              $$el.checked
                                                                            ) {
                                                                              $$i <
                                                                                0 &&
                                                                                (_vm.permissions =
                                                                                  $$a.concat(
                                                                                    [
                                                                                      $$v,
                                                                                    ]
                                                                                  ))
                                                                            } else {
                                                                              $$i >
                                                                                -1 &&
                                                                                (_vm.permissions =
                                                                                  $$a
                                                                                    .slice(
                                                                                      0,
                                                                                      $$i
                                                                                    )
                                                                                    .concat(
                                                                                      $$a.slice(
                                                                                        $$i +
                                                                                          1
                                                                                      )
                                                                                    ))
                                                                            }
                                                                          } else {
                                                                            _vm.permissions =
                                                                              $$c
                                                                          }
                                                                        },
                                                                    },
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _c("span", [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Currencies"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("span", {
                                                                    staticClass:
                                                                      "checkmark",
                                                                  }),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-col",
                                                            {
                                                              attrs: {
                                                                md: "6",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "checkbox checkbox-outline-primary",
                                                                },
                                                                [
                                                                  _c("input", {
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            _vm.permissions,
                                                                          expression:
                                                                            "permissions",
                                                                        },
                                                                      ],
                                                                    attrs: {
                                                                      type: "checkbox",
                                                                      checked:
                                                                        "",
                                                                      value:
                                                                        "unit",
                                                                    },
                                                                    domProps: {
                                                                      checked:
                                                                        Array.isArray(
                                                                          _vm.permissions
                                                                        )
                                                                          ? _vm._i(
                                                                              _vm.permissions,
                                                                              "unit"
                                                                            ) >
                                                                            -1
                                                                          : _vm.permissions,
                                                                    },
                                                                    on: {
                                                                      change:
                                                                        function (
                                                                          $event
                                                                        ) {
                                                                          var $$a =
                                                                              _vm.permissions,
                                                                            $$el =
                                                                              $event.target,
                                                                            $$c =
                                                                              $$el.checked
                                                                                ? true
                                                                                : false
                                                                          if (
                                                                            Array.isArray(
                                                                              $$a
                                                                            )
                                                                          ) {
                                                                            var $$v =
                                                                                "unit",
                                                                              $$i =
                                                                                _vm._i(
                                                                                  $$a,
                                                                                  $$v
                                                                                )
                                                                            if (
                                                                              $$el.checked
                                                                            ) {
                                                                              $$i <
                                                                                0 &&
                                                                                (_vm.permissions =
                                                                                  $$a.concat(
                                                                                    [
                                                                                      $$v,
                                                                                    ]
                                                                                  ))
                                                                            } else {
                                                                              $$i >
                                                                                -1 &&
                                                                                (_vm.permissions =
                                                                                  $$a
                                                                                    .slice(
                                                                                      0,
                                                                                      $$i
                                                                                    )
                                                                                    .concat(
                                                                                      $$a.slice(
                                                                                        $$i +
                                                                                          1
                                                                                      )
                                                                                    ))
                                                                            }
                                                                          } else {
                                                                            _vm.permissions =
                                                                              $$c
                                                                          }
                                                                        },
                                                                    },
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _c("span", [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Units"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("span", {
                                                                    staticClass:
                                                                      "checkmark",
                                                                  }),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-col",
                                                            {
                                                              attrs: {
                                                                md: "6",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "checkbox checkbox-outline-primary",
                                                                },
                                                                [
                                                                  _c("input", {
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            _vm.permissions,
                                                                          expression:
                                                                            "permissions",
                                                                        },
                                                                      ],
                                                                    attrs: {
                                                                      type: "checkbox",
                                                                      checked:
                                                                        "",
                                                                      value:
                                                                        "backup",
                                                                    },
                                                                    domProps: {
                                                                      checked:
                                                                        Array.isArray(
                                                                          _vm.permissions
                                                                        )
                                                                          ? _vm._i(
                                                                              _vm.permissions,
                                                                              "backup"
                                                                            ) >
                                                                            -1
                                                                          : _vm.permissions,
                                                                    },
                                                                    on: {
                                                                      change:
                                                                        function (
                                                                          $event
                                                                        ) {
                                                                          var $$a =
                                                                              _vm.permissions,
                                                                            $$el =
                                                                              $event.target,
                                                                            $$c =
                                                                              $$el.checked
                                                                                ? true
                                                                                : false
                                                                          if (
                                                                            Array.isArray(
                                                                              $$a
                                                                            )
                                                                          ) {
                                                                            var $$v =
                                                                                "backup",
                                                                              $$i =
                                                                                _vm._i(
                                                                                  $$a,
                                                                                  $$v
                                                                                )
                                                                            if (
                                                                              $$el.checked
                                                                            ) {
                                                                              $$i <
                                                                                0 &&
                                                                                (_vm.permissions =
                                                                                  $$a.concat(
                                                                                    [
                                                                                      $$v,
                                                                                    ]
                                                                                  ))
                                                                            } else {
                                                                              $$i >
                                                                                -1 &&
                                                                                (_vm.permissions =
                                                                                  $$a
                                                                                    .slice(
                                                                                      0,
                                                                                      $$i
                                                                                    )
                                                                                    .concat(
                                                                                      $$a.slice(
                                                                                        $$i +
                                                                                          1
                                                                                      )
                                                                                    ))
                                                                            }
                                                                          } else {
                                                                            _vm.permissions =
                                                                              $$c
                                                                          }
                                                                        },
                                                                    },
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _c("span", [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Backup"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("span", {
                                                                    staticClass:
                                                                      "checkmark",
                                                                  }),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-col",
                                { attrs: { md: "12" } },
                                [
                                  _c(
                                    "b-button",
                                    {
                                      attrs: {
                                        variant: "primary",
                                        type: "submit",
                                        disabled: _vm.SubmitProcessing,
                                      },
                                    },
                                    [_vm._v(_vm._s(_vm.$t("submit")))]
                                  ),
                                  _vm._v(" "),
                                  _vm.SubmitProcessing ? _vm._m(0) : _vm._e(),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "typo__p" }, [
      _c("div", { staticClass: "spinner sm spinner-primary mt-3" }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/src/views/app/pages/settings/permissions/Create_permission.vue":
/*!**********************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/permissions/Create_permission.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_permission_vue_vue_type_template_id_39e7b8b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create_permission.vue?vue&type=template&id=39e7b8b8& */ "./resources/src/views/app/pages/settings/permissions/Create_permission.vue?vue&type=template&id=39e7b8b8&");
/* harmony import */ var _Create_permission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create_permission.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/settings/permissions/Create_permission.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_permission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_permission_vue_vue_type_template_id_39e7b8b8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_permission_vue_vue_type_template_id_39e7b8b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/settings/permissions/Create_permission.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/settings/permissions/Create_permission.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/permissions/Create_permission.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_permission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create_permission.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/permissions/Create_permission.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_permission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/settings/permissions/Create_permission.vue?vue&type=template&id=39e7b8b8&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/permissions/Create_permission.vue?vue&type=template&id=39e7b8b8& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_permission_vue_vue_type_template_id_39e7b8b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create_permission.vue?vue&type=template&id=39e7b8b8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/permissions/Create_permission.vue?vue&type=template&id=39e7b8b8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_permission_vue_vue_type_template_id_39e7b8b8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_permission_vue_vue_type_template_id_39e7b8b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);