(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit_permission"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/permissions/Edit_permission.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/settings/permissions/Edit_permission.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: "Edit Permissions"
  },
  data: function data() {
    return {
      isLoading: true,
      SubmitProcessing: false,
      permissions: [],
      role: {
        name: "",
        description: ""
      }
    };
  },
  methods: {
    //------------- Submit Validation Update Permissions
    Submit_Permission: function Submit_Permission() {
      var _this = this;

      this.$refs.Edit_Permission.validate().then(function (success) {
        if (!success) {
          _this.makeToast("danger", _this.$t("Please_fill_the_form_correctly"), _this.$t("Failed"));
        } else {
          _this.Update_Permission();
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
    //------------------------ Update Permissions -------------------\\
    Update_Permission: function Update_Permission() {
      var _this2 = this;

      this.SubmitProcessing = true;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.set(0.1);
      var id = this.$route.params.id;
      axios.put("roles/".concat(id), {
        role: this.role,
        permissions: this.permissions
      }).then(function (response) {
        _this2.SubmitProcessing = false;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();

        _this2.makeToast("success", _this2.$t("Update.TitleRole"), _this2.$t("Success"));

        _this2.$router.push({
          name: "groupPermission"
        });

        _this2.$store.dispatch("refreshUserPermissions");
      })["catch"](function (error) {
        _this2.SubmitProcessing = false;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();

        _this2.makeToast("danger", _this2.$t("InvalidData"), _this2.$t("Failed"));
      });
    },
    //---------------------------------------Get Elements Permission Edit ------------------------------\\
    GetElements: function GetElements() {
      var _this3 = this;

      var id = this.$route.params.id;
      axios.get("roles/".concat(id, "/edit")).then(function (response) {
        _this3.role = response.data.role;
        _this3.permissions = response.data.permissions;
        _this3.isLoading = false;
      })["catch"](function (response) {
        setTimeout(function () {
          _this3.isLoading = false;
        }, 500);
      });
    }
  },
  //end Methods
  created: function created() {
    this.GetElements();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/price_list_items.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/settings/price_list_items.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: "Category"
  },
  data: function data() {
    return {
      isLoading: true,
      SubmitProcessing: false,
      serverParams: {
        columnFilters: {},
        sort: {
          field: "id",
          type: "desc"
        },
        page: 1,
        perPage: 10
      },
      selectedIds: [],
      totalRows: "",
      search: "",
      limit: "10",
      updateImage: false,
      data: new FormData(),
      priceLists: [],
      editmode: false,
      priceListData: {
        priceList: 0,
        product: 0,
        discount: 0,
        newPrice: 0
      },
      priceListId: [],
      products: [],
      priceList: {
        id: 0,
        product_id: "",
        ar_title: "",
        en_title: "",
        old_price: "",
        new_price: "",
        discount: "",
        priceList: "",
        is_active: ""
      }
    };
  },
  computed: {
    columns: function columns() {
      return [{
        label: this.$t("ar_title"),
        field: "ar_title",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("en_title"),
        field: "en_title",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("oldPrice"),
        field: "old_price",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("newPrice"),
        field: "new_price",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("discount"),
        field: "discount",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("priceListN"),
        field: "priceList",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("is_active"),
        field: "is_active",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Action"),
        field: "actions",
        html: true,
        tdClass: "text-right",
        thClass: "text-right",
        sortable: false
      }];
    }
  },
  methods: {
    //---- update Params Table
    updateParams: function updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },
    //------------------------------ Event Upload Image -------------------------------\\
    //---- Event Page Change
    onPageChange: function onPageChange(_ref) {
      var currentPage = _ref.currentPage;

      if (this.serverParams.page !== currentPage) {
        this.updateParams({
          page: currentPage
        });
        this.Get_PriceLists(currentPage);
      }
    },
    //---- Event Per Page Change
    onPerPageChange: function onPerPageChange(_ref2) {
      var currentPerPage = _ref2.currentPerPage;

      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage;
        this.updateParams({
          page: 1,
          perPage: currentPerPage
        });
        this.Get_PriceLists(1);
      }
    },
    //---- Event Select Rows
    selectionChanged: function selectionChanged(_ref3) {
      var _this = this;

      var selectedRows = _ref3.selectedRows;
      this.selectedIds = [];
      selectedRows.forEach(function (row, index) {
        _this.selectedIds.push(row.id);
      });
    },
    //---- Event on Sort Change
    onSortChange: function onSortChange(params) {
      this.updateParams({
        sort: {
          type: params[0].type,
          field: params[0].field
        }
      });
      this.Get_PriceLists(this.serverParams.page);
    },
    //---- Event on Search
    onSearch: function onSearch(value) {
      this.search = value.searchTerm;
      this.Get_PriceLists(this.serverParams.page);
    },
    //---- Validation State Form
    getValidationState: function getValidationState(_ref4) {
      var dirty = _ref4.dirty,
          validated = _ref4.validated,
          _ref4$valid = _ref4.valid,
          valid = _ref4$valid === void 0 ? null : _ref4$valid;
      return dirty || validated ? valid : null;
    },
    //------------- Submit Validation Create & Edit Category
    Submit_Category: function Submit_Category() {
      var _this2 = this;

      this.$refs.Create_Category.validate().then(function (success) {
        if (!success) {
          _this2.makeToast("danger", _this2.$t("Please_fill_the_form_correctly"), _this2.$t("Failed"));
        } else {
          if (!_this2.editmode) {
            _this2.Create_Category();
          } else {
            _this2.Update_Category();
          }
        }
      });
    },
    //------ Toast
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    //------------------------------ Modal  (create priceList) -------------------------------\\
    New_priceList: function New_priceList() {
      this.reset_Form();
      this.editmode = false;
      this.$bvModal.show("New_Category");
    },
    //------------------------------ Modal (Update priceList) -------------------------------\\
    Edit_priceList: function Edit_priceList(priceList) {
      this.Get_PriceLists(this.serverParams.page);
      this.reset_Form();
      this.priceListData.product = priceList.product_id;
      this.priceListData.newPrice = priceList.new_price;
      this.priceListData.discount = priceList.discount;
      this.priceList = priceList;
      this.editmode = true;
      this.$bvModal.show("New_Category");
    },
    //--------------------------Get ALL PriceLists & Sub priceList ---------------------------\\
    Get_PriceLists: function Get_PriceLists(page) {
      var _this3 = this;

      var id = this.$route.params.id;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.set(0.1);
      axios.get("priceLists/" + id + "/?skip=" + 0 + "&limit=" + 100).then(function (response) {
        console.log(response.data);
        _this3.priceLists = response.data.priceLists;
        _this3.totalRows = response.data.totalRows;
        _this3.priceListId = response.data.lists;
        _this3.products = response.data.products; // Complete the animation of theprogress bar.

        nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();
        _this3.isLoading = false;
      })["catch"](function (response) {
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();
        setTimeout(function () {
          _this3.isLoading = false;
        }, 500);
      });
    },
    //----------------------------------Create new Category ----------------\\
    Create_Category: function Create_Category() {
      var _this4 = this;

      var self = this;
      self.SubmitProcessing = true;
      this.priceListData.priceList = this.$route.params.id; // self.data.append("en_title", self.priceList.en_title);
      // self.data.append("ar_title", self.priceList.ar_title);
      // self.data.append("is_active", self.priceList.is_active);

      axios.post("priceListsItems", this.priceListData).then(function (response) {
        //  console.log(response.data)
        //  return true;ss
        // this.updateImage = false;
        _this4.SubmitProcessing = false;
        Fire.$emit("Event_Category");

        _this4.makeToast("success", _this4.$t("Create.TitleCat"), _this4.$t("Success"));
      })["catch"](function (error) {
        _this4.SubmitProcessing = false;

        _this4.makeToast("danger", _this4.$t("alreadyExist"), _this4.$t("Failed"));
      });
    },
    //---------------------------------- Update Category ----------------\\
    Update_Category: function Update_Category() {
      var _this5 = this;

      var self = this;
      self.SubmitProcessing = true;
      self.data.append("product", self.priceListData.product);
      self.data.append("newPrice", self.priceListData.newPrice);
      self.data.append("discount", self.priceListData.discount);
      self.data.append("priceList", this.$route.params.id);
      self.data.append("_method", "put"); // for (var key of self.data.entries()){
      //   console.log(key[0] + ', '+key[1])
      // }
      // console.log(self.priceList.discount)
      // return true

      axios.post("priceListsItems/" + this.priceList.id, self.data).then(function (response) {
        _this5.SubmitProcessing = false;
        _this5.updateImage = false;
        Fire.$emit("Event_Category");

        _this5.makeToast("success", _this5.$t("Update.TitleCat"), _this5.$t("Success"));
      })["catch"](function (error) {
        _this5.SubmitProcessing = false;

        _this5.makeToast("danger", _this5.$t("InvalidData"), _this5.$t("Failed"));
      });
    },
    //--------------------------- reset Form ----------------\\
    reset_Form: function reset_Form() {
      this.priceListData = {
        priceList: 0,
        product: 0,
        discount: 0,
        newPrice: 0
      };
    },
    //--------------------------- Remove Category----------------\\
    Remove_Category: function Remove_Category(id) {
      var _this6 = this;

      this.$swal({
        title: this.$t("Delete.Title"),
        text: this.$t("Delete.Text"),
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Delete.cancelButtonText"),
        confirmButtonText: this.$t("Delete.confirmButtonText")
      }).then(function (result) {
        if (result.value) {
          axios["delete"]("priceListsItems/" + id).then(function () {
            _this6.$swal(_this6.$t("Delete.Deleted"), _this6.$t("Delete.CatDeleted"), "success");

            Fire.$emit("Delete_Category");
          })["catch"](function () {
            _this6.$swal(_this6.$t("Delete.Failed"), _this6.$t("Delete.Therewassomethingwronge"), "warning");
          });
        }
      });
    },
    //---- Delete priceList by selection
    delete_by_selected: function delete_by_selected() {
      var _this7 = this;

      this.$swal({
        title: this.$t("Delete.Title"),
        text: this.$t("Delete.Text"),
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Delete.cancelButtonText"),
        confirmButtonText: this.$t("Delete.confirmButtonText")
      }).then(function (result) {
        if (result.value) {
          // Start the progress bar.
          nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.start();
          nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.set(0.1);
          axios.post("priceLists/delete/by_selection", {
            selectedIds: _this7.selectedIds
          }).then(function () {
            _this7.$swal(_this7.$t("Delete.Deleted"), _this7.$t("Delete.CatDeleted"), "success");

            Fire.$emit("Delete_Category");
          })["catch"](function () {
            // Complete the animation of theprogress bar.
            setTimeout(function () {
              return nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();
            }, 500);

            _this7.$swal(_this7.$t("Delete.Failed"), _this7.$t("Delete.Therewassomethingwronge"), "warning");
          });
        }
      });
    }
  },
  //end Methods
  //----------------------------- Created function-------------------
  created: function created() {
    var _this8 = this;

    this.Get_PriceLists(1);
    Fire.$on("Event_Category", function () {
      setTimeout(function () {
        _this8.Get_PriceLists(_this8.serverParams.page);

        _this8.$bvModal.hide("New_Category");
      }, 500);
    });
    Fire.$on("Delete_Category", function () {
      setTimeout(function () {
        _this8.Get_PriceLists(_this8.serverParams.page);
      }, 500);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/permissions/Edit_permission.vue?vue&type=template&id=49bd216a&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/settings/permissions/Edit_permission.vue?vue&type=template&id=49bd216a& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
        attrs: { page: _vm.$t("Edit_Permission"), folder: _vm.$t("Settings") },
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
            { ref: "Edit_Permission" },
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/price_list_items.vue?vue&type=template&id=3c9a7774&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/settings/price_list_items.vue?vue&type=template&id=3c9a7774& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
        attrs: { page: _vm.$t("PriceListsItems"), folder: _vm.$t("Settings") },
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
            "b-card",
            { staticClass: "wrapper" },
            [
              _c(
                "vue-good-table",
                {
                  attrs: {
                    mode: "remote",
                    columns: _vm.columns,
                    totalRows: _vm.totalRows,
                    rows: _vm.priceLists,
                    "pagination-options": {
                      enabled: true,
                      mode: "records",
                      nextLabel: "next",
                      prevLabel: "prev",
                    },
                    styleClass: "table-hover tableOne vgt-table",
                  },
                  on: {
                    "on-page-change": _vm.onPageChange,
                    "on-per-page-change": _vm.onPerPageChange,
                    "on-sort-change": _vm.onSortChange,
                    "on-selected-rows-change": _vm.selectionChanged,
                  },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "table-row",
                        fn: function (props) {
                          return [
                            props.column.field == "actions"
                              ? _c("span", [
                                  _c(
                                    "a",
                                    {
                                      directives: [
                                        {
                                          name: "b-tooltip",
                                          rawName: "v-b-tooltip.hover",
                                          modifiers: { hover: true },
                                        },
                                      ],
                                      attrs: { title: "Edit" },
                                      on: {
                                        click: function ($event) {
                                          return _vm.Edit_priceList(props.row)
                                        },
                                      },
                                    },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "i-Edit text-25 text-success",
                                      }),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      directives: [
                                        {
                                          name: "b-tooltip",
                                          rawName: "v-b-tooltip.hover",
                                          modifiers: { hover: true },
                                        },
                                      ],
                                      attrs: { title: "Delete" },
                                      on: {
                                        click: function ($event) {
                                          return _vm.Remove_Category(
                                            props.row.id
                                          )
                                        },
                                      },
                                    },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "i-Close-Window text-25 text-danger",
                                      }),
                                    ]
                                  ),
                                ])
                              : _vm._e(),
                          ]
                        },
                      },
                    ],
                    null,
                    false,
                    2428703269
                  ),
                },
                [
                  _c(
                    "div",
                    {
                      attrs: { slot: "selected-row-actions" },
                      slot: "selected-row-actions",
                    },
                    [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-danger btn-sm",
                          on: {
                            click: function ($event) {
                              return _vm.delete_by_selected()
                            },
                          },
                        },
                        [_vm._v(_vm._s(_vm.$t("Del")))]
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "mt-2 mb-3",
                      attrs: { slot: "table-actions" },
                      slot: "table-actions",
                    },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-rounded",
                          attrs: { variant: "btn btn-primary btn-icon m-1" },
                          on: {
                            click: function ($event) {
                              return _vm.New_priceList()
                            },
                          },
                        },
                        [
                          _c("i", { staticClass: "i-Add" }),
                          _vm._v(
                            "\n          " +
                              _vm._s(_vm.$t("Add")) +
                              "\n        "
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ]
              ),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "validation-observer",
        { ref: "Create_Category" },
        [
          _c(
            "b-modal",
            {
              attrs: {
                "hide-footer": "",
                size: "md",
                id: "New_Category",
                title: _vm.editmode ? _vm.$t("Edit") : _vm.$t("Add"),
              },
            },
            [
              _c(
                "b-form",
                {
                  attrs: { enctype: "multipart/form-data" },
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.Submit_Category($event)
                    },
                  },
                },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { md: "12" } },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: "Product",
                              rules: { required: true },
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var valid = ref.valid
                                  var errors = ref.errors
                                  return _c(
                                    "b-form-group",
                                    { attrs: { label: _vm.$t("Product") } },
                                    [
                                      _c("v-select", {
                                        class: {
                                          "is-invalid": !!errors.length,
                                        },
                                        attrs: {
                                          state: errors[0]
                                            ? false
                                            : valid
                                            ? true
                                            : null,
                                          placeholder: _vm.$t("Choose_Product"),
                                          reduce: function (label) {
                                            return label.value
                                          },
                                          options: _vm.products.map(function (
                                            products
                                          ) {
                                            return {
                                              label: products.ar_title,
                                              value: products.id,
                                            }
                                          }),
                                        },
                                        model: {
                                          value: _vm.priceListData.product,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.priceListData,
                                              "product",
                                              $$v
                                            )
                                          },
                                          expression: "priceListData.product",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("b-form-invalid-feedback", [
                                        _vm._v(_vm._s(errors[0])),
                                      ]),
                                    ],
                                    1
                                  )
                                },
                              },
                            ]),
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { md: "12" } },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: "NewPrice",
                              rules: { required: true, regex: /^\d*\.?\d*$/ },
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (validationContext) {
                                  return [
                                    _c(
                                      "b-form-group",
                                      { attrs: { label: _vm.$t("NewPrice") } },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            state:
                                              _vm.getValidationState(
                                                validationContext
                                              ),
                                            "aria-describedby":
                                              "ProductPrice-feedback",
                                            label: "Price",
                                            placeholder:
                                              _vm.$t("Enter_newPrice"),
                                          },
                                          model: {
                                            value: _vm.priceListData.newPrice,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.priceListData,
                                                "newPrice",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "priceListData.newPrice",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          {
                                            attrs: {
                                              id: "ProductPrice-feedback",
                                            },
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                validationContext.errors[0]
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
                            ]),
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { md: "12" } },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: "discount",
                              rules: { required: true, regex: /^\d*\.?\d*$/ },
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (validationContext) {
                                  return [
                                    _c(
                                      "b-form-group",
                                      { attrs: { label: _vm.$t("discount") } },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            state:
                                              _vm.getValidationState(
                                                validationContext
                                              ),
                                            "aria-describedby":
                                              "ProductPrice-feedback",
                                            label: "Price",
                                            placeholder:
                                              _vm.$t("Enter_discount"),
                                          },
                                          model: {
                                            value: _vm.priceListData.discount,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.priceListData,
                                                "discount",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "priceListData.discount",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          {
                                            attrs: {
                                              id: "ProductPrice-feedback",
                                            },
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                validationContext.errors[0]
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
                            ]),
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "mt-3", attrs: { md: "12" } },
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

/***/ "./resources/src/views/app/pages/settings/permissions/Edit_permission.vue":
/*!********************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/permissions/Edit_permission.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_permission_vue_vue_type_template_id_49bd216a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit_permission.vue?vue&type=template&id=49bd216a& */ "./resources/src/views/app/pages/settings/permissions/Edit_permission.vue?vue&type=template&id=49bd216a&");
/* harmony import */ var _Edit_permission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit_permission.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/settings/permissions/Edit_permission.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_permission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_permission_vue_vue_type_template_id_49bd216a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_permission_vue_vue_type_template_id_49bd216a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/settings/permissions/Edit_permission.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/settings/permissions/Edit_permission.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/permissions/Edit_permission.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_permission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit_permission.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/permissions/Edit_permission.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_permission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/settings/permissions/Edit_permission.vue?vue&type=template&id=49bd216a&":
/*!***************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/permissions/Edit_permission.vue?vue&type=template&id=49bd216a& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_permission_vue_vue_type_template_id_49bd216a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit_permission.vue?vue&type=template&id=49bd216a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/permissions/Edit_permission.vue?vue&type=template&id=49bd216a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_permission_vue_vue_type_template_id_49bd216a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_permission_vue_vue_type_template_id_49bd216a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/app/pages/settings/price_list_items.vue":
/*!*********************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/price_list_items.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _price_list_items_vue_vue_type_template_id_3c9a7774___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./price_list_items.vue?vue&type=template&id=3c9a7774& */ "./resources/src/views/app/pages/settings/price_list_items.vue?vue&type=template&id=3c9a7774&");
/* harmony import */ var _price_list_items_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./price_list_items.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/settings/price_list_items.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _price_list_items_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _price_list_items_vue_vue_type_template_id_3c9a7774___WEBPACK_IMPORTED_MODULE_0__["render"],
  _price_list_items_vue_vue_type_template_id_3c9a7774___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/settings/price_list_items.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/settings/price_list_items.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/price_list_items.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_price_list_items_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./price_list_items.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/price_list_items.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_price_list_items_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/settings/price_list_items.vue?vue&type=template&id=3c9a7774&":
/*!****************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/price_list_items.vue?vue&type=template&id=3c9a7774& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_price_list_items_vue_vue_type_template_id_3c9a7774___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./price_list_items.vue?vue&type=template&id=3c9a7774& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/price_list_items.vue?vue&type=template&id=3c9a7774&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_price_list_items_vue_vue_type_template_id_3c9a7774___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_price_list_items_vue_vue_type_template_id_3c9a7774___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);