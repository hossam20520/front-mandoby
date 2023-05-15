<template>
  <div class="main-content">
    <breadcumb :page="$t('PriceListsItems')" :folder="$t('Settings')"/>

    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>
    <b-card class="wrapper" v-if="!isLoading">
      <vue-good-table
        mode="remote"
        :columns="columns"
        :totalRows="totalRows"
        :rows="priceLists"
        @on-page-change="onPageChange"
        @on-per-page-change="onPerPageChange"
        @on-sort-change="onSortChange"
       
  
 
        @on-selected-rows-change="selectionChanged"
        :pagination-options="{
        enabled: true,
        mode: 'records',
        nextLabel: 'next',
        prevLabel: 'prev',
      }"
        styleClass="table-hover tableOne vgt-table"
      >
        <div slot="selected-row-actions">
          <button class="btn btn-danger btn-sm" @click="delete_by_selected()">{{$t('Del')}}</button>
        </div>
        <div slot="table-actions" class="mt-2 mb-3">
          <b-button
            @click="New_priceList()"
            class="btn-rounded"
            variant="btn btn-primary btn-icon m-1"
          >
            <i class="i-Add"></i>
            {{$t('Add')}}
          </b-button>
        </div>

        <template slot="table-row" slot-scope="props">

          <span v-if="props.column.field == 'actions'">
            <a @click="Edit_priceList(props.row)" title="Edit" v-b-tooltip.hover>
              <i class="i-Edit text-25 text-success"></i>
            </a>
            <a title="Delete" v-b-tooltip.hover @click="Remove_Category(props.row.id)">
              <i class="i-Close-Window text-25 text-danger"></i>
            </a>

           
          </span>

          <!-- <span v-else-if="props.column.field == 'image'">
            <b-img
              thumbnail
              height="50"
              width="50"
              fluid
              :src="'/images/priceList/' + props.row.image"
              alt="image"
            ></b-img>
          </span> -->
        </template>
      </vue-good-table>
    </b-card>

    <validation-observer ref="Create_Category">
      <b-modal hide-footer size="md" id="New_Category" :title="editmode?$t('Edit'):$t('Add')">
        <b-form @submit.prevent="Submit_Category" enctype="multipart/form-data">
          <b-row>
            <!-- Code priceList -->
    

            <!-- Name priceList -->
            <!-- <b-col md="12">
              <validation-provider name="priceList" :rules="{ required: true}">
                    <b-form-group slot-scope="{ valid, errors }" :label="$t('PriceList')">
                      <v-select
                        :class="{'is-invalid': !!errors.length}"
                        :state="errors[0] ? false : (valid ? true : null)"
                        v-model="priceListData.priceList"
                        :placeholder="$t('Choose_PriceList')"
                        :reduce="label => label.value"
                        :options="priceListId.map(priceListId => ({label: priceListId.ar_title, value: priceListId.id}))"
                      />
                      <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
            </b-col> -->

         
            <b-col md="12">
              <validation-provider name="Product" :rules="{ required: true}">
                    <b-form-group slot-scope="{ valid, errors }" :label="$t('Product')">
                      <v-select
                        :class="{'is-invalid': !!errors.length}"
                        :state="errors[0] ? false : (valid ? true : null)"
                        v-model="priceListData.product"
                        :placeholder="$t('Choose_Product')"
                        :reduce="label => label.value"
                        :options="products.map(products => ({label: products.ar_title, value: products.id}))"
                      />
                      <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
            </b-col>


              <b-col md="12">
                <validation-provider
                    name="NewPrice"
                    :rules="{ required: true , regex: /^\d*\.?\d*$/}"
                    v-slot="validationContext"
                  >
                    <b-form-group :label="$t('NewPrice')">
                      <b-form-input
                        :state="getValidationState(validationContext)"
                        aria-describedby="ProductPrice-feedback"
                        label="Price"
                        :placeholder="$t('Enter_newPrice')"
                        v-model="priceListData.newPrice"
                      ></b-form-input>

                      <b-form-invalid-feedback
                        id="ProductPrice-feedback"
                      >{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
            </b-col>


            <b-col md="12">
                <validation-provider
                    name="discount"
                    :rules="{ required: true , regex: /^\d*\.?\d*$/}"
                    v-slot="validationContext"
                  >
                    <b-form-group :label="$t('discount')">
                      <b-form-input
                        :state="getValidationState(validationContext)"
                        aria-describedby="ProductPrice-feedback"
                        label="Price"
                        :placeholder="$t('Enter_discount')"
                        v-model="priceListData.discount"
                      ></b-form-input>

                      <b-form-invalid-feedback
                        id="ProductPrice-feedback"
                      >{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
            </b-col>

             <b-col md="12" class="mt-3">
                <b-button variant="primary" type="submit"  :disabled="SubmitProcessing">{{$t('submit')}}</b-button>
                  <div v-once class="typo__p" v-if="SubmitProcessing">
                    <div class="spinner sm spinner-primary mt-3"></div>
                  </div>
            </b-col>

          </b-row>
        </b-form>
      </b-modal>
    </validation-observer>
  </div>
</template>


<script>
import NProgress from "nprogress";

export default {
  metaInfo: {
    title: "Category"
  },
  data() {
    return {
      isLoading: true,
      SubmitProcessing:false,
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
      updateImage:false,
      data: new FormData(),
      priceLists: [],
      editmode: false,
      priceListData:{
        priceList:0,
        product:0,
        discount:0,
        newPrice:0,
      },
      priceListId:[],
      products:[],
      priceList: {
        id: 0,
        product_id: "",
        ar_title: "",
        en_title: "",
        old_price:"",
        new_price:"",
        discount:"",
   
        priceList:"",
        is_active:""
   
      
      }
    };
  },
  computed: {
    columns() {
      return [

   
        {
          label: this.$t("ar_title"),
          field: "ar_title",
          tdClass: "text-left",
          thClass: "text-left"
        },

        {
          label: this.$t("en_title"),
          field: "en_title",
          tdClass: "text-left",
          thClass: "text-left"
        },

        {
          label: this.$t("oldPrice"),
          field: "old_price",
          tdClass: "text-left",
          thClass: "text-left"
        },


        {
          label: this.$t("newPrice"),
          field: "new_price",
          tdClass: "text-left",
          thClass: "text-left"
        },

        {
          label: this.$t("discount"),
          field: "discount",
          tdClass: "text-left",
          thClass: "text-left"
        },

        {
          label: this.$t("priceListN"),
          field: "priceList",
          tdClass: "text-left",
          thClass: "text-left"
        },

        {
          label: this.$t("is_active"),
          field: "is_active",
          tdClass: "text-left",
          thClass: "text-left"
        },

      
        {
          label: this.$t("Action"),
          field: "actions",
          html: true,
          tdClass: "text-right",
          thClass: "text-right",
          sortable: false
        }
      ];
    }
  },

  methods: {
    //---- update Params Table
    updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },


        //------------------------------ Event Upload Image -------------------------------\\

        

    //---- Event Page Change
    onPageChange({ currentPage }) {
      if (this.serverParams.page !== currentPage) {
        this.updateParams({ page: currentPage });
        this.Get_PriceLists(currentPage);
      }
    },

    //---- Event Per Page Change
    onPerPageChange({ currentPerPage }) {
      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage;
        this.updateParams({ page: 1, perPage: currentPerPage });
        this.Get_PriceLists(1);
      }
    },

    //---- Event Select Rows
    selectionChanged({ selectedRows }) {
      this.selectedIds = [];
      selectedRows.forEach((row, index) => {
        this.selectedIds.push(row.id);
      });
    },

    //---- Event on Sort Change
    onSortChange(params) {
      this.updateParams({
        sort: {
          type: params[0].type,
          field: params[0].field
        }
      });
      this.Get_PriceLists(this.serverParams.page);
    },

    //---- Event on Search

    onSearch(value) {
      this.search = value.searchTerm;
      this.Get_PriceLists(this.serverParams.page);
    },

    //---- Validation State Form

    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },

    //------------- Submit Validation Create & Edit Category
    Submit_Category() {
      this.$refs.Create_Category.validate().then(success => {
        if (!success) {
          this.makeToast(
            "danger",
            this.$t("Please_fill_the_form_correctly"),
            this.$t("Failed")
          );
        } else {
          if (!this.editmode) {
            this.Create_Category();
          } else {
            this.Update_Category();
          }
        }
      });
    },

    //------ Toast
    makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },

    //------------------------------ Modal  (create priceList) -------------------------------\\
    New_priceList() {
      this.reset_Form();
      this.editmode = false;
      this.$bvModal.show("New_Category");
    },

    //------------------------------ Modal (Update priceList) -------------------------------\\
    Edit_priceList(priceList) {
      this.Get_PriceLists(this.serverParams.page);
      this.reset_Form();
      this.priceListData.product = priceList.product_id;
      this.priceListData.newPrice = priceList.new_price;
      this.priceListData.discount = priceList.discount;
      this.priceList = priceList
      this.editmode = true;
      this.$bvModal.show("New_Category");
    },

    //--------------------------Get ALL PriceLists & Sub priceList ---------------------------\\

    Get_PriceLists(page) {
      let id = this.$route.params.id;
      NProgress.start();
      NProgress.set(0.1);
      axios.get(
          "priceLists/"+id+"/?skip="+0+"&limit="+100
        )
        .then(response => {
          console.log(response.data)
          this.priceLists = response.data.priceLists;
          this.totalRows = response.data.totalRows;
       
          this.priceListId = response.data.lists;
          this.products  = response.data.products;
          // Complete the animation of theprogress bar.
          NProgress.done();
          this.isLoading = false;
        })
        .catch(response => {
          // Complete the animation of theprogress bar.
          NProgress.done();
          setTimeout(() => {
            this.isLoading = false;
          }, 500);
        });
    },

    //----------------------------------Create new Category ----------------\\
    Create_Category() {
      var self = this;
      
      self.SubmitProcessing = true;
      this.priceListData.priceList = this.$route.params.id
      // self.data.append("en_title", self.priceList.en_title);
      // self.data.append("ar_title", self.priceList.ar_title);
      // self.data.append("is_active", self.priceList.is_active);
    
      axios.post("priceListsItems",  this.priceListData).then(response => {
        //  console.log(response.data)
        //  return true;ss
          // this.updateImage = false;
          this.SubmitProcessing = false;
          Fire.$emit("Event_Category");
          this.makeToast(
            "success",
            this.$t("Create.TitleCat"),
            this.$t("Success")
          );
        })
        .catch(error => {
          this.SubmitProcessing = false;
          this.makeToast("danger", this.$t("alreadyExist"), this.$t("Failed"));
        });
    },

    //---------------------------------- Update Category ----------------\\
    Update_Category() {
      var self = this;
      self.SubmitProcessing = true;
       
      self.data.append("product", self.priceListData.product);
      self.data.append("newPrice", self.priceListData.newPrice);
      self.data.append("discount", self.priceListData.discount);
      self.data.append("priceList" ,   this.$route.params.id)
      self.data.append("_method", "put");
      // for (var key of self.data.entries()){
      //   console.log(key[0] + ', '+key[1])
      // }
      // console.log(self.priceList.discount)
      // return true
      axios.post("priceListsItems/" + this.priceList.id, self.data)
        .then(response => {
        
          this.SubmitProcessing = false;
          this.updateImage = false;
          Fire.$emit("Event_Category");
          this.makeToast(
            "success",
            this.$t("Update.TitleCat"),
            this.$t("Success")
          );
        })
        .catch(error => {
          this.SubmitProcessing = false;
          this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
        });
    },

    //--------------------------- reset Form ----------------\\

    reset_Form() {
 
      this.priceListData = {
        priceList:0,
        product:0,
        discount:0,
        newPrice:0,
      }
    },

    //--------------------------- Remove Category----------------\\
    Remove_Category(id) {
      this.$swal({
        title: this.$t("Delete.Title"),
        text: this.$t("Delete.Text"),
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Delete.cancelButtonText"),
        confirmButtonText: this.$t("Delete.confirmButtonText")
      }).then(result => {
        if (result.value) {
          axios
            .delete("priceListsItems/" + id)
            .then(() => {
              this.$swal(
                this.$t("Delete.Deleted"),
                this.$t("Delete.CatDeleted"),
                "success"
              );

              Fire.$emit("Delete_Category");
            })
            .catch(() => {
              this.$swal(
                this.$t("Delete.Failed"),
                this.$t("Delete.Therewassomethingwronge"),
                "warning"
              );
            });
        }
      });
    },

    //---- Delete priceList by selection

    delete_by_selected() {
      this.$swal({
        title: this.$t("Delete.Title"),
        text: this.$t("Delete.Text"),
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Delete.cancelButtonText"),
        confirmButtonText: this.$t("Delete.confirmButtonText")
      }).then(result => {
        if (result.value) {
          // Start the progress bar.
          NProgress.start();
          NProgress.set(0.1);
          axios
            .post("priceLists/delete/by_selection", {
              selectedIds: this.selectedIds
            })
            .then(() => {
              this.$swal(
                this.$t("Delete.Deleted"),
                this.$t("Delete.CatDeleted"),
                "success"
              );

              Fire.$emit("Delete_Category");
            })
            .catch(() => {
              // Complete the animation of theprogress bar.
              setTimeout(() => NProgress.done(), 500);
              this.$swal(
                this.$t("Delete.Failed"),
                this.$t("Delete.Therewassomethingwronge"),
                "warning"
              );
            });
        }
      });
    }
  }, //end Methods

  //----------------------------- Created function-------------------

  created: function() {
    this.Get_PriceLists(1);

    Fire.$on("Event_Category", () => {
      setTimeout(() => {
        this.Get_PriceLists(this.serverParams.page);
        this.$bvModal.hide("New_Category");
      }, 500);
    });

    Fire.$on("Delete_Category", () => {
      setTimeout(() => {
        this.Get_PriceLists(this.serverParams.page);
      }, 500);
    });
  }
};
</script>