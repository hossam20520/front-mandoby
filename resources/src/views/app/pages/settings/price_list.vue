<template>
  <div class="main-content">
    <breadcumb :page="$t('PriceLists')" :folder="$t('Settings')"/>

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
        @on-search="onSearch"
        :search-options="{
        enabled: true,
        placeholder: $t('Search_this_table'),  
      }"
        :select-options="{ 
          enabled: true ,
          clearSelectionText: '',
        }"
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

            <router-link
              v-b-tooltip.hover
              title="View"
              :to="{ name:'price_list_items', params: { id: props.row.id} }"
            >
              <i class="i-Eye text-25 text-info"></i>
            </router-link>
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
            <b-col md="12">
              <validation-provider
                name="Name priceList"
                :rules="{ required: true}"
                v-slot="validationContext"
              >
                <b-form-group :label="$t('en_title')">
                  <b-form-input
                    :placeholder="$t('Enter_en_name_priceList')"
                    :state="getValidationState(validationContext)"
                    aria-describedby="Name-feedback"
                    label="en_title"
                    v-model="priceList.en_title"
                  ></b-form-input>
                  <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>

          <!-- ar_title priceList -->
            <b-col md="12">
              <validation-provider
                name="ar Name priceList"
                :rules="{ required: true}"
                v-slot="validationContext"
              >
                <b-form-group :label="$t('ar_title')">
                  <b-form-input
                    :placeholder="$t('Enter_ar_name_priceList')"
                    :state="getValidationState(validationContext)"
                    aria-describedby="Name-feedback"
                    label="ar_title"
                    v-model="priceList.ar_title"
                  ></b-form-input>
                  <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>


              <b-col md="12">
                <ValidationProvider rules vid="is_active" v-slot="x">
                      <div class="form-check">
                        <label class="checkbox checkbox-outline-primary">
                          <input type="checkbox"  v-model="priceList.is_active">
                          <span>{{$t('is_active')}}</span>
                          <span class="checkmark"></span>
                        </label>
                      </div>
                </ValidationProvider>
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

      priceList: {
        id: "",
        ar_title: "",
        en_title: "",
        is_active: true,
      
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
      this.priceList = priceList;
      this.editmode = true;
      this.$bvModal.show("New_Category");
    },

    //--------------------------Get ALL PriceLists & Sub priceList ---------------------------\\

    Get_PriceLists(page) {
      // Start the progress bar.
      NProgress.start();
      NProgress.set(0.1);
      axios.get(
          "priceLists?page=" +
            page +
            "&SortField=" +
            this.serverParams.sort.field +
            "&SortType=" +
            this.serverParams.sort.type +
            "&search=" +
            this.search +
            "&limit=" +
            this.limit
        )
        .then(response => {
       
          this.priceLists = response.data.priceLists;
          this.totalRows = response.data.totalRows;

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
      self.data.append("en_title", self.priceList.en_title);
      self.data.append("ar_title", self.priceList.ar_title);
      self.data.append("is_active", self.priceList.is_active);
      axios.post("priceLists",  self.data).then(response => {
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
          this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
        });
    },

    //---------------------------------- Update Category ----------------\\
    Update_Category() {
      var self = this;
      self.SubmitProcessing = true;
      self.data.append("en_title", self.priceList.en_title);
      self.data.append("ar_title", self.priceList.ar_title);
      self.data.append("is_active", self.priceList.is_active);
      self.data.append("_method", "put");
      // for (var key of self.data.entries()){
      //   console.log(key[0] + ', '+key[1])
      // }
      
      axios.post("priceLists/" + this.priceList.id, self.data)
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
      this.priceList = {
        id: "",
        ar_title: "",
        en_title: "",
        is_active: "" 
      
      };
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
            .delete("priceLists/" + id)
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