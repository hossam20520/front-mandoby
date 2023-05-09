(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{1148:function(t,e,s){"use strict";s.r(e);var a=s(4),n=s(0),i=s.n(n),o=s(7);s(16);function r(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function l(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?r(Object(s),!0).forEach((function(e){c(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function c(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var u={metaInfo:{title:"Quotation"},data:function(){return{isLoading:!0,serverParams:{sort:{field:"id",type:"desc"},page:1,perPage:10},selectedIds:[],totalRows:"",search:"",showDropdown:!1,Filter_date:"",Filter_client:"",Filter_status:"",Filter_Ref:"",Filter_warehouse:"",customers:[],warehouses:[],details:[],quotations:[],quote:{},limit:"10",email:{to:"",subject:"",message:"",client_name:"",quote_Ref:""}}},mounted:function(){var t=this;this.$root.$on("bv::dropdown::show",(function(e){t.showDropdown=!0})),this.$root.$on("bv::dropdown::hide",(function(e){t.showDropdown=!1}))},computed:l(l({},Object(a.c)(["currentUserPermissions","currentUser"])),{},{columns:function(){return[{label:this.$t("date"),field:"date",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Reference"),field:"Ref",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Customer"),field:"client_name",tdClass:"text-left",thClass:"text-left"},{label:this.$t("warehouse"),field:"warehouse_name",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Status"),field:"statut",html:!0,tdClass:"text-left",thClass:"text-left"},{label:this.$t("Total"),field:"GrandTotal",type:"decimal",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Action"),field:"actions",html:!0,tdClass:"text-right",thClass:"text-right",sortable:!1}]}}),methods:{updateParams:function(t){this.serverParams=Object.assign({},this.serverParams,t)},onPageChange:function(t){var e=t.currentPage;this.serverParams.page!==e&&(this.updateParams({page:e}),this.Get_Quotations(e))},onPerPageChange:function(t){var e=t.currentPerPage;this.limit!==e&&(this.limit=e,this.updateParams({page:1,perPage:e}),this.Get_Quotations(1))},selectionChanged:function(t){var e=this,s=t.selectedRows;this.selectedIds=[],s.forEach((function(t,s){e.selectedIds.push(t.id)}))},onSortChange:function(t){var e="";e="client_name"==t[0].field?"client_id":"warehouse_name"==t[0].field?"warehouse_id":t[0].field,this.updateParams({sort:{type:t[0].type,field:e}}),this.Get_Quotations(this.serverParams.page)},onSearch:function(t){this.search=t.searchTerm,this.Get_Quotations(this.serverParams.page)},makeToast:function(t,e,s){this.$root.$bvToast.toast(e,{title:s,variant:t,solid:!0})},Reset_Filter:function(){this.search="",this.Filter_date="",this.Filter_client="",this.Filter_status="",this.Filter_Ref="",this.Filter_warehouse="",this.Get_Quotations(this.serverParams.page)},Quotation_PDF:function(){var t=new o.default("p","pt");t.autoTable([{title:"Date",dataKey:"date"},{title:"Ref",dataKey:"Ref"},{title:"Client",dataKey:"client_name"},{title:"Status",dataKey:"statut"},{title:"Total",dataKey:"GrandTotal"}],this.quotations),t.text("Quotation List",40,25),t.save("Quotation_List.pdf")},Quotation_Excel:function(){i.a.start(),i.a.set(.1),axios.get("quotations/export/Excel",{responseType:"blob",headers:{"Content-Type":"application/json"}}).then((function(t){var e=window.URL.createObjectURL(new Blob([t.data])),s=document.createElement("a");s.href=e,s.setAttribute("download","List_Quotations.xlsx"),document.body.appendChild(s),s.click(),setTimeout((function(){return i.a.done()}),500)})).catch((function(){setTimeout((function(){return i.a.done()}),500)}))},Quote_pdf:function(t,e){i.a.start(),i.a.set(.1),axios.get("Quote_PDF/"+e,{responseType:"blob",headers:{"Content-Type":"application/json"}}).then((function(e){var s=window.URL.createObjectURL(new Blob([e.data])),a=document.createElement("a");a.href=s,a.setAttribute("download","Quotation_"+t.Ref+".pdf"),document.body.appendChild(a),a.click(),setTimeout((function(){return i.a.done()}),500)})).catch((function(){setTimeout((function(){return i.a.done()}),500)}))},QuoteEmail:function(t){this.email.to=t.client_email,this.email.quote_Ref=t.Ref,this.email.client_name=t.client_name,this.SendEmail(t.id)},SendEmail:function(t){var e=this;i.a.start(),i.a.set(.1),axios.post("quotations/sendQuote/email",{id:t,to:this.email.to,client_name:this.email.client_name,Ref:this.email.quote_Ref}).then((function(t){setTimeout((function(){return i.a.done()}),500),e.makeToast("success",e.$t("Send.TitleEmail"),e.$t("Success"))})).catch((function(t){setTimeout((function(){return i.a.done()}),500),e.makeToast("danger",e.$t("SMTPIncorrect"),e.$t("Failed"))}))},setToStrings:function(){null===this.Filter_client?this.Filter_client="":null===this.Filter_warehouse?this.Filter_warehouse="":null===this.Filter_status&&(this.Filter_status="")},Get_Quotations:function(t){var e=this;i.a.start(),i.a.set(.1),this.setToStrings(),axios.get("quotations?page="+this.serverParams.page+"&Ref="+this.Filter_Ref+"&client_id="+this.Filter_client+"&statut="+this.Filter_status+"&warehouse_id="+this.Filter_warehouse+"&date="+this.Filter_date+"&SortField="+this.serverParams.sort.field+"&SortType="+this.serverParams.sort.type+"&search="+this.search+"&limit="+this.limit).then((function(t){e.quotations=t.data.quotations,e.customers=t.data.customers,e.warehouses=t.data.warehouses,e.totalRows=t.data.totalRows,i.a.done(),e.isLoading=!1})).catch((function(t){i.a.done(),setTimeout((function(){e.isLoading=!1}),500)}))},Remove_Quotation:function(t){var e=this;this.$swal({title:this.$t("Delete.Title"),text:this.$t("Delete.Text"),type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:this.$t("Delete.cancelButtonText"),confirmButtonText:this.$t("Delete.confirmButtonText")}).then((function(s){s.value&&(i.a.start(),i.a.set(.1),axios.delete("quotations/"+t).then((function(){e.$swal(e.$t("Delete.Deleted"),e.$t("Delete.QuoteDeleted"),"success"),Fire.$emit("Delete_Quote")})).catch((function(){setTimeout((function(){return i.a.done()}),500),e.$swal(e.$t("Delete.Failed"),e.$t("Delete.Therewassomethingwronge"),"warning")})))}))},delete_by_selected:function(){var t=this;this.$swal({title:this.$t("Delete.Title"),text:this.$t("Delete.Text"),type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:this.$t("Delete.cancelButtonText"),confirmButtonText:this.$t("Delete.confirmButtonText")}).then((function(e){e.value&&(i.a.start(),i.a.set(.1),axios.post("quotations/delete/by_selection",{selectedIds:t.selectedIds}).then((function(){t.$swal(t.$t("Delete.Deleted"),t.$t("Delete.QuoteDeleted"),"success"),Fire.$emit("Delete_Quote")})).catch((function(){setTimeout((function(){return i.a.done()}),500),t.$swal(t.$t("Delete.Failed"),t.$t("Delete.Therewassomethingwronge"),"warning")})))}))}},created:function(){var t=this;this.Get_Quotations(1),Fire.$on("Delete_Quote",(function(){setTimeout((function(){t.Get_Quotations(t.serverParams.page),setTimeout((function(){return i.a.done()}),500)}),500)}))}},d=s(2),h=Object(d.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-content"},[s("breadcumb",{attrs:{page:t.$t("ListQuotations"),folder:t.$t("Quotations")}}),t._v(" "),t.isLoading?s("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):s("div",[s("vue-good-table",{attrs:{mode:"remote",columns:t.columns,totalRows:t.totalRows,rows:t.quotations,"search-options":{enabled:!0,placeholder:t.$t("Search_this_table")},"select-options":{enabled:!0,clearSelectionText:""},"pagination-options":{enabled:!0,mode:"records",nextLabel:"next",prevLabel:"prev"},styleClass:t.showDropdown?"tableOne table-hover vgt-table full-height":"tableOne table-hover vgt-table non-height"},on:{"on-page-change":t.onPageChange,"on-per-page-change":t.onPerPageChange,"on-sort-change":t.onSortChange,"on-search":t.onSearch,"on-selected-rows-change":t.selectionChanged},scopedSlots:t._u([{key:"table-row",fn:function(e){return["actions"==e.column.field?s("span",[s("div",[s("b-dropdown",{attrs:{id:"dropdown-left",variant:"link",text:"Left align","toggle-class":"text-decoration-none",size:"lg","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[s("span",{staticClass:"_dot _r_block-dot bg-dark"}),t._v(" "),s("span",{staticClass:"_dot _r_block-dot bg-dark"}),t._v(" "),s("span",{staticClass:"_dot _r_block-dot bg-dark"})]},proxy:!0}],null,!0)},[t._v(" "),s("b-navbar-nav",[s("b-dropdown-item",{attrs:{title:"Show",to:"/app/quotations/detail/"+e.row.id}},[s("i",{staticClass:"nav-icon i-Eye font-weight-bold mr-2"}),t._v("\n                  "+t._s(t.$t("DetailQuote"))+"\n                ")])],1),t._v(" "),t.currentUserPermissions.includes("Quotations_edit")?s("b-dropdown-item",{attrs:{title:"Edit",to:"/app/quotations/edit/"+e.row.id}},[s("i",{staticClass:"nav-icon i-Pen-2 font-weight-bold mr-2"}),t._v("\n                "+t._s(t.$t("EditQuote"))+"\n              ")]):t._e(),t._v(" "),t.currentUserPermissions.includes("Quotations_edit")?s("b-dropdown-item",{attrs:{title:"Create Sale",to:"/app/quotations/Create_sale/"+e.row.id}},[s("i",{staticClass:"nav-icon i-Add font-weight-bold mr-2"}),t._v("\n                "+t._s(t.$t("CreateSale"))+"\n              ")]):t._e(),t._v(" "),s("b-dropdown-item",{attrs:{title:"PDF"},on:{click:function(s){return t.Quote_pdf(e.row,e.row.id)}}},[s("i",{staticClass:"nav-icon i-File-TXT font-weight-bold mr-2"}),t._v("\n                "+t._s(t.$t("DownloadPdf"))+"\n              ")]),t._v(" "),s("b-dropdown-item",{attrs:{title:"Email"},on:{click:function(s){return t.QuoteEmail(e.row,e.row.id)}}},[s("i",{staticClass:"nav-icon i-Envelope-2 font-weight-bold mr-2"}),t._v("\n                "+t._s(t.$t("QuoteEmail"))+"\n              ")]),t._v(" "),t.currentUserPermissions.includes("Quotations_delete")?s("b-dropdown-item",{attrs:{title:"Delete"},on:{click:function(s){return t.Remove_Quotation(e.row.id)}}},[s("i",{staticClass:"nav-icon i-Close-Window font-weight-bold mr-2"}),t._v("\n                "+t._s(t.$t("DeleteQuote"))+"\n              ")]):t._e()],1)],1)]):"statut"==e.column.field?s("div",["sent"==e.row.statut?s("span",{staticClass:"badge badge-outline-success"},[t._v(t._s(t.$t("Sent")))]):s("span",{staticClass:"badge badge-outline-info"},[t._v(t._s(t.$t("Pending")))])]):t._e()]}}])},[s("div",{attrs:{slot:"selected-row-actions"},slot:"selected-row-actions"},[s("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(e){return t.delete_by_selected()}}},[t._v(t._s(t.$t("Del")))])]),t._v(" "),s("div",{staticClass:"mt-2 mb-3",attrs:{slot:"table-actions"},slot:"table-actions"},[s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-right",modifiers:{"sidebar-right":!0}}],attrs:{variant:"outline-info ripple m-1",size:"sm"}},[s("i",{staticClass:"i-Filter-2"}),t._v("\n          "+t._s(t.$t("Filter"))+"\n        ")]),t._v(" "),s("b-button",{attrs:{size:"sm",variant:"outline-success ripple m-1"},on:{click:function(e){return t.Quotation_PDF()}}},[s("i",{staticClass:"i-File-Copy"}),t._v(" PDF\n        ")]),t._v(" "),s("b-button",{attrs:{size:"sm",variant:"outline-danger ripple m-1"},on:{click:function(e){return t.Quotation_Excel()}}},[s("i",{staticClass:"i-File-Excel"}),t._v(" EXCEL\n        ")]),t._v(" "),t.currentUserPermissions&&t.currentUserPermissions.includes("Quotations_add")?s("router-link",{staticClass:"btn-sm btn btn-primary ripple btn-icon m-1",attrs:{to:"/app/quotations/store"}},[s("span",{staticClass:"ul-btn__icon"},[s("i",{staticClass:"i-Add"})]),t._v(" "),s("span",{staticClass:"ul-btn__text ml-1"},[t._v(t._s(t.$t("Add")))])]):t._e()],1)])],1),t._v(" "),s("b-sidebar",{attrs:{id:"sidebar-right",title:t.$t("Filter"),"bg-variant":"white",right:"",shadow:""}},[s("div",{staticClass:"px-3 py-2"},[s("b-row",[s("b-col",{attrs:{md:"12"}},[s("b-form-group",{attrs:{label:t.$t("date")}},[s("b-form-input",{attrs:{type:"date"},model:{value:t.Filter_date,callback:function(e){t.Filter_date=e},expression:"Filter_date"}})],1)],1),t._v(" "),s("b-col",{attrs:{md:"12"}},[s("b-form-group",{attrs:{label:t.$t("Reference")}},[s("b-form-input",{attrs:{label:"Reference",placeholder:t.$t("Reference")},model:{value:t.Filter_Ref,callback:function(e){t.Filter_Ref=e},expression:"Filter_Ref"}})],1)],1),t._v(" "),s("b-col",{attrs:{md:"12"}},[s("b-form-group",{attrs:{label:t.$t("Customer")}},[s("v-select",{attrs:{reduce:function(t){return t.value},placeholder:t.$t("Choose_Customer"),options:t.customers.map((function(t){return{label:t.name,value:t.id}}))},model:{value:t.Filter_client,callback:function(e){t.Filter_client=e},expression:"Filter_client"}})],1)],1),t._v(" "),s("b-col",{attrs:{md:"12"}},[s("b-form-group",{attrs:{label:t.$t("warehouse")}},[s("v-select",{attrs:{reduce:function(t){return t.value},placeholder:t.$t("Choose_Warehouse"),options:t.warehouses.map((function(t){return{label:t.name,value:t.id}}))},model:{value:t.Filter_warehouse,callback:function(e){t.Filter_warehouse=e},expression:"Filter_warehouse"}})],1)],1),t._v(" "),s("b-col",{attrs:{md:"12"}},[s("b-form-group",{attrs:{label:t.$t("Status")}},[s("v-select",{attrs:{reduce:function(t){return t.value},placeholder:t.$t("Choose_Status"),options:[{label:"Sent",value:"sent"},{label:"Pending",value:"pending"}]},model:{value:t.Filter_status,callback:function(e){t.Filter_status=e},expression:"Filter_status"}})],1)],1),t._v(" "),s("b-col",{attrs:{md:"6",sm:"12"}},[s("b-button",{attrs:{variant:"primary ripple m-1",size:"sm",block:""},on:{click:function(e){return t.Get_Quotations(t.serverParams.page)}}},[s("i",{staticClass:"i-Filter-2"}),t._v("\n            "+t._s(t.$t("Filter"))+"\n          ")])],1),t._v(" "),s("b-col",{attrs:{md:"6",sm:"12"}},[s("b-button",{attrs:{variant:"danger ripple m-1",size:"sm",block:""},on:{click:function(e){return t.Reset_Filter()}}},[s("i",{staticClass:"i-Power-2"}),t._v("\n            "+t._s(t.$t("Reset"))+"\n          ")])],1)],1)],1)])],1)}),[],!1,null,null,null);e.default=h.exports}}]);