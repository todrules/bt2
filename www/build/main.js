webpackJsonp([0],{

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = (function () {
    function DashboardComponent() {
        this.title = 'Sample Dashboard';
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['Q1 2016', 'Q2 2016', 'Q3 2016', 'Q4 2016', 'Q1 2017', 'Q2 2017'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [], label: 'Hamburger Sales' },
            { data: [], label: 'Hot Dog Sales' }
        ];
        this.barChartData0 = [
            { data: [59, 80, 81, 56, 55, 40], label: 'Hamburger Sales' },
            { data: [48, 40, 19, 86, 27, 90], label: 'Hot Dog Sales' }
        ];
        this.barChartData1 = [
            { data: [65, 75, 60, 45, 48, 57], label: 'Hamburger Sales' },
            { data: [52, 38, 40, 71, 42, 78], label: 'Hot Dog Sales' }
        ];
        this.barChartData2 = [
            { data: [71, 65, 70, 75, 40, 80], label: 'Hamburger Sales' },
            { data: [78, 68, 40, 65, 52, 75], label: 'Hot Dog Sales' }
        ];
        this.barSeries = 1;
        this.partial = '45,125,210';
        this.barChartColors = [
            {
                backgroundColor: ["rgba(" + this.partial + ",0.6)", "rgba(" + this.partial + ",0.6)", "rgba(" + this.partial + ",0.6)", "rgba(" + this.partial + ",0.6)", "rgba(" + this.partial + ",0.6)", "rgba(" + this.partial + ",0.6)"],
                borderColor: ["rgba(" + this.partial + ",0.9)", "rgba(" + this.partial + ",0.9)", "rgba(" + this.partial + ",0.9)", "rgba(" + this.partial + ",0.9)", "rgba(" + this.partial + ",0.9)", "rgba(" + this.partial + ",0.9)"],
                hoverBackgroundColor: ["rgba(" + this.partial + ",0.7)", "rgba(" + this.partial + ",0.7)", "rgba(" + this.partial + ",0.7)", "rgba(" + this.partial + ",0.7)", "rgba(" + this.partial + ",0.7)", "rgba(" + this.partial + ",0.7)"],
                hoverBorderColor: ["rgba(" + this.partial + ",0.9)", "rgba(" + this.partial + ",0.9)", "rgba(" + this.partial + ",0.9)", "rgba(" + this.partial + ",0.9)", "rgba(" + this.partial + ",0.9)", "rgba(" + this.partial + ",0.9)"]
            },
            {
                backgroundColor: ['rgba(55,59,109,0.6)', 'rgba(55,59,109,0.6)', 'rgba(55,59,109,0.6)', 'rgba(55,59,109,0.6)', 'rgba(55,59,109,0.6)', 'rgba(55,59,109,0.6)'],
                borderColor: ['rgba(55,59,109,0.9)', 'rgba(55,59,109,0.9)', 'rgba(55,59,109,0.9)', 'rgba(55,59,109,0.9)', 'rgba(55,59,109,0.9)', 'rgba(55,59,109,0.9)', 'rgba(55,59,109,0.9)'],
                hoverBackgroundColor: ['rgba(55,59,109,0.7)', 'rgba(55,59,109,0.7)', 'rgba(55,59,109,0.7)', 'rgba(55,59,109,0.7)', 'rgba(55,59,109,0.7)', 'rgba(55,59,109,0.7)'],
                hoverBorderColor: ['rgba(55,59,109,0.9)', 'rgba(55,59,109,0.9)', 'rgba(55,59,109,0.9)', 'rgba(55,59,109,0.9)', 'rgba(55,59,109,0.9)', 'rgba(55,59,109,0.9)', 'rgba(55,59,109,0.9)']
            }
        ];
        this.doughnutChartLabels = ['Credit Card', 'ACH Debit', 'Bitcoin', 'Apple Pay'];
        this.doughnutChartData = [];
        this.doughnutChartData0 = [220, 12, 64, 45];
        this.doughnutChartData1 = [180, 48, 100, 120];
        this.doughnutChartData2 = [150, 52, 36, 38];
        this.doughSeries = 1;
        this.doughnutChartType = 'doughnut';
        this.doughnutChartColors = [
            {
                backgroundColor: ['rgba(179,186,189,0.6)', 'rgba(49,54,56,0.6)', 'rgba(76,84,87,0.6)', 'rgba(114,126,131,0.6)', 'rgba(28,32,33,0.6)'],
                borderColor: ['rgba(255,255,255,0.3)', 'rgba(255,255,255,0.3)', 'rgba(255,255,255,0.3)', 'rgba(255,255,255,0.3)', 'rgba(255,255,255,0.3)', 'rgba(207,79,156,0.3)'],
                hoverBackgroundColor: ['rgba(179,186,189,0.9)', 'rgba(49,54,56,0.9)', 'rgba(76,84,87,0.9)', 'rgba(114,126,131,0.9)', 'rgba(28,32,33,0.9)'],
                hoverBorderColor: ['rgba(255,255,255,0.3)', 'rgba(255,255,255,0.3)', 'rgba(255,255,255,0.3)', 'rgba(255,255,255,0.3)', 'rgba(255,255,255,0.3)', 'rgba(255,255,255,0.3)']
            }
        ];
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Utilities' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Payroll' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Food Cost' }
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
            responsive: true,
            series: {
                0: {
                    color: 'rgba(55,34,72,1)'
                },
                1: {
                    color: 'rgba(68,53,91,1)'
                },
                2: {
                    color: 'rgba(61,43,61,1)'
                }
            }
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(55,34,72,0.2)',
                borderColor: 'rgba(55,34,72,1)',
                pointBackgroundColor: 'rgba(55,34,72,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(55,34,72,0.8)'
            },
            {
                backgroundColor: 'rgba(68,53,91,0.2)',
                borderColor: 'rgba(68,53,91,1)',
                pointBackgroundColor: 'rgba(68,53,91,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(68,53,91,1)'
            },
            {
                backgroundColor: 'rgba(61,43,61,0.2)',
                borderColor: 'rgba(61,43,61,1)',
                pointBackgroundColor: 'rgba(61,43,61,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(61,43,61,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    DashboardComponent.prototype.randomize = function () {
        var _lineChartData = new Array(this.lineChartData.length);
        for (var i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
            for (var j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.lineChartData = _lineChartData;
    };
    DashboardComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.updatePieChart = function () {
        switch (this.doughSeries) {
            case 0:
                console.log('zero');
                this.doughSeries++;
                return this.doughnutChartData = this.doughnutChartData0;
            case 1:
                this.doughSeries++;
                return this.doughnutChartData = this.doughnutChartData1;
            case 2:
                this.doughSeries = 0;
                return this.doughnutChartData = this.doughnutChartData2;
            default:
                return this.doughnutChartData = this.doughnutChartData0;
        }
    };
    DashboardComponent.prototype.updateBarChart = function () {
        switch (this.barSeries) {
            case 0:
                console.log('zero');
                this.barSeries++;
                return this.barChartData = this.barChartData0;
            case 1:
                this.barSeries++;
                return this.barChartData = this.barChartData1;
            case 2:
                this.barSeries = 0;
                return this.barChartData = this.barChartData2;
            default:
                return this.barChartData = this.barChartData0;
        }
    };
    DashboardComponent.prototype.ngOnInit = function () {
        Object.assign(this.barChartData, this.barChartData0);
        Object.assign(this.doughnutChartData, this.doughnutChartData0);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dash',template:/*ion-inline-start:"/Users/gtgoodwin/projects/blackthorn/src/features/dashboard/dashboard.template.html"*/'<ion-header no-border style="box-shadow: none;">\n  <ion-navbar color="primary" no-border style="box-shadow: none !important; border-bottom: 1px solid #fff;">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title><span style="font-weight: 400 !important;">{{ title }}</span></ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row align-items-start justify-content-start>\n      <ion-col align-self-center col-md-6>\n        <ion-card class="dash-card" style="height: 100%; background-color: #fff;">\n          <ion-card-title style="color: #666; font-weight: 300;">Monthly Expenses</ion-card-title>\n          <ion-card-content>\n            <div style="display: block;">\n              <canvas baseChart [datasets]="lineChartData" [labels]="lineChartLabels" [options]="lineChartOptions"\n                [colors]="lineChartColors" [legend]="lineChartLegend" [chartType]="lineChartType" (chartHover)="chartHovered($event)"\n                (chartClick)="chartClicked($event)"></canvas>\n            </div>\n          </ion-card-content>\n          <div fxLayout="row" fxLayoutAlign="end end">\n            <button ion-button color="secondary" (click)="randomize()">Randomize</button>\n          </div>\n        </ion-card>\n        <ion-card class="dash-card" style="width: 100%; background-color: #fff;">\n          <ion-card-title style="color: #666; font-weight: 300;">Quarterly Sales</ion-card-title>\n          <ion-card-content>\n            <div style="display: block">\n              <canvas baseChart [datasets]="barChartData" [colors]="barChartColors" [labels]="barChartLabels" [options]="barChartOptions"\n                [legend]="barChartLegend" [chartType]="barChartType" (chartHover)="chartHovered($event)" (chartClick)="chartClicked($event)"></canvas>\n            </div>\n          </ion-card-content>\n          <div fxLayout="row" fxLayoutAlign="end end">\n            <button ion-button color="secondary" (click)="updateBarChart()">Update Data</button>\n          </div>\n        </ion-card>\n      </ion-col>\n      <ion-col align-self-start col-md-6>\n        <ion-card class="dash-card" style="background-color: #fff;">\n          <ion-card-title style="color: #666; font-weight: 300;">Payment Types</ion-card-title>\n          <ion-card-content>\n            <div style="display: block">\n              <canvas baseChart [colors]="doughnutChartColors" [data]="doughnutChartData" [labels]="doughnutChartLabels" [chartType]="doughnutChartType"\n                (chartHover)="chartHovered($event)" (chartClick)="chartClicked($event)"></canvas>\n            </div>\n          </ion-card-content>\n          <div fxLayout="row" fxLayoutAlign="end end">\n            <button ion-button color="secondary" (click)="updatePieChart()">Update Data</button>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n\n'/*ion-inline-end:"/Users/gtgoodwin/projects/blackthorn/src/features/dashboard/dashboard.template.html"*/
    })
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaymentComponent = (function () {
    function PaymentComponent(_http) {
        this._http = _http;
        this.title = 'Make a Payment';
        this.formCard = {
            number: null,
            exp_month: null,
            exp_year: null,
            cvc: null
        };
        this.http = _http;
    }
    PaymentComponent.prototype.ngOnInit = function () {
    };
    PaymentComponent.prototype.makePayment = function () {
    };
    PaymentComponent.prototype.createToken = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer pk_test_HYN4uPqYEk3NruqHTj6jemDw'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var expire = this.formCard.exp_month.split(' / ');
        this.formCard.exp_month = expire[0];
        this.formCard.exp_year = expire[1];
        var cc = this.formCard.number.split(' ');
        this.formCard.number = cc[0].concat(cc[1]).concat(cc[2]).concat(cc[3]);
        this.diag2 = JSON.stringify(this.formCard);
        var path = 'card[number]=' + this.formCard.number + '&card[cvc]=' + this.formCard.cvc + '&card[exp_month]=' + this.formCard.exp_month + '&card[exp_year]=' + this.formCard.exp_year + '&key=pk_test_HYN4uPqYEk3NruqHTj6jemDw';
        return this.http.post('https://api.stripe.com/v1/tokens?' + path, null, options).subscribe(function (res) {
            var body = res.json();
            _this.diag = JSON.stringify(body);
            console.log(body);
        });
    };
    return PaymentComponent;
}());
PaymentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-payment',template:/*ion-inline-start:"/Users/gtgoodwin/projects/blackthorn/src/features/payment/payment.template.html"*/'<ion-header no-border style="box-shadow: none;">\n  <ion-navbar color="primary" no-border style="box-shadow: none !important; border-bottom: 1px solid #fff;">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title><span style="font-weight: 400 !important;">{{ title }}</span></ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n\n<div fxLayout="column" fxLayoutAlign="stretch center">\n  <ion-card style="width: 100%; max-width: 400px; min-height: 300px; background-color: #fff; box-shadow: 0 1px 5px rgba(0,0,0,0.07);">\n  <ion-card-content>\n  <ion-card-header>\n    <ion-card-title><h1 style="color: #666;">{{title}}</h1></ion-card-title>\n  </ion-card-header>\n    <form #cardForm="ngForm" (ngSubmit)="createToken()">\n      <div fxLayout="column" fxLayoutAlign="start start" style="margin-top: 30px">\n        <div fxLayout="row" fxLayoutAlign="start center" style="margin: 5px; width: 100%;">\n          <label for="number">Card&nbsp;number</label>\n          <div fxLayout="row" fxLayoutAlign="end center" style="width: 100%;">\n            <input name="number" style="width: 200px; background-color: #fff9dd; border: 1px solid #f1f1f1; border-radius: 4px;" placeholder="4242 4242 4242 4242" type="tel" id="number" [(ngModel)]="formCard.number" ccNumber>\n          </div>\n        </div>\n        <div fxLayout="row" fxLayoutAlign="start center" style="margin: 5px; width: 100%;">\n          <label for="exp_month">Expiration&nbsp;Date</label>\n          <div fxLayout="row" fxLayoutAlign="end center" style="width: 100%;">\n          <input  name="exp_month" placeholder="01/2019" style="width: 200px; background-color: #fff9dd; border: 1px solid #f1f1f1; border-radius: 4px;" id="exp_month" type="tel"  [(ngModel)]="formCard.exp_month" ccExp >\n          </div>\n        </div>\n        <div fxLayout="row" fxLayoutAlign="start center" style="margin: 5px; width: 100%;">\n          <label for="cvc">CVC</label>\n          <div fxLayout="row" fxLayoutAlign="end center" style="width: 100%;">\n            <input name="cvc" maxlength="4" style="width: 200px; background-color: #fff9dd; border: 1px solid #f1f1f1; border-radius: 4px;"\n              placeholder="123" id="cvc" autocomplete="off" type="tel" [(ngModel)]="formCard.cvc" ccCVC>\n          </div>\n\n\n        </div>\n        <div style="width: 100%; " fxLayout="row" fxLayoutAlign="end end">\n          <button color="grass" style="margin-right: 45px; margin-top: 30px;" ion-button type="submit">Submit Payment</button>\n        </div>\n\n      </div>\n    </form>\n\n  </ion-card-content>\n\n\n  </ion-card>\n  <div *ngIf="diag2" style="max-width: 400px; color: #444; margin-top: 8px; overflow: scroll;">\n    Request:\n    <div *ngFor="let items of diag2.split(\',\')">\n      {{ items }}\n    </div>\n  </div>\n  <div *ngIf="diag" style="max-width: 400px; color: #444; margin-top: 4px; overflow: scroll;">\n    Response:\n    <div *ngFor="let items of diag.split(\',\')">\n        {{ items }}\n    </div>\n  </div>\n\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/gtgoodwin/projects/blackthorn/src/features/payment/payment.template.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], PaymentComponent);

//# sourceMappingURL=payment.component.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rxjs_operators__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configuration__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__env_environment__ = __webpack_require__(43);
/**
 * bt-server
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */







var CompanyService = (function () {
    function CompanyService(http, basePath, configuration) {
        this.http = http;
        this.basePath = 'https://localhost/api';
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_3__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     *
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    CompanyService.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    CompanyService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    /**
     *
     * @summary Count instances of the model matched by where from the data source.
     * @param where Criteria to match model instances
     */
    CompanyService.prototype.companyCount = function (where, extraHttpRequestParams) {
        return this.companyCountWithHttpInfo(where, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Create a new instance of the model and persist it into the data source.
     * @param data Model instance data
     */
    CompanyService.prototype.companyCreate = function (data, extraHttpRequestParams) {
        return this.companyCreateWithHttpInfo(data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Create a change stream.
     * @param options
     */
    CompanyService.prototype.companyCreateChangeStreamGetCompaniesChangeStream = function (options, extraHttpRequestParams) {
        return this.companyCreateChangeStreamGetCompaniesChangeStreamWithHttpInfo(options, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.blob();
            }
        });
    };
    /**
     *
     * @summary Create a change stream.
     * @param options
     */
    CompanyService.prototype.companyCreateChangeStreamPostCompaniesChangeStream = function (options, extraHttpRequestParams) {
        return this.companyCreateChangeStreamPostCompaniesChangeStreamWithHttpInfo(options, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.blob();
            }
        });
    };
    /**
     *
     * @summary Delete a model instance by {{id}} from the data source.
     * @param id Model id
     */
    CompanyService.prototype.companyDeleteById = function (id, extraHttpRequestParams) {
        return this.companyDeleteByIdWithHttpInfo(id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Check whether a model instance exists in the data source.
     * @param id Model id
     */
    CompanyService.prototype.companyExistsGetCompaniesidExists = function (id, extraHttpRequestParams) {
        return this.companyExistsGetCompaniesidExistsWithHttpInfo(id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Check whether a model instance exists in the data source.
     * @param id Model id
     */
    CompanyService.prototype.companyExistsHeadCompaniesid = function (id, extraHttpRequestParams) {
        return this.companyExistsHeadCompaniesidWithHttpInfo(id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Find all instances of the model matched by filter from the data source.
     * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    CompanyService.prototype.companyFind = function (filter, extraHttpRequestParams) {
        return this.companyFindWithHttpInfo(filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Find a model instance by {{id}} from the data source.
     * @param id Model id
     * @param filter Filter defining fields and include - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    CompanyService.prototype.companyFindById = function (id, filter, extraHttpRequestParams) {
        return this.companyFindByIdWithHttpInfo(id, filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Find first instance of the model matched by filter from the data source.
     * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    CompanyService.prototype.companyFindOne = function (filter, extraHttpRequestParams) {
        return this.companyFindOneWithHttpInfo(filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Patch an existing model instance or insert a new one into the data source.
     * @param data Model instance data
     */
    CompanyService.prototype.companyPatchOrCreate = function (data, extraHttpRequestParams) {
        return this.companyPatchOrCreateWithHttpInfo(data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Counts employees of Company.
     * @param id Company id
     * @param where Criteria to match model instances
     */
    CompanyService.prototype.companyPrototypeCountEmployees = function (id, where, extraHttpRequestParams) {
        return this.companyPrototypeCountEmployeesWithHttpInfo(id, where, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Counts transactions of Company.
     * @param id Company id
     * @param where Criteria to match model instances
     */
    CompanyService.prototype.companyPrototypeCountTransactions = function (id, where, extraHttpRequestParams) {
        return this.companyPrototypeCountTransactionsWithHttpInfo(id, where, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Creates a new instance in employees of this model.
     * @param id Company id
     * @param data
     */
    CompanyService.prototype.companyPrototypeCreateEmployees = function (id, data, extraHttpRequestParams) {
        return this.companyPrototypeCreateEmployeesWithHttpInfo(id, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Creates a new instance in transactions of this model.
     * @param id Company id
     * @param data
     */
    CompanyService.prototype.companyPrototypeCreateTransactions = function (id, data, extraHttpRequestParams) {
        return this.companyPrototypeCreateTransactionsWithHttpInfo(id, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Deletes all employees of this model.
     * @param id Company id
     */
    CompanyService.prototype.companyPrototypeDeleteEmployees = function (id, extraHttpRequestParams) {
        return this.companyPrototypeDeleteEmployeesWithHttpInfo(id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Deletes all transactions of this model.
     * @param id Company id
     */
    CompanyService.prototype.companyPrototypeDeleteTransactions = function (id, extraHttpRequestParams) {
        return this.companyPrototypeDeleteTransactionsWithHttpInfo(id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Delete a related item by id for employees.
     * @param fk Foreign key for employees
     * @param id Company id
     */
    CompanyService.prototype.companyPrototypeDestroyByIdEmployees = function (fk, id, extraHttpRequestParams) {
        return this.companyPrototypeDestroyByIdEmployeesWithHttpInfo(fk, id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Delete a related item by id for transactions.
     * @param fk Foreign key for transactions
     * @param id Company id
     */
    CompanyService.prototype.companyPrototypeDestroyByIdTransactions = function (fk, id, extraHttpRequestParams) {
        return this.companyPrototypeDestroyByIdTransactionsWithHttpInfo(fk, id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Find a related item by id for employees.
     * @param fk Foreign key for employees
     * @param id Company id
     */
    CompanyService.prototype.companyPrototypeFindByIdEmployees = function (fk, id, extraHttpRequestParams) {
        return this.companyPrototypeFindByIdEmployeesWithHttpInfo(fk, id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Find a related item by id for transactions.
     * @param fk Foreign key for transactions
     * @param id Company id
     */
    CompanyService.prototype.companyPrototypeFindByIdTransactions = function (fk, id, extraHttpRequestParams) {
        return this.companyPrototypeFindByIdTransactionsWithHttpInfo(fk, id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Queries employees of Company.
     * @param id Company id
     * @param filter
     */
    CompanyService.prototype.companyPrototypeGetEmployees = function (id, filter, extraHttpRequestParams) {
        return this.companyPrototypeGetEmployeesWithHttpInfo(id, filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Queries transactions of Company.
     * @param id Company id
     * @param filter
     */
    CompanyService.prototype.companyPrototypeGetTransactions = function (id, filter, extraHttpRequestParams) {
        return this.companyPrototypeGetTransactionsWithHttpInfo(id, filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Patch attributes for a model instance and persist it into the data source.
     * @param id Company id
     * @param data An object of model property name/value pairs
     */
    CompanyService.prototype.companyPrototypePatchAttributes = function (id, data, extraHttpRequestParams) {
        return this.companyPrototypePatchAttributesWithHttpInfo(id, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Update a related item by id for employees.
     * @param fk Foreign key for employees
     * @param id Company id
     * @param data
     */
    CompanyService.prototype.companyPrototypeUpdateByIdEmployees = function (fk, id, data, extraHttpRequestParams) {
        return this.companyPrototypeUpdateByIdEmployeesWithHttpInfo(fk, id, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Update a related item by id for transactions.
     * @param fk Foreign key for transactions
     * @param id Company id
     * @param data
     */
    CompanyService.prototype.companyPrototypeUpdateByIdTransactions = function (fk, id, data, extraHttpRequestParams) {
        return this.companyPrototypeUpdateByIdTransactionsWithHttpInfo(fk, id, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Replace attributes for a model instance and persist it into the data source.
     * @param id Model id
     * @param data Model instance data
     */
    CompanyService.prototype.companyReplaceByIdPostCompaniesidReplace = function (id, data, extraHttpRequestParams) {
        return this.companyReplaceByIdPostCompaniesidReplaceWithHttpInfo(id, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Replace attributes for a model instance and persist it into the data source.
     * @param id Model id
     * @param data Model instance data
     */
    CompanyService.prototype.companyReplaceByIdPutCompaniesid = function (id, data, extraHttpRequestParams) {
        return this.companyReplaceByIdPutCompaniesidWithHttpInfo(id, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Replace an existing model instance or insert a new one into the data source.
     * @param data Model instance data
     */
    CompanyService.prototype.companyReplaceOrCreatePostCompaniesReplaceOrCreate = function (data, extraHttpRequestParams) {
        return this.companyReplaceOrCreatePostCompaniesReplaceOrCreateWithHttpInfo(data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Replace an existing model instance or insert a new one into the data source.
     * @param data Model instance data
     */
    CompanyService.prototype.companyReplaceOrCreatePutCompanies = function (data, extraHttpRequestParams) {
        return this.companyReplaceOrCreatePutCompaniesWithHttpInfo(data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Update instances of the model matched by {{where}} from the data source.
     * @param where Criteria to match model instances
     * @param data An object of model property name/value pairs
     */
    CompanyService.prototype.companyUpdateAll = function (where, data, extraHttpRequestParams) {
        return this.companyUpdateAllWithHttpInfo(where, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Update an existing model instance or insert a new one into the data source based on the where criteria.
     * @param where Criteria to match model instances
     * @param data An object of model property name/value pairs
     */
    CompanyService.prototype.companyUpsertWithWhere = function (where, data, extraHttpRequestParams) {
        return this.companyUpsertWithWhereWithHttpInfo(where, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * Count instances of the model matched by where from the data source.
     *
     * @param where Criteria to match model instances
     */
    CompanyService.prototype.companyCountWithHttpInfo = function (where, extraHttpRequestParams) {
        var path = this.basePath + '/Companies/count';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (where !== undefined) {
            queryParameters.set('where', where);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Create a new instance of the model and persist it into the data source.
     *
     * @param data Model instance data
     */
    CompanyService.prototype.companyCreateWithHttpInfo = function (data, extraHttpRequestParams) {
        var path = this.basePath + '/Companies';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Create a change stream.
     *
     * @param options
     */
    CompanyService.prototype.companyCreateChangeStreamGetCompaniesChangeStreamWithHttpInfo = function (options, extraHttpRequestParams) {
        var path = this.basePath + '/Companies/change-stream';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (options !== undefined) {
            queryParameters.set('options', options);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* ResponseContentType */].Blob,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Create a change stream.
     *
     * @param options
     */
    CompanyService.prototype.companyCreateChangeStreamPostCompaniesChangeStreamWithHttpInfo = function (options, extraHttpRequestParams) {
        var path = this.basePath + '/Companies/change-stream';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [
            'application/json',
            'application/x-www-form-urlencoded',
            'application/xml',
            'text/xml'
        ];
        var canConsumeForm = this.canConsumeForm(consumes);
        var useForm = false;
        var formParams = new (useForm ? FormData : __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */])();
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        if (options !== undefined) {
            formParams.set('options', options);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: formParams.toString(),
            responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* ResponseContentType */].Blob,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Delete a model instance by {{id}} from the data source.
     *
     * @param id Model id
     */
    CompanyService.prototype.companyDeleteByIdWithHttpInfo = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/Companies/${id}'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling companyDeleteById.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Check whether a model instance exists in the data source.
     *
     * @param id Model id
     */
    CompanyService.prototype.companyExistsGetCompaniesidExistsWithHttpInfo = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/Companies/${id}/exists'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling companyExistsGetCompaniesidExists.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Check whether a model instance exists in the data source.
     *
     * @param id Model id
     */
    CompanyService.prototype.companyExistsHeadCompaniesidWithHttpInfo = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/Companies/${id}'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling companyExistsHeadCompaniesid.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Head,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Find all instances of the model matched by filter from the data source.
     *
     * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    CompanyService.prototype.companyFindWithHttpInfo = function (filter, extraHttpRequestParams) {
        var path = this.basePath + '/Companies';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (filter !== undefined) {
            queryParameters.set('filter', filter);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Find a model instance by {{id}} from the data source.
     *
     * @param id Model id
     * @param filter Filter defining fields and include - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    CompanyService.prototype.companyFindByIdWithHttpInfo = function (id, filter, extraHttpRequestParams) {
        var path = this.basePath + '/Companies/${id}'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling companyFindById.');
        }
        if (filter !== undefined) {
            queryParameters.set('filter', filter);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Find first instance of the model matched by filter from the data source.
     *
     * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    CompanyService.prototype.companyFindOneWithHttpInfo = function (filter, extraHttpRequestParams) {
        var path = this.basePath + '/Companies/findOne';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (filter !== undefined) {
            queryParameters.set('filter', filter);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param data Model instance data
     */
    CompanyService.prototype.companyPatchOrCreateWithHttpInfo = function (data, extraHttpRequestParams) {
        var path = this.basePath + '/Companies';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Patch,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Counts employees of Company.
     *
     * @param id Company id
     * @param where Criteria to match model instances
     */
    CompanyService.prototype.companyPrototypeCountEmployeesWithHttpInfo = function (id, where, extraHttpRequestParams) {
        var path = this.basePath + '/Companies/${id}/employees/count'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling companyPrototypeCountEmployees.');
        }
        if (where !== undefined) {
            queryParameters.set('where', where);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Counts transactions of Company.
     *
     * @param id Company id
     * @param where Criteria to match model instances
     */
    CompanyService.prototype.companyPrototypeCountTransactionsWithHttpInfo = function (id, where, extraHttpRequestParams) {
        var path = this.basePath + '/Companies/${id}/transactions/count'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling companyPrototypeCountTransactions.');
        }
        if (where !== undefined) {
            queryParameters.set('where', where);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Creates a new instance in employees of this model.
     *
     * @param id Company id
     * @param data
     */
    CompanyService.prototype.companyPrototypeCreateEmployeesWithHttpInfo = function (id, data, extraHttpRequestParams) {
        var path = this.basePath + '/Companies/${id}/employees'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling companyPrototypeCreateEmployees.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Creates a new instance in transactions of this model.
     *
     * @param id Company id
     * @param data
     */
    CompanyService.prototype.companyPrototypeCreateTransactionsWithHttpInfo = function (id, data, extraHttpRequestParams) {
        var path = this.basePath + '/Companies/${id}/transactions'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling companyPrototypeCreateTransactions.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Deletes all employees of this model.
     *
     * @param id Company id
     */
    CompanyService.prototype.companyPrototypeDeleteEmployeesWithHttpInfo = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/Companies/${id}/employees'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling companyPrototypeDeleteEmployees.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Deletes all transactions of this model.
     *
     * @param id Company id
     */
    CompanyService.prototype.companyPrototypeDeleteTransactionsWithHttpInfo = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/Companies/${id}/transactions'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling companyPrototypeDeleteTransactions.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Delete a related item by id for employees.
     *
     * @param fk Foreign key for employees
     * @param id Company id
     */
    CompanyService.prototype.companyPrototypeDestroyByIdEmployeesWithHttpInfo = function (fk, id, extraHttpRequestParams) {
        var path = this.basePath + '/Companies/${id}/employees/${fk}'
            .replace('${' + 'fk' + '}', String(fk))
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'fk' is not null or undefined
        if (fk === null || fk === undefined) {
            throw new Error('Required parameter fk was null or undefined when calling companyPrototypeDestroyByIdEmployees.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling companyPrototypeDestroyByIdEmployees.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Delete a related item by id for transactions.
     *
     * @param fk Foreign key for transactions
     * @param id Company id
     */
    CompanyService.prototype.companyPrototypeDestroyByIdTransactionsWithHttpInfo = function (fk, id, extraHttpRequestParams) {
        var path = this.basePath + '/Companies/${id}/transactions/${fk}'
            .replace('${' + 'fk' + '}', String(fk))
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'fk' is not null or undefined
        if (fk === null || fk === undefined) {
            throw new Error('Required parameter fk was null or undefined when calling companyPrototypeDestroyByIdTransactions.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling companyPrototypeDestroyByIdTransactions.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Find a related item by id for employees.
     *
     * @param fk Foreign key for employees
     * @param id Company id
     */
    CompanyService.prototype.companyPrototypeFindByIdEmployeesWithHttpInfo = function (fk, id, extraHttpRequestParams) {
        var path = this.basePath + '/Companies/${id}/employees/${fk}'
            .replace('${' + 'fk' + '}', String(fk))
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'fk' is not null or undefined
        if (fk === null || fk === undefined) {
            throw new Error('Required parameter fk was null or undefined when calling companyPrototypeFindByIdEmployees.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling companyPrototypeFindByIdEmployees.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Find a related item by id for transactions.
     *
     * @param fk Foreign key for transactions
     * @param id Company id
     */
    CompanyService.prototype.companyPrototypeFindByIdTransactionsWithHttpInfo = function (fk, id, extraHttpRequestParams) {
        var path = this.basePath + '/Companies/${id}/transactions/${fk}'
            .replace('${' + 'fk' + '}', String(fk))
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'fk' is not null or undefined
        if (fk === null || fk === undefined) {
            throw new Error('Required parameter fk was null or undefined when calling companyPrototypeFindByIdTransactions.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling companyPrototypeFindByIdTransactions.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Queries employees of Company.
     *
     * @param id Company id
     * @param filter
     */
    CompanyService.prototype.companyPrototypeGetEmployeesWithHttpInfo = function (id, filter, extraHttpRequestParams) {
        var path = this.basePath + '/Companies/${id}/employees'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling companyPrototypeGetEmployees.');
        }
        if (filter !== undefined) {
            queryParameters.set('filter', filter);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Queries transactions of Company.
     *
     * @param id Company id
     * @param filter
     */
    CompanyService.prototype.companyPrototypeGetTransactionsWithHttpInfo = function (id, filter, extraHttpRequestParams) {
        var path = this.basePath + '/Companies/${id}/transactions'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling companyPrototypeGetTransactions.');
        }
        if (filter !== undefined) {
            queryParameters.set('filter', filter);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param id Company id
     * @param data An object of model property name/value pairs
     */
    CompanyService.prototype.companyPrototypePatchAttributesWithHttpInfo = function (id, data, extraHttpRequestParams) {
        var path = this.basePath + '/Companies/${id}'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling companyPrototypePatchAttributes.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Patch,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Update a related item by id for employees.
     *
     * @param fk Foreign key for employees
     * @param id Company id
     * @param data
     */
    CompanyService.prototype.companyPrototypeUpdateByIdEmployeesWithHttpInfo = function (fk, id, data, extraHttpRequestParams) {
        var path = this.basePath + '/Companies/${id}/employees/${fk}'
            .replace('${' + 'fk' + '}', String(fk))
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'fk' is not null or undefined
        if (fk === null || fk === undefined) {
            throw new Error('Required parameter fk was null or undefined when calling companyPrototypeUpdateByIdEmployees.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling companyPrototypeUpdateByIdEmployees.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Put,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Update a related item by id for transactions.
     *
     * @param fk Foreign key for transactions
     * @param id Company id
     * @param data
     */
    CompanyService.prototype.companyPrototypeUpdateByIdTransactionsWithHttpInfo = function (fk, id, data, extraHttpRequestParams) {
        var path = this.basePath + '/Companies/${id}/transactions/${fk}'
            .replace('${' + 'fk' + '}', String(fk))
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'fk' is not null or undefined
        if (fk === null || fk === undefined) {
            throw new Error('Required parameter fk was null or undefined when calling companyPrototypeUpdateByIdTransactions.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling companyPrototypeUpdateByIdTransactions.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Put,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Replace attributes for a model instance and persist it into the data source.
     *
     * @param id Model id
     * @param data Model instance data
     */
    CompanyService.prototype.companyReplaceByIdPostCompaniesidReplaceWithHttpInfo = function (id, data, extraHttpRequestParams) {
        var path = this.basePath + '/Companies/${id}/replace'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling companyReplaceByIdPostCompaniesidReplace.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Replace attributes for a model instance and persist it into the data source.
     *
     * @param id Model id
     * @param data Model instance data
     */
    CompanyService.prototype.companyReplaceByIdPutCompaniesidWithHttpInfo = function (id, data, extraHttpRequestParams) {
        var path = this.basePath + '/Companies/${id}'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling companyReplaceByIdPutCompaniesid.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Put,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Replace an existing model instance or insert a new one into the data source.
     *
     * @param data Model instance data
     */
    CompanyService.prototype.companyReplaceOrCreatePostCompaniesReplaceOrCreateWithHttpInfo = function (data, extraHttpRequestParams) {
        var path = this.basePath + '/Companies/replaceOrCreate';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Replace an existing model instance or insert a new one into the data source.
     *
     * @param data Model instance data
     */
    CompanyService.prototype.companyReplaceOrCreatePutCompaniesWithHttpInfo = function (data, extraHttpRequestParams) {
        var path = this.basePath + '/Companies';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Put,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Update instances of the model matched by {{where}} from the data source.
     *
     * @param where Criteria to match model instances
     * @param data An object of model property name/value pairs
     */
    CompanyService.prototype.companyUpdateAllWithHttpInfo = function (where, data, extraHttpRequestParams) {
        var path = this.basePath + '/Companies/update';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (where !== undefined) {
            queryParameters.set('where', where);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Update an existing model instance or insert a new one into the data source based on the where criteria.
     *
     * @param where Criteria to match model instances
     * @param data An object of model property name/value pairs
     */
    CompanyService.prototype.companyUpsertWithWhereWithHttpInfo = function (where, data, extraHttpRequestParams) {
        var path = this.basePath + '/Companies/upsertWithWhere';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (where !== undefined) {
            queryParameters.set('where', where);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return CompanyService;
}());
CompanyService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__env_environment__["a" /* BASE_PATH */])), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], String, __WEBPACK_IMPORTED_MODULE_3__configuration__["a" /* Configuration */]])
], CompanyService);

//# sourceMappingURL=company.service.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rxjs_operators__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configuration__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__env_environment__ = __webpack_require__(43);
/**
 * bt-server
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */







var EntityService = (function () {
    function EntityService(http, basePath, configuration) {
        this.http = http;
        this.basePath = 'https://localhost/api';
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_3__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     *
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    EntityService.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    EntityService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    /**
     *
     * @summary Count instances of the model matched by where from the data source.
     * @param where Criteria to match model instances
     */
    EntityService.prototype.entityCount = function (where, extraHttpRequestParams) {
        return this.entityCountWithHttpInfo(where, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Create a new instance of the model and persist it into the data source.
     * @param data Model instance data
     */
    EntityService.prototype.entityCreate = function (data, extraHttpRequestParams) {
        return this.entityCreateWithHttpInfo(data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Create a change stream.
     * @param options
     */
    EntityService.prototype.entityCreateChangeStreamGetEntitiesChangeStream = function (options, extraHttpRequestParams) {
        return this.entityCreateChangeStreamGetEntitiesChangeStreamWithHttpInfo(options, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.blob();
            }
        });
    };
    /**
     *
     * @summary Create a change stream.
     * @param options
     */
    EntityService.prototype.entityCreateChangeStreamPostEntitiesChangeStream = function (options, extraHttpRequestParams) {
        return this.entityCreateChangeStreamPostEntitiesChangeStreamWithHttpInfo(options, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.blob();
            }
        });
    };
    /**
     *
     * @summary Delete a model instance by {{id}} from the data source.
     * @param id Model id
     */
    EntityService.prototype.entityDeleteById = function (id, extraHttpRequestParams) {
        return this.entityDeleteByIdWithHttpInfo(id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Check whether a model instance exists in the data source.
     * @param id Model id
     */
    EntityService.prototype.entityExistsGetEntitiesidExists = function (id, extraHttpRequestParams) {
        return this.entityExistsGetEntitiesidExistsWithHttpInfo(id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Check whether a model instance exists in the data source.
     * @param id Model id
     */
    EntityService.prototype.entityExistsHeadEntitiesid = function (id, extraHttpRequestParams) {
        return this.entityExistsHeadEntitiesidWithHttpInfo(id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Find all instances of the model matched by filter from the data source.
     * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    EntityService.prototype.entityFind = function (filter, extraHttpRequestParams) {
        return this.entityFindWithHttpInfo(filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Find a model instance by {{id}} from the data source.
     * @param id Model id
     * @param filter Filter defining fields and include - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    EntityService.prototype.entityFindById = function (id, filter, extraHttpRequestParams) {
        return this.entityFindByIdWithHttpInfo(id, filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Find first instance of the model matched by filter from the data source.
     * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    EntityService.prototype.entityFindOne = function (filter, extraHttpRequestParams) {
        return this.entityFindOneWithHttpInfo(filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Patch an existing model instance or insert a new one into the data source.
     * @param data Model instance data
     */
    EntityService.prototype.entityPatchOrCreate = function (data, extraHttpRequestParams) {
        return this.entityPatchOrCreateWithHttpInfo(data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Counts transactions of Entity.
     * @param id Entity id
     * @param where Criteria to match model instances
     */
    EntityService.prototype.entityPrototypeCountTransactions = function (id, where, extraHttpRequestParams) {
        return this.entityPrototypeCountTransactionsWithHttpInfo(id, where, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Creates a new instance in transactions of this model.
     * @param id Entity id
     * @param data
     */
    EntityService.prototype.entityPrototypeCreateTransactions = function (id, data, extraHttpRequestParams) {
        return this.entityPrototypeCreateTransactionsWithHttpInfo(id, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Deletes all transactions of this model.
     * @param id Entity id
     */
    EntityService.prototype.entityPrototypeDeleteTransactions = function (id, extraHttpRequestParams) {
        return this.entityPrototypeDeleteTransactionsWithHttpInfo(id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Delete a related item by id for transactions.
     * @param fk Foreign key for transactions
     * @param id Entity id
     */
    EntityService.prototype.entityPrototypeDestroyByIdTransactions = function (fk, id, extraHttpRequestParams) {
        return this.entityPrototypeDestroyByIdTransactionsWithHttpInfo(fk, id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Find a related item by id for transactions.
     * @param fk Foreign key for transactions
     * @param id Entity id
     */
    EntityService.prototype.entityPrototypeFindByIdTransactions = function (fk, id, extraHttpRequestParams) {
        return this.entityPrototypeFindByIdTransactionsWithHttpInfo(fk, id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Fetches belongsTo relation entityType.
     * @param id Entity id
     * @param refresh
     */
    EntityService.prototype.entityPrototypeGetEntityType = function (id, refresh, extraHttpRequestParams) {
        return this.entityPrototypeGetEntityTypeWithHttpInfo(id, refresh, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Queries transactions of Entity.
     * @param id Entity id
     * @param filter
     */
    EntityService.prototype.entityPrototypeGetTransactions = function (id, filter, extraHttpRequestParams) {
        return this.entityPrototypeGetTransactionsWithHttpInfo(id, filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Patch attributes for a model instance and persist it into the data source.
     * @param id Entity id
     * @param data An object of model property name/value pairs
     */
    EntityService.prototype.entityPrototypePatchAttributes = function (id, data, extraHttpRequestParams) {
        return this.entityPrototypePatchAttributesWithHttpInfo(id, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Update a related item by id for transactions.
     * @param fk Foreign key for transactions
     * @param id Entity id
     * @param data
     */
    EntityService.prototype.entityPrototypeUpdateByIdTransactions = function (fk, id, data, extraHttpRequestParams) {
        return this.entityPrototypeUpdateByIdTransactionsWithHttpInfo(fk, id, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Replace attributes for a model instance and persist it into the data source.
     * @param id Model id
     * @param data Model instance data
     */
    EntityService.prototype.entityReplaceByIdPostEntitiesidReplace = function (id, data, extraHttpRequestParams) {
        return this.entityReplaceByIdPostEntitiesidReplaceWithHttpInfo(id, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Replace attributes for a model instance and persist it into the data source.
     * @param id Model id
     * @param data Model instance data
     */
    EntityService.prototype.entityReplaceByIdPutEntitiesid = function (id, data, extraHttpRequestParams) {
        return this.entityReplaceByIdPutEntitiesidWithHttpInfo(id, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Replace an existing model instance or insert a new one into the data source.
     * @param data Model instance data
     */
    EntityService.prototype.entityReplaceOrCreatePostEntitiesReplaceOrCreate = function (data, extraHttpRequestParams) {
        return this.entityReplaceOrCreatePostEntitiesReplaceOrCreateWithHttpInfo(data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Replace an existing model instance or insert a new one into the data source.
     * @param data Model instance data
     */
    EntityService.prototype.entityReplaceOrCreatePutEntities = function (data, extraHttpRequestParams) {
        return this.entityReplaceOrCreatePutEntitiesWithHttpInfo(data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Update instances of the model matched by {{where}} from the data source.
     * @param where Criteria to match model instances
     * @param data An object of model property name/value pairs
     */
    EntityService.prototype.entityUpdateAll = function (where, data, extraHttpRequestParams) {
        return this.entityUpdateAllWithHttpInfo(where, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Update an existing model instance or insert a new one into the data source based on the where criteria.
     * @param where Criteria to match model instances
     * @param data An object of model property name/value pairs
     */
    EntityService.prototype.entityUpsertWithWhere = function (where, data, extraHttpRequestParams) {
        return this.entityUpsertWithWhereWithHttpInfo(where, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * Count instances of the model matched by where from the data source.
     *
     * @param where Criteria to match model instances
     */
    EntityService.prototype.entityCountWithHttpInfo = function (where, extraHttpRequestParams) {
        var path = this.basePath + '/Entities/count';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (where !== undefined) {
            queryParameters.set('where', where);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Create a new instance of the model and persist it into the data source.
     *
     * @param data Model instance data
     */
    EntityService.prototype.entityCreateWithHttpInfo = function (data, extraHttpRequestParams) {
        var path = this.basePath + '/Entities';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Create a change stream.
     *
     * @param options
     */
    EntityService.prototype.entityCreateChangeStreamGetEntitiesChangeStreamWithHttpInfo = function (options, extraHttpRequestParams) {
        var path = this.basePath + '/Entities/change-stream';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (options !== undefined) {
            queryParameters.set('options', options);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* ResponseContentType */].Blob,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Create a change stream.
     *
     * @param options
     */
    EntityService.prototype.entityCreateChangeStreamPostEntitiesChangeStreamWithHttpInfo = function (options, extraHttpRequestParams) {
        var path = this.basePath + '/Entities/change-stream';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [
            'application/json',
            'application/x-www-form-urlencoded',
            'application/xml',
            'text/xml'
        ];
        var canConsumeForm = this.canConsumeForm(consumes);
        var useForm = false;
        var formParams = new (useForm ? FormData : __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */])();
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        if (options !== undefined) {
            formParams.set('options', options);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: formParams.toString(),
            responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* ResponseContentType */].Blob,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Delete a model instance by {{id}} from the data source.
     *
     * @param id Model id
     */
    EntityService.prototype.entityDeleteByIdWithHttpInfo = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/Entities/${id}'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling entityDeleteById.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Check whether a model instance exists in the data source.
     *
     * @param id Model id
     */
    EntityService.prototype.entityExistsGetEntitiesidExistsWithHttpInfo = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/Entities/${id}/exists'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling entityExistsGetEntitiesidExists.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Check whether a model instance exists in the data source.
     *
     * @param id Model id
     */
    EntityService.prototype.entityExistsHeadEntitiesidWithHttpInfo = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/Entities/${id}'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling entityExistsHeadEntitiesid.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Head,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Find all instances of the model matched by filter from the data source.
     *
     * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    EntityService.prototype.entityFindWithHttpInfo = function (filter, extraHttpRequestParams) {
        var path = this.basePath + '/Entities';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (filter !== undefined) {
            queryParameters.set('filter', filter);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Find a model instance by {{id}} from the data source.
     *
     * @param id Model id
     * @param filter Filter defining fields and include - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    EntityService.prototype.entityFindByIdWithHttpInfo = function (id, filter, extraHttpRequestParams) {
        var path = this.basePath + '/Entities/${id}'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling entityFindById.');
        }
        if (filter !== undefined) {
            queryParameters.set('filter', filter);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Find first instance of the model matched by filter from the data source.
     *
     * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    EntityService.prototype.entityFindOneWithHttpInfo = function (filter, extraHttpRequestParams) {
        var path = this.basePath + '/Entities/findOne';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (filter !== undefined) {
            queryParameters.set('filter', filter);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param data Model instance data
     */
    EntityService.prototype.entityPatchOrCreateWithHttpInfo = function (data, extraHttpRequestParams) {
        var path = this.basePath + '/Entities';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Patch,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Counts transactions of Entity.
     *
     * @param id Entity id
     * @param where Criteria to match model instances
     */
    EntityService.prototype.entityPrototypeCountTransactionsWithHttpInfo = function (id, where, extraHttpRequestParams) {
        var path = this.basePath + '/Entities/${id}/transactions/count'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling entityPrototypeCountTransactions.');
        }
        if (where !== undefined) {
            queryParameters.set('where', where);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Creates a new instance in transactions of this model.
     *
     * @param id Entity id
     * @param data
     */
    EntityService.prototype.entityPrototypeCreateTransactionsWithHttpInfo = function (id, data, extraHttpRequestParams) {
        var path = this.basePath + '/Entities/${id}/transactions'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling entityPrototypeCreateTransactions.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Deletes all transactions of this model.
     *
     * @param id Entity id
     */
    EntityService.prototype.entityPrototypeDeleteTransactionsWithHttpInfo = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/Entities/${id}/transactions'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling entityPrototypeDeleteTransactions.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Delete a related item by id for transactions.
     *
     * @param fk Foreign key for transactions
     * @param id Entity id
     */
    EntityService.prototype.entityPrototypeDestroyByIdTransactionsWithHttpInfo = function (fk, id, extraHttpRequestParams) {
        var path = this.basePath + '/Entities/${id}/transactions/${fk}'
            .replace('${' + 'fk' + '}', String(fk))
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'fk' is not null or undefined
        if (fk === null || fk === undefined) {
            throw new Error('Required parameter fk was null or undefined when calling entityPrototypeDestroyByIdTransactions.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling entityPrototypeDestroyByIdTransactions.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Find a related item by id for transactions.
     *
     * @param fk Foreign key for transactions
     * @param id Entity id
     */
    EntityService.prototype.entityPrototypeFindByIdTransactionsWithHttpInfo = function (fk, id, extraHttpRequestParams) {
        var path = this.basePath + '/Entities/${id}/transactions/${fk}'
            .replace('${' + 'fk' + '}', String(fk))
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'fk' is not null or undefined
        if (fk === null || fk === undefined) {
            throw new Error('Required parameter fk was null or undefined when calling entityPrototypeFindByIdTransactions.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling entityPrototypeFindByIdTransactions.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Fetches belongsTo relation entityType.
     *
     * @param id Entity id
     * @param refresh
     */
    EntityService.prototype.entityPrototypeGetEntityTypeWithHttpInfo = function (id, refresh, extraHttpRequestParams) {
        var path = this.basePath + '/Entities/${id}/entityType'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling entityPrototypeGetEntityType.');
        }
        if (refresh !== undefined) {
            queryParameters.set('refresh', refresh);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Queries transactions of Entity.
     *
     * @param id Entity id
     * @param filter
     */
    EntityService.prototype.entityPrototypeGetTransactionsWithHttpInfo = function (id, filter, extraHttpRequestParams) {
        var path = this.basePath + '/Entities/${id}/transactions'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling entityPrototypeGetTransactions.');
        }
        if (filter !== undefined) {
            queryParameters.set('filter', filter);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param id Entity id
     * @param data An object of model property name/value pairs
     */
    EntityService.prototype.entityPrototypePatchAttributesWithHttpInfo = function (id, data, extraHttpRequestParams) {
        var path = this.basePath + '/Entities/${id}'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling entityPrototypePatchAttributes.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Patch,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Update a related item by id for transactions.
     *
     * @param fk Foreign key for transactions
     * @param id Entity id
     * @param data
     */
    EntityService.prototype.entityPrototypeUpdateByIdTransactionsWithHttpInfo = function (fk, id, data, extraHttpRequestParams) {
        var path = this.basePath + '/Entities/${id}/transactions/${fk}'
            .replace('${' + 'fk' + '}', String(fk))
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'fk' is not null or undefined
        if (fk === null || fk === undefined) {
            throw new Error('Required parameter fk was null or undefined when calling entityPrototypeUpdateByIdTransactions.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling entityPrototypeUpdateByIdTransactions.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Put,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Replace attributes for a model instance and persist it into the data source.
     *
     * @param id Model id
     * @param data Model instance data
     */
    EntityService.prototype.entityReplaceByIdPostEntitiesidReplaceWithHttpInfo = function (id, data, extraHttpRequestParams) {
        var path = this.basePath + '/Entities/${id}/replace'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling entityReplaceByIdPostEntitiesidReplace.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Replace attributes for a model instance and persist it into the data source.
     *
     * @param id Model id
     * @param data Model instance data
     */
    EntityService.prototype.entityReplaceByIdPutEntitiesidWithHttpInfo = function (id, data, extraHttpRequestParams) {
        var path = this.basePath + '/Entities/${id}'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling entityReplaceByIdPutEntitiesid.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Put,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Replace an existing model instance or insert a new one into the data source.
     *
     * @param data Model instance data
     */
    EntityService.prototype.entityReplaceOrCreatePostEntitiesReplaceOrCreateWithHttpInfo = function (data, extraHttpRequestParams) {
        var path = this.basePath + '/Entities/replaceOrCreate';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Replace an existing model instance or insert a new one into the data source.
     *
     * @param data Model instance data
     */
    EntityService.prototype.entityReplaceOrCreatePutEntitiesWithHttpInfo = function (data, extraHttpRequestParams) {
        var path = this.basePath + '/Entities';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Put,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Update instances of the model matched by {{where}} from the data source.
     *
     * @param where Criteria to match model instances
     * @param data An object of model property name/value pairs
     */
    EntityService.prototype.entityUpdateAllWithHttpInfo = function (where, data, extraHttpRequestParams) {
        var path = this.basePath + '/Entities/update';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (where !== undefined) {
            queryParameters.set('where', where);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Update an existing model instance or insert a new one into the data source based on the where criteria.
     *
     * @param where Criteria to match model instances
     * @param data An object of model property name/value pairs
     */
    EntityService.prototype.entityUpsertWithWhereWithHttpInfo = function (where, data, extraHttpRequestParams) {
        var path = this.basePath + '/Entities/upsertWithWhere';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (where !== undefined) {
            queryParameters.set('where', where);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return EntityService;
}());
EntityService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__env_environment__["a" /* BASE_PATH */])), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], String, __WEBPACK_IMPORTED_MODULE_3__configuration__["a" /* Configuration */]])
], EntityService);

//# sourceMappingURL=entity.service.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityTypeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rxjs_operators__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configuration__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__env_environment__ = __webpack_require__(43);
/**
 * bt-server
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */







var EntityTypeService = (function () {
    function EntityTypeService(http, basePath, configuration) {
        this.http = http;
        this.basePath = 'https://localhost/api';
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_3__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     *
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    EntityTypeService.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    EntityTypeService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    /**
     *
     * @summary Count instances of the model matched by where from the data source.
     * @param where Criteria to match model instances
     */
    EntityTypeService.prototype.entityTypeCount = function (where, extraHttpRequestParams) {
        return this.entityTypeCountWithHttpInfo(where, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Create a new instance of the model and persist it into the data source.
     * @param data Model instance data
     */
    EntityTypeService.prototype.entityTypeCreate = function (data, extraHttpRequestParams) {
        return this.entityTypeCreateWithHttpInfo(data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Create a change stream.
     * @param options
     */
    EntityTypeService.prototype.entityTypeCreateChangeStreamGetEntityTypesChangeStream = function (options, extraHttpRequestParams) {
        return this.entityTypeCreateChangeStreamGetEntityTypesChangeStreamWithHttpInfo(options, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.blob();
            }
        });
    };
    /**
     *
     * @summary Create a change stream.
     * @param options
     */
    EntityTypeService.prototype.entityTypeCreateChangeStreamPostEntityTypesChangeStream = function (options, extraHttpRequestParams) {
        return this.entityTypeCreateChangeStreamPostEntityTypesChangeStreamWithHttpInfo(options, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.blob();
            }
        });
    };
    /**
     *
     * @summary Delete a model instance by {{id}} from the data source.
     * @param id Model id
     */
    EntityTypeService.prototype.entityTypeDeleteById = function (id, extraHttpRequestParams) {
        return this.entityTypeDeleteByIdWithHttpInfo(id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Check whether a model instance exists in the data source.
     * @param id Model id
     */
    EntityTypeService.prototype.entityTypeExistsGetEntityTypesidExists = function (id, extraHttpRequestParams) {
        return this.entityTypeExistsGetEntityTypesidExistsWithHttpInfo(id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Check whether a model instance exists in the data source.
     * @param id Model id
     */
    EntityTypeService.prototype.entityTypeExistsHeadEntityTypesid = function (id, extraHttpRequestParams) {
        return this.entityTypeExistsHeadEntityTypesidWithHttpInfo(id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Find all instances of the model matched by filter from the data source.
     * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    EntityTypeService.prototype.entityTypeFind = function (filter, extraHttpRequestParams) {
        return this.entityTypeFindWithHttpInfo(filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Find a model instance by {{id}} from the data source.
     * @param id Model id
     * @param filter Filter defining fields and include - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    EntityTypeService.prototype.entityTypeFindById = function (id, filter, extraHttpRequestParams) {
        return this.entityTypeFindByIdWithHttpInfo(id, filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Find first instance of the model matched by filter from the data source.
     * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    EntityTypeService.prototype.entityTypeFindOne = function (filter, extraHttpRequestParams) {
        return this.entityTypeFindOneWithHttpInfo(filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Patch an existing model instance or insert a new one into the data source.
     * @param data Model instance data
     */
    EntityTypeService.prototype.entityTypePatchOrCreate = function (data, extraHttpRequestParams) {
        return this.entityTypePatchOrCreateWithHttpInfo(data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Counts entity of EntityType.
     * @param id EntityType id
     * @param where Criteria to match model instances
     */
    EntityTypeService.prototype.entityTypePrototypeCountEntity = function (id, where, extraHttpRequestParams) {
        return this.entityTypePrototypeCountEntityWithHttpInfo(id, where, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Creates a new instance in entity of this model.
     * @param id EntityType id
     * @param data
     */
    EntityTypeService.prototype.entityTypePrototypeCreateEntity = function (id, data, extraHttpRequestParams) {
        return this.entityTypePrototypeCreateEntityWithHttpInfo(id, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Deletes all entity of this model.
     * @param id EntityType id
     */
    EntityTypeService.prototype.entityTypePrototypeDeleteEntity = function (id, extraHttpRequestParams) {
        return this.entityTypePrototypeDeleteEntityWithHttpInfo(id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Delete a related item by id for entity.
     * @param fk Foreign key for entity
     * @param id EntityType id
     */
    EntityTypeService.prototype.entityTypePrototypeDestroyByIdEntity = function (fk, id, extraHttpRequestParams) {
        return this.entityTypePrototypeDestroyByIdEntityWithHttpInfo(fk, id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Find a related item by id for entity.
     * @param fk Foreign key for entity
     * @param id EntityType id
     */
    EntityTypeService.prototype.entityTypePrototypeFindByIdEntity = function (fk, id, extraHttpRequestParams) {
        return this.entityTypePrototypeFindByIdEntityWithHttpInfo(fk, id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Queries entity of EntityType.
     * @param id EntityType id
     * @param filter
     */
    EntityTypeService.prototype.entityTypePrototypeGetEntity = function (id, filter, extraHttpRequestParams) {
        return this.entityTypePrototypeGetEntityWithHttpInfo(id, filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Patch attributes for a model instance and persist it into the data source.
     * @param id EntityType id
     * @param data An object of model property name/value pairs
     */
    EntityTypeService.prototype.entityTypePrototypePatchAttributes = function (id, data, extraHttpRequestParams) {
        return this.entityTypePrototypePatchAttributesWithHttpInfo(id, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Update a related item by id for entity.
     * @param fk Foreign key for entity
     * @param id EntityType id
     * @param data
     */
    EntityTypeService.prototype.entityTypePrototypeUpdateByIdEntity = function (fk, id, data, extraHttpRequestParams) {
        return this.entityTypePrototypeUpdateByIdEntityWithHttpInfo(fk, id, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Replace attributes for a model instance and persist it into the data source.
     * @param id Model id
     * @param data Model instance data
     */
    EntityTypeService.prototype.entityTypeReplaceByIdPostEntityTypesidReplace = function (id, data, extraHttpRequestParams) {
        return this.entityTypeReplaceByIdPostEntityTypesidReplaceWithHttpInfo(id, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Replace attributes for a model instance and persist it into the data source.
     * @param id Model id
     * @param data Model instance data
     */
    EntityTypeService.prototype.entityTypeReplaceByIdPutEntityTypesid = function (id, data, extraHttpRequestParams) {
        return this.entityTypeReplaceByIdPutEntityTypesidWithHttpInfo(id, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Replace an existing model instance or insert a new one into the data source.
     * @param data Model instance data
     */
    EntityTypeService.prototype.entityTypeReplaceOrCreatePostEntityTypesReplaceOrCreate = function (data, extraHttpRequestParams) {
        return this.entityTypeReplaceOrCreatePostEntityTypesReplaceOrCreateWithHttpInfo(data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Replace an existing model instance or insert a new one into the data source.
     * @param data Model instance data
     */
    EntityTypeService.prototype.entityTypeReplaceOrCreatePutEntityTypes = function (data, extraHttpRequestParams) {
        return this.entityTypeReplaceOrCreatePutEntityTypesWithHttpInfo(data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Update instances of the model matched by {{where}} from the data source.
     * @param where Criteria to match model instances
     * @param data An object of model property name/value pairs
     */
    EntityTypeService.prototype.entityTypeUpdateAll = function (where, data, extraHttpRequestParams) {
        return this.entityTypeUpdateAllWithHttpInfo(where, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Update an existing model instance or insert a new one into the data source based on the where criteria.
     * @param where Criteria to match model instances
     * @param data An object of model property name/value pairs
     */
    EntityTypeService.prototype.entityTypeUpsertWithWhere = function (where, data, extraHttpRequestParams) {
        return this.entityTypeUpsertWithWhereWithHttpInfo(where, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * Count instances of the model matched by where from the data source.
     *
     * @param where Criteria to match model instances
     */
    EntityTypeService.prototype.entityTypeCountWithHttpInfo = function (where, extraHttpRequestParams) {
        var path = this.basePath + '/EntityTypes/count';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (where !== undefined) {
            queryParameters.set('where', where);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Create a new instance of the model and persist it into the data source.
     *
     * @param data Model instance data
     */
    EntityTypeService.prototype.entityTypeCreateWithHttpInfo = function (data, extraHttpRequestParams) {
        var path = this.basePath + '/EntityTypes';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Create a change stream.
     *
     * @param options
     */
    EntityTypeService.prototype.entityTypeCreateChangeStreamGetEntityTypesChangeStreamWithHttpInfo = function (options, extraHttpRequestParams) {
        var path = this.basePath + '/EntityTypes/change-stream';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (options !== undefined) {
            queryParameters.set('options', options);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* ResponseContentType */].Blob,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Create a change stream.
     *
     * @param options
     */
    EntityTypeService.prototype.entityTypeCreateChangeStreamPostEntityTypesChangeStreamWithHttpInfo = function (options, extraHttpRequestParams) {
        var path = this.basePath + '/EntityTypes/change-stream';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [
            'application/json',
            'application/x-www-form-urlencoded',
            'application/xml',
            'text/xml'
        ];
        var canConsumeForm = this.canConsumeForm(consumes);
        var useForm = false;
        var formParams = new (useForm ? FormData : __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */])();
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        if (options !== undefined) {
            formParams.set('options', options);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: formParams.toString(),
            responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* ResponseContentType */].Blob,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Delete a model instance by {{id}} from the data source.
     *
     * @param id Model id
     */
    EntityTypeService.prototype.entityTypeDeleteByIdWithHttpInfo = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/EntityTypes/${id}'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling entityTypeDeleteById.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Check whether a model instance exists in the data source.
     *
     * @param id Model id
     */
    EntityTypeService.prototype.entityTypeExistsGetEntityTypesidExistsWithHttpInfo = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/EntityTypes/${id}/exists'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling entityTypeExistsGetEntityTypesidExists.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Check whether a model instance exists in the data source.
     *
     * @param id Model id
     */
    EntityTypeService.prototype.entityTypeExistsHeadEntityTypesidWithHttpInfo = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/EntityTypes/${id}'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling entityTypeExistsHeadEntityTypesid.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Head,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Find all instances of the model matched by filter from the data source.
     *
     * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    EntityTypeService.prototype.entityTypeFindWithHttpInfo = function (filter, extraHttpRequestParams) {
        var path = this.basePath + '/EntityTypes';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (filter !== undefined) {
            queryParameters.set('filter', filter);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Find a model instance by {{id}} from the data source.
     *
     * @param id Model id
     * @param filter Filter defining fields and include - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    EntityTypeService.prototype.entityTypeFindByIdWithHttpInfo = function (id, filter, extraHttpRequestParams) {
        var path = this.basePath + '/EntityTypes/${id}'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling entityTypeFindById.');
        }
        if (filter !== undefined) {
            queryParameters.set('filter', filter);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Find first instance of the model matched by filter from the data source.
     *
     * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    EntityTypeService.prototype.entityTypeFindOneWithHttpInfo = function (filter, extraHttpRequestParams) {
        var path = this.basePath + '/EntityTypes/findOne';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (filter !== undefined) {
            queryParameters.set('filter', filter);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param data Model instance data
     */
    EntityTypeService.prototype.entityTypePatchOrCreateWithHttpInfo = function (data, extraHttpRequestParams) {
        var path = this.basePath + '/EntityTypes';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Patch,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Counts entity of EntityType.
     *
     * @param id EntityType id
     * @param where Criteria to match model instances
     */
    EntityTypeService.prototype.entityTypePrototypeCountEntityWithHttpInfo = function (id, where, extraHttpRequestParams) {
        var path = this.basePath + '/EntityTypes/${id}/entity/count'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling entityTypePrototypeCountEntity.');
        }
        if (where !== undefined) {
            queryParameters.set('where', where);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Creates a new instance in entity of this model.
     *
     * @param id EntityType id
     * @param data
     */
    EntityTypeService.prototype.entityTypePrototypeCreateEntityWithHttpInfo = function (id, data, extraHttpRequestParams) {
        var path = this.basePath + '/EntityTypes/${id}/entity'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling entityTypePrototypeCreateEntity.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Deletes all entity of this model.
     *
     * @param id EntityType id
     */
    EntityTypeService.prototype.entityTypePrototypeDeleteEntityWithHttpInfo = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/EntityTypes/${id}/entity'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling entityTypePrototypeDeleteEntity.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Delete a related item by id for entity.
     *
     * @param fk Foreign key for entity
     * @param id EntityType id
     */
    EntityTypeService.prototype.entityTypePrototypeDestroyByIdEntityWithHttpInfo = function (fk, id, extraHttpRequestParams) {
        var path = this.basePath + '/EntityTypes/${id}/entity/${fk}'
            .replace('${' + 'fk' + '}', String(fk))
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'fk' is not null or undefined
        if (fk === null || fk === undefined) {
            throw new Error('Required parameter fk was null or undefined when calling entityTypePrototypeDestroyByIdEntity.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling entityTypePrototypeDestroyByIdEntity.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Find a related item by id for entity.
     *
     * @param fk Foreign key for entity
     * @param id EntityType id
     */
    EntityTypeService.prototype.entityTypePrototypeFindByIdEntityWithHttpInfo = function (fk, id, extraHttpRequestParams) {
        var path = this.basePath + '/EntityTypes/${id}/entity/${fk}'
            .replace('${' + 'fk' + '}', String(fk))
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'fk' is not null or undefined
        if (fk === null || fk === undefined) {
            throw new Error('Required parameter fk was null or undefined when calling entityTypePrototypeFindByIdEntity.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling entityTypePrototypeFindByIdEntity.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Queries entity of EntityType.
     *
     * @param id EntityType id
     * @param filter
     */
    EntityTypeService.prototype.entityTypePrototypeGetEntityWithHttpInfo = function (id, filter, extraHttpRequestParams) {
        var path = this.basePath + '/EntityTypes/${id}/entity'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling entityTypePrototypeGetEntity.');
        }
        if (filter !== undefined) {
            queryParameters.set('filter', filter);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param id EntityType id
     * @param data An object of model property name/value pairs
     */
    EntityTypeService.prototype.entityTypePrototypePatchAttributesWithHttpInfo = function (id, data, extraHttpRequestParams) {
        var path = this.basePath + '/EntityTypes/${id}'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling entityTypePrototypePatchAttributes.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Patch,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Update a related item by id for entity.
     *
     * @param fk Foreign key for entity
     * @param id EntityType id
     * @param data
     */
    EntityTypeService.prototype.entityTypePrototypeUpdateByIdEntityWithHttpInfo = function (fk, id, data, extraHttpRequestParams) {
        var path = this.basePath + '/EntityTypes/${id}/entity/${fk}'
            .replace('${' + 'fk' + '}', String(fk))
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'fk' is not null or undefined
        if (fk === null || fk === undefined) {
            throw new Error('Required parameter fk was null or undefined when calling entityTypePrototypeUpdateByIdEntity.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling entityTypePrototypeUpdateByIdEntity.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Put,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Replace attributes for a model instance and persist it into the data source.
     *
     * @param id Model id
     * @param data Model instance data
     */
    EntityTypeService.prototype.entityTypeReplaceByIdPostEntityTypesidReplaceWithHttpInfo = function (id, data, extraHttpRequestParams) {
        var path = this.basePath + '/EntityTypes/${id}/replace'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling entityTypeReplaceByIdPostEntityTypesidReplace.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Replace attributes for a model instance and persist it into the data source.
     *
     * @param id Model id
     * @param data Model instance data
     */
    EntityTypeService.prototype.entityTypeReplaceByIdPutEntityTypesidWithHttpInfo = function (id, data, extraHttpRequestParams) {
        var path = this.basePath + '/EntityTypes/${id}'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling entityTypeReplaceByIdPutEntityTypesid.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Put,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Replace an existing model instance or insert a new one into the data source.
     *
     * @param data Model instance data
     */
    EntityTypeService.prototype.entityTypeReplaceOrCreatePostEntityTypesReplaceOrCreateWithHttpInfo = function (data, extraHttpRequestParams) {
        var path = this.basePath + '/EntityTypes/replaceOrCreate';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Replace an existing model instance or insert a new one into the data source.
     *
     * @param data Model instance data
     */
    EntityTypeService.prototype.entityTypeReplaceOrCreatePutEntityTypesWithHttpInfo = function (data, extraHttpRequestParams) {
        var path = this.basePath + '/EntityTypes';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Put,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Update instances of the model matched by {{where}} from the data source.
     *
     * @param where Criteria to match model instances
     * @param data An object of model property name/value pairs
     */
    EntityTypeService.prototype.entityTypeUpdateAllWithHttpInfo = function (where, data, extraHttpRequestParams) {
        var path = this.basePath + '/EntityTypes/update';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (where !== undefined) {
            queryParameters.set('where', where);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Update an existing model instance or insert a new one into the data source based on the where criteria.
     *
     * @param where Criteria to match model instances
     * @param data An object of model property name/value pairs
     */
    EntityTypeService.prototype.entityTypeUpsertWithWhereWithHttpInfo = function (where, data, extraHttpRequestParams) {
        var path = this.basePath + '/EntityTypes/upsertWithWhere';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (where !== undefined) {
            queryParameters.set('where', where);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return EntityTypeService;
}());
EntityTypeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__env_environment__["a" /* BASE_PATH */])), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], String, __WEBPACK_IMPORTED_MODULE_3__configuration__["a" /* Configuration */]])
], EntityTypeService);

//# sourceMappingURL=entityType.service.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rxjs_operators__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configuration__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__env_environment__ = __webpack_require__(43);
/**
 * bt-server
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */







var TransactionService = (function () {
    function TransactionService(http, basePath, configuration) {
        this.http = http;
        this.basePath = 'https://localhost/api';
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_3__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     *
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    TransactionService.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    TransactionService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    /**
     *
     * @summary Count instances of the model matched by where from the data source.
     * @param where Criteria to match model instances
     */
    TransactionService.prototype.transactionCount = function (where, extraHttpRequestParams) {
        return this.transactionCountWithHttpInfo(where, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Create a new instance of the model and persist it into the data source.
     * @param data Model instance data
     */
    TransactionService.prototype.transactionCreate = function (data, extraHttpRequestParams) {
        return this.transactionCreateWithHttpInfo(data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Create a change stream.
     * @param options
     */
    TransactionService.prototype.transactionCreateChangeStreamGetTransactionsChangeStream = function (options, extraHttpRequestParams) {
        return this.transactionCreateChangeStreamGetTransactionsChangeStreamWithHttpInfo(options, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.blob();
            }
        });
    };
    /**
     *
     * @summary Create a change stream.
     * @param options
     */
    TransactionService.prototype.transactionCreateChangeStreamPostTransactionsChangeStream = function (options, extraHttpRequestParams) {
        return this.transactionCreateChangeStreamPostTransactionsChangeStreamWithHttpInfo(options, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.blob();
            }
        });
    };
    /**
     *
     * @summary Delete a model instance by {{id}} from the data source.
     * @param id Model id
     */
    TransactionService.prototype.transactionDeleteById = function (id, extraHttpRequestParams) {
        return this.transactionDeleteByIdWithHttpInfo(id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Check whether a model instance exists in the data source.
     * @param id Model id
     */
    TransactionService.prototype.transactionExistsGetTransactionsidExists = function (id, extraHttpRequestParams) {
        return this.transactionExistsGetTransactionsidExistsWithHttpInfo(id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Check whether a model instance exists in the data source.
     * @param id Model id
     */
    TransactionService.prototype.transactionExistsHeadTransactionsid = function (id, extraHttpRequestParams) {
        return this.transactionExistsHeadTransactionsidWithHttpInfo(id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Find all instances of the model matched by filter from the data source.
     * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    TransactionService.prototype.transactionFind = function (filter, extraHttpRequestParams) {
        return this.transactionFindWithHttpInfo(filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Find a model instance by {{id}} from the data source.
     * @param id Model id
     * @param filter Filter defining fields and include - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    TransactionService.prototype.transactionFindById = function (id, filter, extraHttpRequestParams) {
        return this.transactionFindByIdWithHttpInfo(id, filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Find first instance of the model matched by filter from the data source.
     * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    TransactionService.prototype.transactionFindOne = function (filter, extraHttpRequestParams) {
        return this.transactionFindOneWithHttpInfo(filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Patch an existing model instance or insert a new one into the data source.
     * @param data Model instance data
     */
    TransactionService.prototype.transactionPatchOrCreate = function (data, extraHttpRequestParams) {
        return this.transactionPatchOrCreateWithHttpInfo(data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Fetches belongsTo relation entity.
     * @param id Transaction id
     * @param refresh
     */
    TransactionService.prototype.transactionPrototypeGetEntity = function (id, refresh, extraHttpRequestParams) {
        return this.transactionPrototypeGetEntityWithHttpInfo(id, refresh, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Fetches belongsTo relation transactionType.
     * @param id Transaction id
     * @param refresh
     */
    TransactionService.prototype.transactionPrototypeGetTransactionType = function (id, refresh, extraHttpRequestParams) {
        return this.transactionPrototypeGetTransactionTypeWithHttpInfo(id, refresh, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Patch attributes for a model instance and persist it into the data source.
     * @param id Transaction id
     * @param data An object of model property name/value pairs
     */
    TransactionService.prototype.transactionPrototypePatchAttributes = function (id, data, extraHttpRequestParams) {
        return this.transactionPrototypePatchAttributesWithHttpInfo(id, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Replace attributes for a model instance and persist it into the data source.
     * @param id Model id
     * @param data Model instance data
     */
    TransactionService.prototype.transactionReplaceByIdPostTransactionsidReplace = function (id, data, extraHttpRequestParams) {
        return this.transactionReplaceByIdPostTransactionsidReplaceWithHttpInfo(id, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Replace attributes for a model instance and persist it into the data source.
     * @param id Model id
     * @param data Model instance data
     */
    TransactionService.prototype.transactionReplaceByIdPutTransactionsid = function (id, data, extraHttpRequestParams) {
        return this.transactionReplaceByIdPutTransactionsidWithHttpInfo(id, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Replace an existing model instance or insert a new one into the data source.
     * @param data Model instance data
     */
    TransactionService.prototype.transactionReplaceOrCreatePostTransactionsReplaceOrCreate = function (data, extraHttpRequestParams) {
        return this.transactionReplaceOrCreatePostTransactionsReplaceOrCreateWithHttpInfo(data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Replace an existing model instance or insert a new one into the data source.
     * @param data Model instance data
     */
    TransactionService.prototype.transactionReplaceOrCreatePutTransactions = function (data, extraHttpRequestParams) {
        return this.transactionReplaceOrCreatePutTransactionsWithHttpInfo(data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Update instances of the model matched by {{where}} from the data source.
     * @param where Criteria to match model instances
     * @param data An object of model property name/value pairs
     */
    TransactionService.prototype.transactionUpdateAll = function (where, data, extraHttpRequestParams) {
        return this.transactionUpdateAllWithHttpInfo(where, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Update an existing model instance or insert a new one into the data source based on the where criteria.
     * @param where Criteria to match model instances
     * @param data An object of model property name/value pairs
     */
    TransactionService.prototype.transactionUpsertWithWhere = function (where, data, extraHttpRequestParams) {
        return this.transactionUpsertWithWhereWithHttpInfo(where, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * Count instances of the model matched by where from the data source.
     *
     * @param where Criteria to match model instances
     */
    TransactionService.prototype.transactionCountWithHttpInfo = function (where, extraHttpRequestParams) {
        var path = this.basePath + '/Transactions/count';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (where !== undefined) {
            queryParameters.set('where', where);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Create a new instance of the model and persist it into the data source.
     *
     * @param data Model instance data
     */
    TransactionService.prototype.transactionCreateWithHttpInfo = function (data, extraHttpRequestParams) {
        var path = this.basePath + '/Transactions';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Create a change stream.
     *
     * @param options
     */
    TransactionService.prototype.transactionCreateChangeStreamGetTransactionsChangeStreamWithHttpInfo = function (options, extraHttpRequestParams) {
        var path = this.basePath + '/Transactions/change-stream';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (options !== undefined) {
            queryParameters.set('options', options);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* ResponseContentType */].Blob,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Create a change stream.
     *
     * @param options
     */
    TransactionService.prototype.transactionCreateChangeStreamPostTransactionsChangeStreamWithHttpInfo = function (options, extraHttpRequestParams) {
        var path = this.basePath + '/Transactions/change-stream';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [
            'application/json',
            'application/x-www-form-urlencoded',
            'application/xml',
            'text/xml'
        ];
        var canConsumeForm = this.canConsumeForm(consumes);
        var useForm = false;
        var formParams = new (useForm ? FormData : __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */])();
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        if (options !== undefined) {
            formParams.set('options', options);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: formParams.toString(),
            responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* ResponseContentType */].Blob,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Delete a model instance by {{id}} from the data source.
     *
     * @param id Model id
     */
    TransactionService.prototype.transactionDeleteByIdWithHttpInfo = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/Transactions/${id}'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling transactionDeleteById.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Check whether a model instance exists in the data source.
     *
     * @param id Model id
     */
    TransactionService.prototype.transactionExistsGetTransactionsidExistsWithHttpInfo = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/Transactions/${id}/exists'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling transactionExistsGetTransactionsidExists.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Check whether a model instance exists in the data source.
     *
     * @param id Model id
     */
    TransactionService.prototype.transactionExistsHeadTransactionsidWithHttpInfo = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/Transactions/${id}'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling transactionExistsHeadTransactionsid.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Head,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Find all instances of the model matched by filter from the data source.
     *
     * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    TransactionService.prototype.transactionFindWithHttpInfo = function (filter, extraHttpRequestParams) {
        var path = this.basePath + '/Transactions';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (filter !== undefined) {
            queryParameters.set('filter', filter);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Find a model instance by {{id}} from the data source.
     *
     * @param id Model id
     * @param filter Filter defining fields and include - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    TransactionService.prototype.transactionFindByIdWithHttpInfo = function (id, filter, extraHttpRequestParams) {
        var path = this.basePath + '/Transactions/${id}'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling transactionFindById.');
        }
        if (filter !== undefined) {
            queryParameters.set('filter', filter);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Find first instance of the model matched by filter from the data source.
     *
     * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    TransactionService.prototype.transactionFindOneWithHttpInfo = function (filter, extraHttpRequestParams) {
        var path = this.basePath + '/Transactions/findOne';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (filter !== undefined) {
            queryParameters.set('filter', filter);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param data Model instance data
     */
    TransactionService.prototype.transactionPatchOrCreateWithHttpInfo = function (data, extraHttpRequestParams) {
        var path = this.basePath + '/Transactions';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Patch,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Fetches belongsTo relation entity.
     *
     * @param id Transaction id
     * @param refresh
     */
    TransactionService.prototype.transactionPrototypeGetEntityWithHttpInfo = function (id, refresh, extraHttpRequestParams) {
        var path = this.basePath + '/Transactions/${id}/entity'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling transactionPrototypeGetEntity.');
        }
        if (refresh !== undefined) {
            queryParameters.set('refresh', refresh);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Fetches belongsTo relation transactionType.
     *
     * @param id Transaction id
     * @param refresh
     */
    TransactionService.prototype.transactionPrototypeGetTransactionTypeWithHttpInfo = function (id, refresh, extraHttpRequestParams) {
        var path = this.basePath + '/Transactions/${id}/transactionType'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling transactionPrototypeGetTransactionType.');
        }
        if (refresh !== undefined) {
            queryParameters.set('refresh', refresh);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param id Transaction id
     * @param data An object of model property name/value pairs
     */
    TransactionService.prototype.transactionPrototypePatchAttributesWithHttpInfo = function (id, data, extraHttpRequestParams) {
        var path = this.basePath + '/Transactions/${id}'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling transactionPrototypePatchAttributes.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Patch,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Replace attributes for a model instance and persist it into the data source.
     *
     * @param id Model id
     * @param data Model instance data
     */
    TransactionService.prototype.transactionReplaceByIdPostTransactionsidReplaceWithHttpInfo = function (id, data, extraHttpRequestParams) {
        var path = this.basePath + '/Transactions/${id}/replace'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling transactionReplaceByIdPostTransactionsidReplace.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Replace attributes for a model instance and persist it into the data source.
     *
     * @param id Model id
     * @param data Model instance data
     */
    TransactionService.prototype.transactionReplaceByIdPutTransactionsidWithHttpInfo = function (id, data, extraHttpRequestParams) {
        var path = this.basePath + '/Transactions/${id}'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling transactionReplaceByIdPutTransactionsid.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Put,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Replace an existing model instance or insert a new one into the data source.
     *
     * @param data Model instance data
     */
    TransactionService.prototype.transactionReplaceOrCreatePostTransactionsReplaceOrCreateWithHttpInfo = function (data, extraHttpRequestParams) {
        var path = this.basePath + '/Transactions/replaceOrCreate';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Replace an existing model instance or insert a new one into the data source.
     *
     * @param data Model instance data
     */
    TransactionService.prototype.transactionReplaceOrCreatePutTransactionsWithHttpInfo = function (data, extraHttpRequestParams) {
        var path = this.basePath + '/Transactions';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Put,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Update instances of the model matched by {{where}} from the data source.
     *
     * @param where Criteria to match model instances
     * @param data An object of model property name/value pairs
     */
    TransactionService.prototype.transactionUpdateAllWithHttpInfo = function (where, data, extraHttpRequestParams) {
        var path = this.basePath + '/Transactions/update';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (where !== undefined) {
            queryParameters.set('where', where);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Update an existing model instance or insert a new one into the data source based on the where criteria.
     *
     * @param where Criteria to match model instances
     * @param data An object of model property name/value pairs
     */
    TransactionService.prototype.transactionUpsertWithWhereWithHttpInfo = function (where, data, extraHttpRequestParams) {
        var path = this.basePath + '/Transactions/upsertWithWhere';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (where !== undefined) {
            queryParameters.set('where', where);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return TransactionService;
}());
TransactionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__env_environment__["a" /* BASE_PATH */])), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], String, __WEBPACK_IMPORTED_MODULE_3__configuration__["a" /* Configuration */]])
], TransactionService);

//# sourceMappingURL=transaction.service.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionTypeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rxjs_operators__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configuration__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__env_environment__ = __webpack_require__(43);
/**
 * bt-server
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */







var TransactionTypeService = (function () {
    function TransactionTypeService(http, basePath, configuration) {
        this.http = http;
        this.basePath = 'https://localhost/api';
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_3__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     *
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    TransactionTypeService.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    TransactionTypeService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    /**
     *
     * @summary Count instances of the model matched by where from the data source.
     * @param where Criteria to match model instances
     */
    TransactionTypeService.prototype.transactionTypeCount = function (where, extraHttpRequestParams) {
        return this.transactionTypeCountWithHttpInfo(where, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Create a new instance of the model and persist it into the data source.
     * @param data Model instance data
     */
    TransactionTypeService.prototype.transactionTypeCreate = function (data, extraHttpRequestParams) {
        return this.transactionTypeCreateWithHttpInfo(data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Create a change stream.
     * @param options
     */
    TransactionTypeService.prototype.transactionTypeCreateChangeStreamGetTransactionTypesChangeStream = function (options, extraHttpRequestParams) {
        return this.transactionTypeCreateChangeStreamGetTransactionTypesChangeStreamWithHttpInfo(options, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.blob();
            }
        });
    };
    /**
     *
     * @summary Create a change stream.
     * @param options
     */
    TransactionTypeService.prototype.transactionTypeCreateChangeStreamPostTransactionTypesChangeStream = function (options, extraHttpRequestParams) {
        return this.transactionTypeCreateChangeStreamPostTransactionTypesChangeStreamWithHttpInfo(options, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.blob();
            }
        });
    };
    /**
     *
     * @summary Delete a model instance by {{id}} from the data source.
     * @param id Model id
     */
    TransactionTypeService.prototype.transactionTypeDeleteById = function (id, extraHttpRequestParams) {
        return this.transactionTypeDeleteByIdWithHttpInfo(id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Check whether a model instance exists in the data source.
     * @param id Model id
     */
    TransactionTypeService.prototype.transactionTypeExistsGetTransactionTypesidExists = function (id, extraHttpRequestParams) {
        return this.transactionTypeExistsGetTransactionTypesidExistsWithHttpInfo(id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Check whether a model instance exists in the data source.
     * @param id Model id
     */
    TransactionTypeService.prototype.transactionTypeExistsHeadTransactionTypesid = function (id, extraHttpRequestParams) {
        return this.transactionTypeExistsHeadTransactionTypesidWithHttpInfo(id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Find all instances of the model matched by filter from the data source.
     * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    TransactionTypeService.prototype.transactionTypeFind = function (filter, extraHttpRequestParams) {
        return this.transactionTypeFindWithHttpInfo(filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Find a model instance by {{id}} from the data source.
     * @param id Model id
     * @param filter Filter defining fields and include - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    TransactionTypeService.prototype.transactionTypeFindById = function (id, filter, extraHttpRequestParams) {
        return this.transactionTypeFindByIdWithHttpInfo(id, filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Find first instance of the model matched by filter from the data source.
     * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    TransactionTypeService.prototype.transactionTypeFindOne = function (filter, extraHttpRequestParams) {
        return this.transactionTypeFindOneWithHttpInfo(filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Patch an existing model instance or insert a new one into the data source.
     * @param data Model instance data
     */
    TransactionTypeService.prototype.transactionTypePatchOrCreate = function (data, extraHttpRequestParams) {
        return this.transactionTypePatchOrCreateWithHttpInfo(data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Counts transactions of TransactionType.
     * @param id TransactionType id
     * @param where Criteria to match model instances
     */
    TransactionTypeService.prototype.transactionTypePrototypeCountTransactions = function (id, where, extraHttpRequestParams) {
        return this.transactionTypePrototypeCountTransactionsWithHttpInfo(id, where, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Creates a new instance in transactions of this model.
     * @param id TransactionType id
     * @param data
     */
    TransactionTypeService.prototype.transactionTypePrototypeCreateTransactions = function (id, data, extraHttpRequestParams) {
        return this.transactionTypePrototypeCreateTransactionsWithHttpInfo(id, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Deletes all transactions of this model.
     * @param id TransactionType id
     */
    TransactionTypeService.prototype.transactionTypePrototypeDeleteTransactions = function (id, extraHttpRequestParams) {
        return this.transactionTypePrototypeDeleteTransactionsWithHttpInfo(id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Delete a related item by id for transactions.
     * @param fk Foreign key for transactions
     * @param id TransactionType id
     */
    TransactionTypeService.prototype.transactionTypePrototypeDestroyByIdTransactions = function (fk, id, extraHttpRequestParams) {
        return this.transactionTypePrototypeDestroyByIdTransactionsWithHttpInfo(fk, id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Find a related item by id for transactions.
     * @param fk Foreign key for transactions
     * @param id TransactionType id
     */
    TransactionTypeService.prototype.transactionTypePrototypeFindByIdTransactions = function (fk, id, extraHttpRequestParams) {
        return this.transactionTypePrototypeFindByIdTransactionsWithHttpInfo(fk, id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Queries transactions of TransactionType.
     * @param id TransactionType id
     * @param filter
     */
    TransactionTypeService.prototype.transactionTypePrototypeGetTransactions = function (id, filter, extraHttpRequestParams) {
        return this.transactionTypePrototypeGetTransactionsWithHttpInfo(id, filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Patch attributes for a model instance and persist it into the data source.
     * @param id TransactionType id
     * @param data An object of model property name/value pairs
     */
    TransactionTypeService.prototype.transactionTypePrototypePatchAttributes = function (id, data, extraHttpRequestParams) {
        return this.transactionTypePrototypePatchAttributesWithHttpInfo(id, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Update a related item by id for transactions.
     * @param fk Foreign key for transactions
     * @param id TransactionType id
     * @param data
     */
    TransactionTypeService.prototype.transactionTypePrototypeUpdateByIdTransactions = function (fk, id, data, extraHttpRequestParams) {
        return this.transactionTypePrototypeUpdateByIdTransactionsWithHttpInfo(fk, id, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Replace attributes for a model instance and persist it into the data source.
     * @param id Model id
     * @param data Model instance data
     */
    TransactionTypeService.prototype.transactionTypeReplaceByIdPostTransactionTypesidReplace = function (id, data, extraHttpRequestParams) {
        return this.transactionTypeReplaceByIdPostTransactionTypesidReplaceWithHttpInfo(id, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Replace attributes for a model instance and persist it into the data source.
     * @param id Model id
     * @param data Model instance data
     */
    TransactionTypeService.prototype.transactionTypeReplaceByIdPutTransactionTypesid = function (id, data, extraHttpRequestParams) {
        return this.transactionTypeReplaceByIdPutTransactionTypesidWithHttpInfo(id, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Replace an existing model instance or insert a new one into the data source.
     * @param data Model instance data
     */
    TransactionTypeService.prototype.transactionTypeReplaceOrCreatePostTransactionTypesReplaceOrCreate = function (data, extraHttpRequestParams) {
        return this.transactionTypeReplaceOrCreatePostTransactionTypesReplaceOrCreateWithHttpInfo(data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Replace an existing model instance or insert a new one into the data source.
     * @param data Model instance data
     */
    TransactionTypeService.prototype.transactionTypeReplaceOrCreatePutTransactionTypes = function (data, extraHttpRequestParams) {
        return this.transactionTypeReplaceOrCreatePutTransactionTypesWithHttpInfo(data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Update instances of the model matched by {{where}} from the data source.
     * @param where Criteria to match model instances
     * @param data An object of model property name/value pairs
     */
    TransactionTypeService.prototype.transactionTypeUpdateAll = function (where, data, extraHttpRequestParams) {
        return this.transactionTypeUpdateAllWithHttpInfo(where, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Update an existing model instance or insert a new one into the data source based on the where criteria.
     * @param where Criteria to match model instances
     * @param data An object of model property name/value pairs
     */
    TransactionTypeService.prototype.transactionTypeUpsertWithWhere = function (where, data, extraHttpRequestParams) {
        return this.transactionTypeUpsertWithWhereWithHttpInfo(where, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * Count instances of the model matched by where from the data source.
     *
     * @param where Criteria to match model instances
     */
    TransactionTypeService.prototype.transactionTypeCountWithHttpInfo = function (where, extraHttpRequestParams) {
        var path = this.basePath + '/TransactionTypes/count';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (where !== undefined) {
            queryParameters.set('where', where);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Create a new instance of the model and persist it into the data source.
     *
     * @param data Model instance data
     */
    TransactionTypeService.prototype.transactionTypeCreateWithHttpInfo = function (data, extraHttpRequestParams) {
        var path = this.basePath + '/TransactionTypes';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Create a change stream.
     *
     * @param options
     */
    TransactionTypeService.prototype.transactionTypeCreateChangeStreamGetTransactionTypesChangeStreamWithHttpInfo = function (options, extraHttpRequestParams) {
        var path = this.basePath + '/TransactionTypes/change-stream';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (options !== undefined) {
            queryParameters.set('options', options);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* ResponseContentType */].Blob,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Create a change stream.
     *
     * @param options
     */
    TransactionTypeService.prototype.transactionTypeCreateChangeStreamPostTransactionTypesChangeStreamWithHttpInfo = function (options, extraHttpRequestParams) {
        var path = this.basePath + '/TransactionTypes/change-stream';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [
            'application/json',
            'application/x-www-form-urlencoded',
            'application/xml',
            'text/xml'
        ];
        var canConsumeForm = this.canConsumeForm(consumes);
        var useForm = false;
        var formParams = new (useForm ? FormData : __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */])();
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        if (options !== undefined) {
            formParams.set('options', options);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: formParams.toString(),
            responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* ResponseContentType */].Blob,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Delete a model instance by {{id}} from the data source.
     *
     * @param id Model id
     */
    TransactionTypeService.prototype.transactionTypeDeleteByIdWithHttpInfo = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/TransactionTypes/${id}'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling transactionTypeDeleteById.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Check whether a model instance exists in the data source.
     *
     * @param id Model id
     */
    TransactionTypeService.prototype.transactionTypeExistsGetTransactionTypesidExistsWithHttpInfo = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/TransactionTypes/${id}/exists'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling transactionTypeExistsGetTransactionTypesidExists.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Check whether a model instance exists in the data source.
     *
     * @param id Model id
     */
    TransactionTypeService.prototype.transactionTypeExistsHeadTransactionTypesidWithHttpInfo = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/TransactionTypes/${id}'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling transactionTypeExistsHeadTransactionTypesid.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Head,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Find all instances of the model matched by filter from the data source.
     *
     * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    TransactionTypeService.prototype.transactionTypeFindWithHttpInfo = function (filter, extraHttpRequestParams) {
        var path = this.basePath + '/TransactionTypes';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (filter !== undefined) {
            queryParameters.set('filter', filter);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Find a model instance by {{id}} from the data source.
     *
     * @param id Model id
     * @param filter Filter defining fields and include - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    TransactionTypeService.prototype.transactionTypeFindByIdWithHttpInfo = function (id, filter, extraHttpRequestParams) {
        var path = this.basePath + '/TransactionTypes/${id}'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling transactionTypeFindById.');
        }
        if (filter !== undefined) {
            queryParameters.set('filter', filter);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Find first instance of the model matched by filter from the data source.
     *
     * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    TransactionTypeService.prototype.transactionTypeFindOneWithHttpInfo = function (filter, extraHttpRequestParams) {
        var path = this.basePath + '/TransactionTypes/findOne';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (filter !== undefined) {
            queryParameters.set('filter', filter);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param data Model instance data
     */
    TransactionTypeService.prototype.transactionTypePatchOrCreateWithHttpInfo = function (data, extraHttpRequestParams) {
        var path = this.basePath + '/TransactionTypes';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Patch,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Counts transactions of TransactionType.
     *
     * @param id TransactionType id
     * @param where Criteria to match model instances
     */
    TransactionTypeService.prototype.transactionTypePrototypeCountTransactionsWithHttpInfo = function (id, where, extraHttpRequestParams) {
        var path = this.basePath + '/TransactionTypes/${id}/transactions/count'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling transactionTypePrototypeCountTransactions.');
        }
        if (where !== undefined) {
            queryParameters.set('where', where);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Creates a new instance in transactions of this model.
     *
     * @param id TransactionType id
     * @param data
     */
    TransactionTypeService.prototype.transactionTypePrototypeCreateTransactionsWithHttpInfo = function (id, data, extraHttpRequestParams) {
        var path = this.basePath + '/TransactionTypes/${id}/transactions'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling transactionTypePrototypeCreateTransactions.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Deletes all transactions of this model.
     *
     * @param id TransactionType id
     */
    TransactionTypeService.prototype.transactionTypePrototypeDeleteTransactionsWithHttpInfo = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/TransactionTypes/${id}/transactions'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling transactionTypePrototypeDeleteTransactions.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Delete a related item by id for transactions.
     *
     * @param fk Foreign key for transactions
     * @param id TransactionType id
     */
    TransactionTypeService.prototype.transactionTypePrototypeDestroyByIdTransactionsWithHttpInfo = function (fk, id, extraHttpRequestParams) {
        var path = this.basePath + '/TransactionTypes/${id}/transactions/${fk}'
            .replace('${' + 'fk' + '}', String(fk))
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'fk' is not null or undefined
        if (fk === null || fk === undefined) {
            throw new Error('Required parameter fk was null or undefined when calling transactionTypePrototypeDestroyByIdTransactions.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling transactionTypePrototypeDestroyByIdTransactions.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Find a related item by id for transactions.
     *
     * @param fk Foreign key for transactions
     * @param id TransactionType id
     */
    TransactionTypeService.prototype.transactionTypePrototypeFindByIdTransactionsWithHttpInfo = function (fk, id, extraHttpRequestParams) {
        var path = this.basePath + '/TransactionTypes/${id}/transactions/${fk}'
            .replace('${' + 'fk' + '}', String(fk))
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'fk' is not null or undefined
        if (fk === null || fk === undefined) {
            throw new Error('Required parameter fk was null or undefined when calling transactionTypePrototypeFindByIdTransactions.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling transactionTypePrototypeFindByIdTransactions.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Queries transactions of TransactionType.
     *
     * @param id TransactionType id
     * @param filter
     */
    TransactionTypeService.prototype.transactionTypePrototypeGetTransactionsWithHttpInfo = function (id, filter, extraHttpRequestParams) {
        var path = this.basePath + '/TransactionTypes/${id}/transactions'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling transactionTypePrototypeGetTransactions.');
        }
        if (filter !== undefined) {
            queryParameters.set('filter', filter);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param id TransactionType id
     * @param data An object of model property name/value pairs
     */
    TransactionTypeService.prototype.transactionTypePrototypePatchAttributesWithHttpInfo = function (id, data, extraHttpRequestParams) {
        var path = this.basePath + '/TransactionTypes/${id}'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling transactionTypePrototypePatchAttributes.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Patch,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Update a related item by id for transactions.
     *
     * @param fk Foreign key for transactions
     * @param id TransactionType id
     * @param data
     */
    TransactionTypeService.prototype.transactionTypePrototypeUpdateByIdTransactionsWithHttpInfo = function (fk, id, data, extraHttpRequestParams) {
        var path = this.basePath + '/TransactionTypes/${id}/transactions/${fk}'
            .replace('${' + 'fk' + '}', String(fk))
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'fk' is not null or undefined
        if (fk === null || fk === undefined) {
            throw new Error('Required parameter fk was null or undefined when calling transactionTypePrototypeUpdateByIdTransactions.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling transactionTypePrototypeUpdateByIdTransactions.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Put,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Replace attributes for a model instance and persist it into the data source.
     *
     * @param id Model id
     * @param data Model instance data
     */
    TransactionTypeService.prototype.transactionTypeReplaceByIdPostTransactionTypesidReplaceWithHttpInfo = function (id, data, extraHttpRequestParams) {
        var path = this.basePath + '/TransactionTypes/${id}/replace'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling transactionTypeReplaceByIdPostTransactionTypesidReplace.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Replace attributes for a model instance and persist it into the data source.
     *
     * @param id Model id
     * @param data Model instance data
     */
    TransactionTypeService.prototype.transactionTypeReplaceByIdPutTransactionTypesidWithHttpInfo = function (id, data, extraHttpRequestParams) {
        var path = this.basePath + '/TransactionTypes/${id}'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling transactionTypeReplaceByIdPutTransactionTypesid.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Put,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Replace an existing model instance or insert a new one into the data source.
     *
     * @param data Model instance data
     */
    TransactionTypeService.prototype.transactionTypeReplaceOrCreatePostTransactionTypesReplaceOrCreateWithHttpInfo = function (data, extraHttpRequestParams) {
        var path = this.basePath + '/TransactionTypes/replaceOrCreate';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Replace an existing model instance or insert a new one into the data source.
     *
     * @param data Model instance data
     */
    TransactionTypeService.prototype.transactionTypeReplaceOrCreatePutTransactionTypesWithHttpInfo = function (data, extraHttpRequestParams) {
        var path = this.basePath + '/TransactionTypes';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Put,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Update instances of the model matched by {{where}} from the data source.
     *
     * @param where Criteria to match model instances
     * @param data An object of model property name/value pairs
     */
    TransactionTypeService.prototype.transactionTypeUpdateAllWithHttpInfo = function (where, data, extraHttpRequestParams) {
        var path = this.basePath + '/TransactionTypes/update';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (where !== undefined) {
            queryParameters.set('where', where);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Update an existing model instance or insert a new one into the data source based on the where criteria.
     *
     * @param where Criteria to match model instances
     * @param data An object of model property name/value pairs
     */
    TransactionTypeService.prototype.transactionTypeUpsertWithWhereWithHttpInfo = function (where, data, extraHttpRequestParams) {
        var path = this.basePath + '/TransactionTypes/upsertWithWhere';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (where !== undefined) {
            queryParameters.set('where', where);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return TransactionTypeService;
}());
TransactionTypeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__env_environment__["a" /* BASE_PATH */])), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], String, __WEBPACK_IMPORTED_MODULE_3__configuration__["a" /* Configuration */]])
], TransactionTypeService);

//# sourceMappingURL=transactionType.service.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rxjs_operators__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configuration__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__env_environment__ = __webpack_require__(43);
/**
 * bt-server
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */







var UserService = (function () {
    function UserService(http, basePath, configuration) {
        this.http = http;
        this.basePath = 'https://localhost/api';
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_3__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     *
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    UserService.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    UserService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    /**
     *
     * @summary Change a user's password.
     * @param oldPassword
     * @param newPassword
     */
    UserService.prototype.userChangePassword = function (oldPassword, newPassword, extraHttpRequestParams) {
        return this.userChangePasswordWithHttpInfo(oldPassword, newPassword, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Confirm a user registration with identity verification token.
     * @param uid
     * @param token
     * @param redirect
     */
    UserService.prototype.userConfirm = function (uid, token, redirect, extraHttpRequestParams) {
        return this.userConfirmWithHttpInfo(uid, token, redirect, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Count instances of the model matched by where from the data source.
     * @param where Criteria to match model instances
     */
    UserService.prototype.userCount = function (where, extraHttpRequestParams) {
        return this.userCountWithHttpInfo(where, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Create a new instance of the model and persist it into the data source.
     * @param data Model instance data
     */
    UserService.prototype.userCreate = function (data, extraHttpRequestParams) {
        return this.userCreateWithHttpInfo(data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Create a change stream.
     * @param options
     */
    UserService.prototype.userCreateChangeStreamGetUsersChangeStream = function (options, extraHttpRequestParams) {
        return this.userCreateChangeStreamGetUsersChangeStreamWithHttpInfo(options, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.blob();
            }
        });
    };
    /**
     *
     * @summary Create a change stream.
     * @param options
     */
    UserService.prototype.userCreateChangeStreamPostUsersChangeStream = function (options, extraHttpRequestParams) {
        return this.userCreateChangeStreamPostUsersChangeStreamWithHttpInfo(options, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.blob();
            }
        });
    };
    /**
     *
     * @summary Delete a model instance by {{id}} from the data source.
     * @param id Model id
     */
    UserService.prototype.userDeleteById = function (id, extraHttpRequestParams) {
        return this.userDeleteByIdWithHttpInfo(id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Check whether a model instance exists in the data source.
     * @param id Model id
     */
    UserService.prototype.userExistsGetUsersidExists = function (id, extraHttpRequestParams) {
        return this.userExistsGetUsersidExistsWithHttpInfo(id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Check whether a model instance exists in the data source.
     * @param id Model id
     */
    UserService.prototype.userExistsHeadUsersid = function (id, extraHttpRequestParams) {
        return this.userExistsHeadUsersidWithHttpInfo(id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Find all instances of the model matched by filter from the data source.
     * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    UserService.prototype.userFind = function (filter, extraHttpRequestParams) {
        return this.userFindWithHttpInfo(filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Find a model instance by {{id}} from the data source.
     * @param id Model id
     * @param filter Filter defining fields and include - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    UserService.prototype.userFindById = function (id, filter, extraHttpRequestParams) {
        return this.userFindByIdWithHttpInfo(id, filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Find first instance of the model matched by filter from the data source.
     * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    UserService.prototype.userFindOne = function (filter, extraHttpRequestParams) {
        return this.userFindOneWithHttpInfo(filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Login a user with username/email and password.
     * @param credentials
     * @param include Related objects to include in the response. See the description of return value for more details.
     */
    UserService.prototype.userLogin = function (credentials, include, extraHttpRequestParams) {
        return this.userLoginWithHttpInfo(credentials, include, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Logout a user with access token.
     */
    UserService.prototype.userLogout = function (extraHttpRequestParams) {
        return this.userLogoutWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Patch an existing model instance or insert a new one into the data source.
     * @param data Model instance data
     */
    UserService.prototype.userPatchOrCreate = function (data, extraHttpRequestParams) {
        return this.userPatchOrCreateWithHttpInfo(data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Counts accessTokens of User.
     * @param id User id
     * @param where Criteria to match model instances
     */
    UserService.prototype.userPrototypeCountAccessTokens = function (id, where, extraHttpRequestParams) {
        return this.userPrototypeCountAccessTokensWithHttpInfo(id, where, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Creates a new instance in accessTokens of this model.
     * @param id User id
     * @param data
     */
    UserService.prototype.userPrototypeCreateAccessTokens = function (id, data, extraHttpRequestParams) {
        return this.userPrototypeCreateAccessTokensWithHttpInfo(id, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Deletes all accessTokens of this model.
     * @param id User id
     */
    UserService.prototype.userPrototypeDeleteAccessTokens = function (id, extraHttpRequestParams) {
        return this.userPrototypeDeleteAccessTokensWithHttpInfo(id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Delete a related item by id for accessTokens.
     * @param fk Foreign key for accessTokens
     * @param id User id
     */
    UserService.prototype.userPrototypeDestroyByIdAccessTokens = function (fk, id, extraHttpRequestParams) {
        return this.userPrototypeDestroyByIdAccessTokensWithHttpInfo(fk, id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Find a related item by id for accessTokens.
     * @param fk Foreign key for accessTokens
     * @param id User id
     */
    UserService.prototype.userPrototypeFindByIdAccessTokens = function (fk, id, extraHttpRequestParams) {
        return this.userPrototypeFindByIdAccessTokensWithHttpInfo(fk, id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Queries accessTokens of User.
     * @param id User id
     * @param filter
     */
    UserService.prototype.userPrototypeGetAccessTokens = function (id, filter, extraHttpRequestParams) {
        return this.userPrototypeGetAccessTokensWithHttpInfo(id, filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Patch attributes for a model instance and persist it into the data source.
     * @param id User id
     * @param data An object of model property name/value pairs
     */
    UserService.prototype.userPrototypePatchAttributes = function (id, data, extraHttpRequestParams) {
        return this.userPrototypePatchAttributesWithHttpInfo(id, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Update a related item by id for accessTokens.
     * @param fk Foreign key for accessTokens
     * @param id User id
     * @param data
     */
    UserService.prototype.userPrototypeUpdateByIdAccessTokens = function (fk, id, data, extraHttpRequestParams) {
        return this.userPrototypeUpdateByIdAccessTokensWithHttpInfo(fk, id, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Trigger user's identity verification with configured verifyOptions
     * @param id User id
     */
    UserService.prototype.userPrototypeVerify = function (id, extraHttpRequestParams) {
        return this.userPrototypeVerifyWithHttpInfo(id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Replace attributes for a model instance and persist it into the data source.
     * @param id Model id
     * @param data Model instance data
     */
    UserService.prototype.userReplaceByIdPostUsersidReplace = function (id, data, extraHttpRequestParams) {
        return this.userReplaceByIdPostUsersidReplaceWithHttpInfo(id, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Replace attributes for a model instance and persist it into the data source.
     * @param id Model id
     * @param data Model instance data
     */
    UserService.prototype.userReplaceByIdPutUsersid = function (id, data, extraHttpRequestParams) {
        return this.userReplaceByIdPutUsersidWithHttpInfo(id, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Replace an existing model instance or insert a new one into the data source.
     * @param data Model instance data
     */
    UserService.prototype.userReplaceOrCreatePostUsersReplaceOrCreate = function (data, extraHttpRequestParams) {
        return this.userReplaceOrCreatePostUsersReplaceOrCreateWithHttpInfo(data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Replace an existing model instance or insert a new one into the data source.
     * @param data Model instance data
     */
    UserService.prototype.userReplaceOrCreatePutUsers = function (data, extraHttpRequestParams) {
        return this.userReplaceOrCreatePutUsersWithHttpInfo(data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Reset password for a user with email.
     * @param options
     */
    UserService.prototype.userResetPassword = function (options, extraHttpRequestParams) {
        return this.userResetPasswordWithHttpInfo(options, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Reset user's password via a password-reset token.
     * @param newPassword
     */
    UserService.prototype.userSetPassword = function (newPassword, extraHttpRequestParams) {
        return this.userSetPasswordWithHttpInfo(newPassword, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Update instances of the model matched by {{where}} from the data source.
     * @param where Criteria to match model instances
     * @param data An object of model property name/value pairs
     */
    UserService.prototype.userUpdateAll = function (where, data, extraHttpRequestParams) {
        return this.userUpdateAllWithHttpInfo(where, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Update an existing model instance or insert a new one into the data source based on the where criteria.
     * @param where Criteria to match model instances
     * @param data An object of model property name/value pairs
     */
    UserService.prototype.userUpsertWithWhere = function (where, data, extraHttpRequestParams) {
        return this.userUpsertWithWhereWithHttpInfo(where, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * Change a user&#39;s password.
     *
     * @param oldPassword
     * @param newPassword
     */
    UserService.prototype.userChangePasswordWithHttpInfo = function (oldPassword, newPassword, extraHttpRequestParams) {
        var path = this.basePath + '/Users/change-password';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'oldPassword' is not null or undefined
        if (oldPassword === null || oldPassword === undefined) {
            throw new Error('Required parameter oldPassword was null or undefined when calling userChangePassword.');
        }
        // verify required parameter 'newPassword' is not null or undefined
        if (newPassword === null || newPassword === undefined) {
            throw new Error('Required parameter newPassword was null or undefined when calling userChangePassword.');
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json',
            'application/x-www-form-urlencoded',
            'application/xml',
            'text/xml'
        ];
        var canConsumeForm = this.canConsumeForm(consumes);
        var useForm = false;
        var formParams = new (useForm ? FormData : __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */])();
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        if (oldPassword !== undefined) {
            formParams.set('oldPassword', oldPassword);
        }
        if (newPassword !== undefined) {
            formParams.set('newPassword', newPassword);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: formParams.toString(),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Confirm a user registration with identity verification token.
     *
     * @param uid
     * @param token
     * @param redirect
     */
    UserService.prototype.userConfirmWithHttpInfo = function (uid, token, redirect, extraHttpRequestParams) {
        var path = this.basePath + '/Users/confirm';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'uid' is not null or undefined
        if (uid === null || uid === undefined) {
            throw new Error('Required parameter uid was null or undefined when calling userConfirm.');
        }
        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new Error('Required parameter token was null or undefined when calling userConfirm.');
        }
        if (uid !== undefined) {
            queryParameters.set('uid', uid);
        }
        if (token !== undefined) {
            queryParameters.set('token', token);
        }
        if (redirect !== undefined) {
            queryParameters.set('redirect', redirect);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Count instances of the model matched by where from the data source.
     *
     * @param where Criteria to match model instances
     */
    UserService.prototype.userCountWithHttpInfo = function (where, extraHttpRequestParams) {
        var path = this.basePath + '/Users/count';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (where !== undefined) {
            queryParameters.set('where', where);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Create a new instance of the model and persist it into the data source.
     *
     * @param data Model instance data
     */
    UserService.prototype.userCreateWithHttpInfo = function (data, extraHttpRequestParams) {
        var path = this.basePath + '/Users';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Create a change stream.
     *
     * @param options
     */
    UserService.prototype.userCreateChangeStreamGetUsersChangeStreamWithHttpInfo = function (options, extraHttpRequestParams) {
        var path = this.basePath + '/Users/change-stream';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (options !== undefined) {
            queryParameters.set('options', options);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* ResponseContentType */].Blob,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Create a change stream.
     *
     * @param options
     */
    UserService.prototype.userCreateChangeStreamPostUsersChangeStreamWithHttpInfo = function (options, extraHttpRequestParams) {
        var path = this.basePath + '/Users/change-stream';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [
            'application/json',
            'application/x-www-form-urlencoded',
            'application/xml',
            'text/xml'
        ];
        var canConsumeForm = this.canConsumeForm(consumes);
        var useForm = false;
        var formParams = new (useForm ? FormData : __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */])();
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        if (options !== undefined) {
            formParams.set('options', options);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: formParams.toString(),
            responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* ResponseContentType */].Blob,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Delete a model instance by {{id}} from the data source.
     *
     * @param id Model id
     */
    UserService.prototype.userDeleteByIdWithHttpInfo = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/Users/${id}'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling userDeleteById.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Check whether a model instance exists in the data source.
     *
     * @param id Model id
     */
    UserService.prototype.userExistsGetUsersidExistsWithHttpInfo = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/Users/${id}/exists'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling userExistsGetUsersidExists.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Check whether a model instance exists in the data source.
     *
     * @param id Model id
     */
    UserService.prototype.userExistsHeadUsersidWithHttpInfo = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/Users/${id}'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling userExistsHeadUsersid.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Head,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Find all instances of the model matched by filter from the data source.
     *
     * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    UserService.prototype.userFindWithHttpInfo = function (filter, extraHttpRequestParams) {
        var path = this.basePath + '/Users';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (filter !== undefined) {
            queryParameters.set('filter', filter);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Find a model instance by {{id}} from the data source.
     *
     * @param id Model id
     * @param filter Filter defining fields and include - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    UserService.prototype.userFindByIdWithHttpInfo = function (id, filter, extraHttpRequestParams) {
        var path = this.basePath + '/Users/${id}'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling userFindById.');
        }
        if (filter !== undefined) {
            queryParameters.set('filter', filter);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Find first instance of the model matched by filter from the data source.
     *
     * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    UserService.prototype.userFindOneWithHttpInfo = function (filter, extraHttpRequestParams) {
        var path = this.basePath + '/Users/findOne';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (filter !== undefined) {
            queryParameters.set('filter', filter);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Login a user with username/email and password.
     *
     * @param credentials
     * @param include Related objects to include in the response. See the description of return value for more details.
     */
    UserService.prototype.userLoginWithHttpInfo = function (credentials, include, extraHttpRequestParams) {
        var path = this.basePath + '/Users/login';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'credentials' is not null or undefined
        if (credentials === null || credentials === undefined) {
            throw new Error('Required parameter credentials was null or undefined when calling userLogin.');
        }
        if (include !== undefined) {
            queryParameters.set('include', include);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: credentials == null ? '' : JSON.stringify(credentials),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Logout a user with access token.
     *
     */
    UserService.prototype.userLogoutWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + '/Users/logout';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param data Model instance data
     */
    UserService.prototype.userPatchOrCreateWithHttpInfo = function (data, extraHttpRequestParams) {
        var path = this.basePath + '/Users';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Patch,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Counts accessTokens of User.
     *
     * @param id User id
     * @param where Criteria to match model instances
     */
    UserService.prototype.userPrototypeCountAccessTokensWithHttpInfo = function (id, where, extraHttpRequestParams) {
        var path = this.basePath + '/Users/${id}/accessTokens/count'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling userPrototypeCountAccessTokens.');
        }
        if (where !== undefined) {
            queryParameters.set('where', where);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Creates a new instance in accessTokens of this model.
     *
     * @param id User id
     * @param data
     */
    UserService.prototype.userPrototypeCreateAccessTokensWithHttpInfo = function (id, data, extraHttpRequestParams) {
        var path = this.basePath + '/Users/${id}/accessTokens'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling userPrototypeCreateAccessTokens.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Deletes all accessTokens of this model.
     *
     * @param id User id
     */
    UserService.prototype.userPrototypeDeleteAccessTokensWithHttpInfo = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/Users/${id}/accessTokens'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling userPrototypeDeleteAccessTokens.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Delete a related item by id for accessTokens.
     *
     * @param fk Foreign key for accessTokens
     * @param id User id
     */
    UserService.prototype.userPrototypeDestroyByIdAccessTokensWithHttpInfo = function (fk, id, extraHttpRequestParams) {
        var path = this.basePath + '/Users/${id}/accessTokens/${fk}'
            .replace('${' + 'fk' + '}', String(fk))
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'fk' is not null or undefined
        if (fk === null || fk === undefined) {
            throw new Error('Required parameter fk was null or undefined when calling userPrototypeDestroyByIdAccessTokens.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling userPrototypeDestroyByIdAccessTokens.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Find a related item by id for accessTokens.
     *
     * @param fk Foreign key for accessTokens
     * @param id User id
     */
    UserService.prototype.userPrototypeFindByIdAccessTokensWithHttpInfo = function (fk, id, extraHttpRequestParams) {
        var path = this.basePath + '/Users/${id}/accessTokens/${fk}'
            .replace('${' + 'fk' + '}', String(fk))
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'fk' is not null or undefined
        if (fk === null || fk === undefined) {
            throw new Error('Required parameter fk was null or undefined when calling userPrototypeFindByIdAccessTokens.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling userPrototypeFindByIdAccessTokens.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Queries accessTokens of User.
     *
     * @param id User id
     * @param filter
     */
    UserService.prototype.userPrototypeGetAccessTokensWithHttpInfo = function (id, filter, extraHttpRequestParams) {
        var path = this.basePath + '/Users/${id}/accessTokens'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling userPrototypeGetAccessTokens.');
        }
        if (filter !== undefined) {
            queryParameters.set('filter', filter);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param id User id
     * @param data An object of model property name/value pairs
     */
    UserService.prototype.userPrototypePatchAttributesWithHttpInfo = function (id, data, extraHttpRequestParams) {
        var path = this.basePath + '/Users/${id}'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling userPrototypePatchAttributes.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Patch,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Update a related item by id for accessTokens.
     *
     * @param fk Foreign key for accessTokens
     * @param id User id
     * @param data
     */
    UserService.prototype.userPrototypeUpdateByIdAccessTokensWithHttpInfo = function (fk, id, data, extraHttpRequestParams) {
        var path = this.basePath + '/Users/${id}/accessTokens/${fk}'
            .replace('${' + 'fk' + '}', String(fk))
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'fk' is not null or undefined
        if (fk === null || fk === undefined) {
            throw new Error('Required parameter fk was null or undefined when calling userPrototypeUpdateByIdAccessTokens.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling userPrototypeUpdateByIdAccessTokens.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Put,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Trigger user&#39;s identity verification with configured verifyOptions
     *
     * @param id User id
     */
    UserService.prototype.userPrototypeVerifyWithHttpInfo = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/Users/${id}/verify'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling userPrototypeVerify.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Replace attributes for a model instance and persist it into the data source.
     *
     * @param id Model id
     * @param data Model instance data
     */
    UserService.prototype.userReplaceByIdPostUsersidReplaceWithHttpInfo = function (id, data, extraHttpRequestParams) {
        var path = this.basePath + '/Users/${id}/replace'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling userReplaceByIdPostUsersidReplace.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Replace attributes for a model instance and persist it into the data source.
     *
     * @param id Model id
     * @param data Model instance data
     */
    UserService.prototype.userReplaceByIdPutUsersidWithHttpInfo = function (id, data, extraHttpRequestParams) {
        var path = this.basePath + '/Users/${id}'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling userReplaceByIdPutUsersid.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Put,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Replace an existing model instance or insert a new one into the data source.
     *
     * @param data Model instance data
     */
    UserService.prototype.userReplaceOrCreatePostUsersReplaceOrCreateWithHttpInfo = function (data, extraHttpRequestParams) {
        var path = this.basePath + '/Users/replaceOrCreate';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Replace an existing model instance or insert a new one into the data source.
     *
     * @param data Model instance data
     */
    UserService.prototype.userReplaceOrCreatePutUsersWithHttpInfo = function (data, extraHttpRequestParams) {
        var path = this.basePath + '/Users';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Put,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Reset password for a user with email.
     *
     * @param options
     */
    UserService.prototype.userResetPasswordWithHttpInfo = function (options, extraHttpRequestParams) {
        var path = this.basePath + '/Users/reset';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'options' is not null or undefined
        if (options === null || options === undefined) {
            throw new Error('Required parameter options was null or undefined when calling userResetPassword.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: options == null ? '' : JSON.stringify(options),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Reset user&#39;s password via a password-reset token.
     *
     * @param newPassword
     */
    UserService.prototype.userSetPasswordWithHttpInfo = function (newPassword, extraHttpRequestParams) {
        var path = this.basePath + '/Users/reset-password';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'newPassword' is not null or undefined
        if (newPassword === null || newPassword === undefined) {
            throw new Error('Required parameter newPassword was null or undefined when calling userSetPassword.');
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json',
            'application/x-www-form-urlencoded',
            'application/xml',
            'text/xml'
        ];
        var canConsumeForm = this.canConsumeForm(consumes);
        var useForm = false;
        var formParams = new (useForm ? FormData : __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */])();
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        if (newPassword !== undefined) {
            formParams.set('newPassword', newPassword);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: formParams.toString(),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Update instances of the model matched by {{where}} from the data source.
     *
     * @param where Criteria to match model instances
     * @param data An object of model property name/value pairs
     */
    UserService.prototype.userUpdateAllWithHttpInfo = function (where, data, extraHttpRequestParams) {
        var path = this.basePath + '/Users/update';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (where !== undefined) {
            queryParameters.set('where', where);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Update an existing model instance or insert a new one into the data source based on the where criteria.
     *
     * @param where Criteria to match model instances
     * @param data An object of model property name/value pairs
     */
    UserService.prototype.userUpsertWithWhereWithHttpInfo = function (where, data, extraHttpRequestParams) {
        var path = this.basePath + '/Users/upsertWithWhere';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (where !== undefined) {
            queryParameters.set('where', where);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__env_environment__["a" /* BASE_PATH */])), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], String, __WEBPACK_IMPORTED_MODULE_3__configuration__["a" /* Configuration */]])
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 196;

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Configuration; });
var Configuration = (function () {
    function Configuration(configurationParameters) {
        if (configurationParameters === void 0) { configurationParameters = {}; }
        this.apiKeys = configurationParameters.apiKeys;
        this.username = configurationParameters.username;
        this.password = configurationParameters.password;
        this.accessToken = configurationParameters.accessToken;
        this.basePath = configurationParameters.basePath;
        this.withCredentials = configurationParameters.withCredentials;
    }
    return Configuration;
}());

//# sourceMappingURL=configuration.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__payment_payment_component__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MenuPage = (function () {
    function MenuPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */];
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Dashboard', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */] },
            { title: 'Payment', component: __WEBPACK_IMPORTED_MODULE_5__payment_payment_component__["a" /* PaymentComponent */] },
            { title: 'Sign in', component: __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */] },
            { title: 'Signup', component: __WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */] }
        ];
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('Hello MenuPage Page');
    };
    MenuPage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MenuPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], MenuPage.prototype, "nav", void 0);
MenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-menu',template:/*ion-inline-start:"/Users/gtgoodwin/projects/blackthorn/src/features/menu/menu.html"*/'<ion-menu [content]="content">\n  <ion-header no-border style="box-shadow: none;">\n    <ion-navbar color="primary" no-border style="box-shadow: none !important; border-bottom: 1px solid #fff;">\n      <ion-title><span style="font-weight: 400 !important;">Menu</span></ion-title>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-navbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #content [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/gtgoodwin/projects/blackthorn/src/features/menu/menu.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], MenuPage);

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WelcomePage = (function () {
    function WelcomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    WelcomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    WelcomePage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-welcome',template:/*ion-inline-start:"/Users/gtgoodwin/projects/blackthorn/src/features/welcome/welcome.html"*/'<ion-content scroll="false">\n  <div class="splash-bg"></div>\n  <div class="splash-info">\n    <div class="splash-logo"></div>\n    <div class="splash-intro">\n      <h6>blackthorn.io</h6>\n    </div>\n  </div>\n  <div fxLayout="row" fxLayoutAlign="center start">\n    <div fxLayout="column" fxLayoutAlign="space-around center">\n      <button ion-button (click)="login()" style="min-width: 300px;" color="primary">Login</button>\n      <button ion-button (click)="signup()" style="min-width: 300px; " color="sky">Signup</button>\n\n    </div>\n\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/gtgoodwin/projects/blackthorn/src/features/welcome/welcome.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(397);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_cc_library__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_cc_library___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular_cc_library__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__features_login_login__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__features_menu_menu__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__features_signup_signup__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__features_welcome_welcome__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_google_maps__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__features_dashboard_dashboard_component__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__features_payment_payment_component__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__widgets_widgets_module__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__swagger__ = __webpack_require__(577);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_20__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                driverOrder: ['indexeddb', 'sqlite', 'websql'],
                name: 'btApp',
                storeName: 'bt_store'
            }),
            __WEBPACK_IMPORTED_MODULE_19__widgets_widgets_module__["a" /* WidgetsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_7_angular_cc_library__["CreditCardDirectivesModule"],
            __WEBPACK_IMPORTED_MODULE_21__swagger__["a" /* ApiModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__features_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__features_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_11__features_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_12__features_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_17__features_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_18__features_payment_payment_component__["a" /* PaymentComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_google_maps__["a" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] }
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_17__features_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_18__features_payment_payment_component__["a" /* PaymentComponent */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_7_angular_cc_library__["CreditCardDirectivesModule"],
            __WEBPACK_IMPORTED_MODULE_20__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_19__widgets_widgets_module__["a" /* WidgetsModule */],
            __WEBPACK_IMPORTED_MODULE_21__swagger__["a" /* ApiModule */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__features_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__features_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_11__features_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_12__features_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_17__features_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_18__features_payment_payment_component__["a" /* PaymentComponent */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_from__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_generate__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_generate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_generate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromEvent__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_combineLatest__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_combineLatest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_concat__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_concat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_concat__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_concat__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_concat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_concat__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_do__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_filter__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_find__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_first__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_groupBy__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_groupBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_groupBy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_isEmpty__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_isEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_isEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_last__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_last___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_last__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_merge__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_rxjs_add_operator_mergeMap__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_rxjs_add_operator_onErrorResumeNext__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_rxjs_add_operator_onErrorResumeNext___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_rxjs_add_operator_onErrorResumeNext__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_rxjs_add_operator_pluck__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_rxjs_add_operator_pluck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_rxjs_add_operator_pluck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_rxjs_add_operator_retry__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_rxjs_add_operator_scan__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_rxjs_add_operator_scan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_rxjs_add_operator_scan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_rxjs_add_operator_switchMap__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_rxjs_add_operator_takeUntil__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_rxjs_add_operator_takeWhile__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_rxjs_add_operator_takeWhile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_rxjs_add_operator_takeWhile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_rxjs_add_operator_toPromise__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_rxjs_add_operator_toPromise__);
// RxJS imports according to https://angular.io/docs/ts/latest/guide/server-communication.html#!#rxjs
// See node_module/rxjs/Rxjs.js
// Import just the rxjs statics and operators we need for THIS app.
// Statics







// Operators





















//# sourceMappingURL=rxjs-operators.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export environment */
/* unused harmony export env */
/* unused harmony export ENV */
/* unused harmony export API_PATH */
/* unused harmony export API_BASE_HOST */
/* unused harmony export API_PROTOCOL */
/* unused harmony export API_PORT */
/* unused harmony export API_BASE_URL */
/* unused harmony export BASE_HOST */
/* unused harmony export PROTOCOL */
/* unused harmony export PORT */
/* unused harmony export BASE_URL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BASE_PATH; });
// Development Env. variables
var environment = 'development';
var env = environment;
var ENV = env;
var API_PATH = '/api';
var API_BASE_HOST = 'localhost';
var API_PROTOCOL = 'http';
var API_PORT = 8080;
var API_BASE_URL = API_PROTOCOL + "://" + API_BASE_HOST + (API_PORT ? ':' + API_PORT : null) + API_PATH;
var BASE_HOST = 'localhost';
var PROTOCOL = 'http';
var PORT = 4200;
var BASE_URL = PROTOCOL + "://" + BASE_HOST + (PORT ? ':' + PORT : null);
var BASE_PATH = 'http://localhost:8080/api';
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 252,
	"./af.js": 252,
	"./ar": 253,
	"./ar-dz": 254,
	"./ar-dz.js": 254,
	"./ar-kw": 255,
	"./ar-kw.js": 255,
	"./ar-ly": 256,
	"./ar-ly.js": 256,
	"./ar-ma": 257,
	"./ar-ma.js": 257,
	"./ar-sa": 258,
	"./ar-sa.js": 258,
	"./ar-tn": 259,
	"./ar-tn.js": 259,
	"./ar.js": 253,
	"./az": 260,
	"./az.js": 260,
	"./be": 261,
	"./be.js": 261,
	"./bg": 262,
	"./bg.js": 262,
	"./bn": 263,
	"./bn.js": 263,
	"./bo": 264,
	"./bo.js": 264,
	"./br": 265,
	"./br.js": 265,
	"./bs": 266,
	"./bs.js": 266,
	"./ca": 267,
	"./ca.js": 267,
	"./cs": 268,
	"./cs.js": 268,
	"./cv": 269,
	"./cv.js": 269,
	"./cy": 270,
	"./cy.js": 270,
	"./da": 271,
	"./da.js": 271,
	"./de": 272,
	"./de-at": 273,
	"./de-at.js": 273,
	"./de-ch": 274,
	"./de-ch.js": 274,
	"./de.js": 272,
	"./dv": 275,
	"./dv.js": 275,
	"./el": 276,
	"./el.js": 276,
	"./en-au": 277,
	"./en-au.js": 277,
	"./en-ca": 278,
	"./en-ca.js": 278,
	"./en-gb": 279,
	"./en-gb.js": 279,
	"./en-ie": 280,
	"./en-ie.js": 280,
	"./en-nz": 281,
	"./en-nz.js": 281,
	"./eo": 282,
	"./eo.js": 282,
	"./es": 283,
	"./es-do": 284,
	"./es-do.js": 284,
	"./es.js": 283,
	"./et": 285,
	"./et.js": 285,
	"./eu": 286,
	"./eu.js": 286,
	"./fa": 287,
	"./fa.js": 287,
	"./fi": 288,
	"./fi.js": 288,
	"./fo": 289,
	"./fo.js": 289,
	"./fr": 290,
	"./fr-ca": 291,
	"./fr-ca.js": 291,
	"./fr-ch": 292,
	"./fr-ch.js": 292,
	"./fr.js": 290,
	"./fy": 293,
	"./fy.js": 293,
	"./gd": 294,
	"./gd.js": 294,
	"./gl": 295,
	"./gl.js": 295,
	"./gom-latn": 296,
	"./gom-latn.js": 296,
	"./he": 297,
	"./he.js": 297,
	"./hi": 298,
	"./hi.js": 298,
	"./hr": 299,
	"./hr.js": 299,
	"./hu": 300,
	"./hu.js": 300,
	"./hy-am": 301,
	"./hy-am.js": 301,
	"./id": 302,
	"./id.js": 302,
	"./is": 303,
	"./is.js": 303,
	"./it": 304,
	"./it.js": 304,
	"./ja": 305,
	"./ja.js": 305,
	"./jv": 306,
	"./jv.js": 306,
	"./ka": 307,
	"./ka.js": 307,
	"./kk": 308,
	"./kk.js": 308,
	"./km": 309,
	"./km.js": 309,
	"./kn": 310,
	"./kn.js": 310,
	"./ko": 311,
	"./ko.js": 311,
	"./ky": 312,
	"./ky.js": 312,
	"./lb": 313,
	"./lb.js": 313,
	"./lo": 314,
	"./lo.js": 314,
	"./lt": 315,
	"./lt.js": 315,
	"./lv": 316,
	"./lv.js": 316,
	"./me": 317,
	"./me.js": 317,
	"./mi": 318,
	"./mi.js": 318,
	"./mk": 319,
	"./mk.js": 319,
	"./ml": 320,
	"./ml.js": 320,
	"./mr": 321,
	"./mr.js": 321,
	"./ms": 322,
	"./ms-my": 323,
	"./ms-my.js": 323,
	"./ms.js": 322,
	"./my": 324,
	"./my.js": 324,
	"./nb": 325,
	"./nb.js": 325,
	"./ne": 326,
	"./ne.js": 326,
	"./nl": 327,
	"./nl-be": 328,
	"./nl-be.js": 328,
	"./nl.js": 327,
	"./nn": 329,
	"./nn.js": 329,
	"./pa-in": 330,
	"./pa-in.js": 330,
	"./pl": 331,
	"./pl.js": 331,
	"./pt": 332,
	"./pt-br": 333,
	"./pt-br.js": 333,
	"./pt.js": 332,
	"./ro": 334,
	"./ro.js": 334,
	"./ru": 335,
	"./ru.js": 335,
	"./sd": 336,
	"./sd.js": 336,
	"./se": 337,
	"./se.js": 337,
	"./si": 338,
	"./si.js": 338,
	"./sk": 339,
	"./sk.js": 339,
	"./sl": 340,
	"./sl.js": 340,
	"./sq": 341,
	"./sq.js": 341,
	"./sr": 342,
	"./sr-cyrl": 343,
	"./sr-cyrl.js": 343,
	"./sr.js": 342,
	"./ss": 344,
	"./ss.js": 344,
	"./sv": 345,
	"./sv.js": 345,
	"./sw": 346,
	"./sw.js": 346,
	"./ta": 347,
	"./ta.js": 347,
	"./te": 348,
	"./te.js": 348,
	"./tet": 349,
	"./tet.js": 349,
	"./th": 350,
	"./th.js": 350,
	"./tl-ph": 351,
	"./tl-ph.js": 351,
	"./tlh": 352,
	"./tlh.js": 352,
	"./tr": 353,
	"./tr.js": 353,
	"./tzl": 354,
	"./tzl.js": 354,
	"./tzm": 355,
	"./tzm-latn": 356,
	"./tzm-latn.js": 356,
	"./tzm.js": 355,
	"./uk": 357,
	"./uk.js": 357,
	"./ur": 358,
	"./ur.js": 358,
	"./uz": 359,
	"./uz-latn": 360,
	"./uz-latn.js": 360,
	"./uz.js": 359,
	"./vi": 361,
	"./vi.js": 361,
	"./x-pseudo": 362,
	"./x-pseudo.js": 362,
	"./yo": 363,
	"./yo.js": 363,
	"./zh-cn": 364,
	"./zh-cn.js": 364,
	"./zh-hk": 365,
	"./zh-hk.js": 365,
	"./zh-tw": 366,
	"./zh-tw.js": 366
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 488;

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__features_login_login__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__features_signup_signup__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__features_welcome_welcome__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__features_dashboard_dashboard_component__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__features_payment_payment_component__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, config, statusBar, splashScreen) {
        this.platform = platform;
        this.config = config;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__features_welcome_welcome__["a" /* WelcomePage */];
        this.pages = [
            { title: 'Dashboard', component: __WEBPACK_IMPORTED_MODULE_7__features_dashboard_dashboard_component__["a" /* DashboardComponent */] },
            { title: 'Payment', component: __WEBPACK_IMPORTED_MODULE_8__features_payment_payment_component__["a" /* PaymentComponent */] },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_4__features_login_login__["a" /* LoginPage */] },
            { title: 'Signup', component: __WEBPACK_IMPORTED_MODULE_5__features_signup_signup__["a" /* SignupPage */] }
        ];
    }
    MyApp.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function (readySource) {
            if (readySource === 'cordova') {
                _this.statusBar.styleDefault();
                _this.splashScreen.hide();
            }
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/gtgoodwin/projects/blackthorn/src/app/app.template.html"*/'<ion-menu [content]="content">\n  <ion-header no-border style="box-shadow: none;">\n    <ion-navbar color="primary" no-border style="box-shadow: none !important; border-bottom: 1px solid #fff;">\n      <ion-title><span style="font-weight: 400 !important;">Menu</span></ion-title>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n<ion-nav #content [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/gtgoodwin/projects/blackthorn/src/app/app.template.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Config */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bg_color_directive__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_servererror_component__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_methodnotallowed_component__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pagenotfound_component__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_unauthorized_component__ = __webpack_require__(576);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var WidgetsModule = (function () {
    function WidgetsModule() {
    }
    return WidgetsModule;
}());
WidgetsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__bg_color_directive__["a" /* BgColorDirective */],
            __WEBPACK_IMPORTED_MODULE_4__pages_servererror_component__["a" /* ServerError */],
            __WEBPACK_IMPORTED_MODULE_5__pages_methodnotallowed_component__["a" /* MethodNotAllowed */],
            __WEBPACK_IMPORTED_MODULE_6__pages_pagenotfound_component__["a" /* PageNotFound */],
            __WEBPACK_IMPORTED_MODULE_7__pages_unauthorized_component__["a" /* Unauthorized */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__bg_color_directive__["a" /* BgColorDirective */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__pages_servererror_component__["a" /* ServerError */],
            __WEBPACK_IMPORTED_MODULE_5__pages_methodnotallowed_component__["a" /* MethodNotAllowed */],
            __WEBPACK_IMPORTED_MODULE_6__pages_pagenotfound_component__["a" /* PageNotFound */],
            __WEBPACK_IMPORTED_MODULE_7__pages_unauthorized_component__["a" /* Unauthorized */]
        ],
    })
], WidgetsModule);

//# sourceMappingURL=widgets.module.js.map

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BgColorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BgColorDirective = BgColorDirective_1 = (function () {
    function BgColorDirective(el) {
        this.el = el;
    }
    /* tslint:disable:no-bitwise */
    BgColorDirective.getContrastColor = function (hexcolor) {
        var color = hexcolor.length > 6 ? hexcolor.substr(1) : hexcolor;
        var r = parseInt(color.substr(0, 2), 16);
        var g = parseInt(color.substr(2, 2), 16);
        var b = parseInt(color.substr(4, 2), 16);
        var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        return (yiq >= 128) ? '#222222' : '#ffffff';
    };
    // valid range for percent is -1.0 to 1.0.
    BgColorDirective.shadeHexColor = function (hex, percent) {
        var color = hex.length === 6 ? '#' + hex : hex;
        var f = parseInt(color.slice(1), 16), t = percent < 0 ? 0 : 255, p = percent < 0 ? percent * -1 : percent, R = f >> 16, G = f >> 8 & 0x00FF, B = f & 0x0000FF;
        return '#' + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 +
            (Math.round((t - G) * p) + G) * 0x100 +
            (Math.round((t - B) * p) + B)).toString(16).slice(1);
    };
    BgColorDirective.blendHexColors = function (c0, c1, p) {
        var f = parseInt(c0.slice(1), 16), t = parseInt(c1.slice(1), 16), R1 = f >> 16, G1 = f >> 8 & 0x00FF, B1 = f & 0x0000FF, R2 = t >> 16, G2 = t >> 8 & 0x00FF, B2 = t & 0x0000FF;
        return '#' + (0x1000000 + (Math.round((R2 - R1) * p) + R1) * 0x10000 +
            (Math.round((G2 - G1) * p) + G1) * 0x100 +
            (Math.round((B2 - B1) * p) + B1)).toString(16).slice(1);
    };
    BgColorDirective.shadeRGBColor = function (color, percent) {
        var f = color.split(','), t = percent < 0 ? 0 : 255, p = percent < 0 ? percent * -1 : percent, R = parseInt(f[0].slice(4), 10), G = parseInt(f[1], 10), B = parseInt(f[2], 10);
        return 'rgb(' + (Math.round((t - R) * p) + R) + ',' +
            (Math.round((t - G) * p) + G) + ',' +
            (Math.round((t - B) * p) + B) + ')';
    };
    BgColorDirective.blendRGBColors = function (c0, c1, p) {
        var f = c0.split(','), t = c1.split(','), R = parseInt(f[0].slice(4), 10), G = parseInt(f[1], 10), B = parseInt(f[2], 10);
        return 'rgb(' + (Math.round((parseInt(t[0].slice(4), 10) - R) * p) + R) + ',' +
            (Math.round((parseInt(t[1], 10) - G) * p) + G) + ',' +
            (Math.round((parseInt(t[2], 10) - B) * p) + B) + ')';
    };
    BgColorDirective.prototype.ngAfterViewInit = function () {
        var shade = (this.colorShade && this.colorShade <= 1 && this.colorShade >= -1) ? this.colorShade : 0;
        var color = BgColorDirective_1.shadeHexColor(this.bgColor, shade);
        this.el.nativeElement.style.backgroundColor = color;
        this.el.nativeElement.style.borderLeftColor = BgColorDirective_1.shadeHexColor(color, 0.5);
        this.el.nativeElement.style.borderTopColor = BgColorDirective_1.shadeHexColor(color, 0.5);
        this.el.nativeElement.style.borderRightColor = BgColorDirective_1.shadeHexColor(color, 0.3);
        this.el.nativeElement.style.borderBottomColor = BgColorDirective_1.shadeHexColor(color, 0.3);
        this.el.nativeElement.style.color = BgColorDirective_1.getContrastColor(color);
    };
    return BgColorDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('dohcBgColor'),
    __metadata("design:type", String)
], BgColorDirective.prototype, "bgColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], BgColorDirective.prototype, "colorShade", void 0);
BgColorDirective = BgColorDirective_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[BgColor]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], BgColorDirective);

var BgColorDirective_1;
//# sourceMappingURL=bg-color.directive.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerError; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServerError = (function () {
    function ServerError() {
    }
    return ServerError;
}());
ServerError = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'bot-servererror',template:/*ion-inline-start:"/Users/gtgoodwin/projects/blackthorn/src/widgets/pages/servererror.template.html"*/''/*ion-inline-end:"/Users/gtgoodwin/projects/blackthorn/src/widgets/pages/servererror.template.html"*/
    }),
    __metadata("design:paramtypes", [])
], ServerError);

//# sourceMappingURL=servererror.component.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MethodNotAllowed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MethodNotAllowed = (function () {
    function MethodNotAllowed() {
    }
    return MethodNotAllowed;
}());
MethodNotAllowed = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'bot-notallowed',template:/*ion-inline-start:"/Users/gtgoodwin/projects/blackthorn/src/widgets/pages/methodnotallowed.template.html"*/''/*ion-inline-end:"/Users/gtgoodwin/projects/blackthorn/src/widgets/pages/methodnotallowed.template.html"*/
    }),
    __metadata("design:paramtypes", [])
], MethodNotAllowed);

//# sourceMappingURL=methodnotallowed.component.js.map

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFound; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFound = (function () {
    function PageNotFound() {
    }
    return PageNotFound;
}());
PageNotFound = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'bot-pagenotfound',template:/*ion-inline-start:"/Users/gtgoodwin/projects/blackthorn/src/widgets/pages/pagenotfound.template.html"*/''/*ion-inline-end:"/Users/gtgoodwin/projects/blackthorn/src/widgets/pages/pagenotfound.template.html"*/
    }),
    __metadata("design:paramtypes", [])
], PageNotFound);

//# sourceMappingURL=pagenotfound.component.js.map

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Unauthorized; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Unauthorized = (function () {
    function Unauthorized() {
    }
    return Unauthorized;
}());
Unauthorized = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'bot-unauth',template:/*ion-inline-start:"/Users/gtgoodwin/projects/blackthorn/src/widgets/pages/unauthorized.template.html"*/''/*ion-inline-end:"/Users/gtgoodwin/projects/blackthorn/src/widgets/pages/unauthorized.template.html"*/
    }),
    __metadata("design:paramtypes", [])
], Unauthorized);

//# sourceMappingURL=unauthorized.component.js.map

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(578);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__variables__ = __webpack_require__(579);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuration__ = __webpack_require__(27);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_module__ = __webpack_require__(580);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__api_module__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export APIS */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__company_service__ = __webpack_require__(138);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__employee_service__ = __webpack_require__(63);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entity_service__ = __webpack_require__(139);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entityType_service__ = __webpack_require__(140);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transaction_service__ = __webpack_require__(141);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__transactionType_service__ = __webpack_require__(142);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_service__ = __webpack_require__(143);
/* unused harmony namespace reexport */














var APIS = [__WEBPACK_IMPORTED_MODULE_0__company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_1__employee_service__["a" /* EmployeeService */], __WEBPACK_IMPORTED_MODULE_2__entity_service__["a" /* EntityService */], __WEBPACK_IMPORTED_MODULE_3__entityType_service__["a" /* EntityTypeService */], __WEBPACK_IMPORTED_MODULE_4__transaction_service__["a" /* TransactionService */], __WEBPACK_IMPORTED_MODULE_5__transactionType_service__["a" /* TransactionTypeService */], __WEBPACK_IMPORTED_MODULE_6__user_service__["a" /* UserService */]];
//# sourceMappingURL=api.js.map

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export COLLECTION_FORMATS */
var COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
};
//# sourceMappingURL=variables.js.map

/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configuration__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_company_service__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_employee_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_entity_service__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_entityType_service__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__api_transaction_service__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__api_transactionType_service__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__api_user_service__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ApiModule = ApiModule_1 = (function () {
    function ApiModule() {
    }
    ApiModule.forConfig = function (configurationFactory) {
        return {
            ngModule: ApiModule_1,
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_3__configuration__["a" /* Configuration */], useFactory: configurationFactory }]
        };
    };
    return ApiModule;
}());
ApiModule = ApiModule_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */]],
        declarations: [],
        exports: [],
        providers: [__WEBPACK_IMPORTED_MODULE_4__api_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_5__api_employee_service__["a" /* EmployeeService */], __WEBPACK_IMPORTED_MODULE_6__api_entity_service__["a" /* EntityService */], __WEBPACK_IMPORTED_MODULE_7__api_entityType_service__["a" /* EntityTypeService */], __WEBPACK_IMPORTED_MODULE_8__api_transaction_service__["a" /* TransactionService */], __WEBPACK_IMPORTED_MODULE_9__api_transactionType_service__["a" /* TransactionTypeService */], __WEBPACK_IMPORTED_MODULE_10__api_user_service__["a" /* UserService */]]
    })
], ApiModule);

var ApiModule_1;
//# sourceMappingURL=api.module.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swagger_api_employee_service__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TWO_WEEKS = 60 * 60 * 24 * 7 * 2;
var LoginPage = (function () {
    function LoginPage(navCtrl, toastCtrl, empService) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.empService = empService;
        this.credentials = {
            email: '',
            password: '',
            ttl: TWO_WEEKS
        };
    }
    LoginPage.prototype.gotoSignup = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype._loginSuccess = function () {
        var toast = this.toastCtrl.create({
            message: 'Successfully logged in!',
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    LoginPage.prototype._loginError = function (errMsg) {
        var toast = this.toastCtrl.create({
            message: errMsg,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        this.empService.employeeLogin(this.credentials, 'User').map(function (res) {
            var token = res.id;
            var profile = res.user;
            _this._loginSuccess();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* MenuPage */]);
            return res;
        }).catch(function (err) {
            _this._loginError(err);
            return err;
        }).subscribe();
    };
    return LoginPage;
}());
LoginPage.title = 'Login';
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/gtgoodwin/projects/blackthorn/src/features/login/login.html"*/'<ion-content class="splash-bg" style="padding-top: 0; width: 100%; height: 100%;" fxLayout="row" fxLayoutAlign="center center">\n  <div style="width: 100%; height: 100%;" fxLayout="column" fxLayoutAlign="start center">\n    <h1 style="font-size: 48px; font-family: \'Arial Rounded MT Bold\', Arial, serif; color: #fff;">login&deg;</h1>\n  <ion-card style="max-width: 500px; box-shadow: 0 1px 5px rgba(0,0,0,0.07); min-width: 400px;">\n    <ion-card-header>\n      <ion-card-title>Please sign in...</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <form #loginForm="ngForm" autocomplete="off">\n        <ion-list>\n\n          <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input color="primary" type="email" #email name="email" [(ngModel)]="credentials.email" autocomplete="new-password" ></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Password</ion-label>\n            <ion-input color="primary" type="password" #password name="password" [(ngModel)]="credentials.password" value="" autocomplete="new-password" ></ion-input>\n          </ion-item>\n\n          <div padding>\n            <button ion-button color="primary" (click)="doLogin()" block>Login</button>\n          </div>\n\n        </ion-list>\n      </form>\n    </ion-card-content>\n    <div style="width: 100%; text-align: center;">\n      <p>New user? Please <span (click)="gotoSignup(e)" style="cursor: pointer; text-decoration: underline;">Signup</span> first.</p>\n    </div>\n  </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/gtgoodwin/projects/blackthorn/src/features/login/login.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__swagger_api_employee_service__["a" /* EmployeeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__swagger_api_employee_service__["a" /* EmployeeService */]) === "function" && _c || Object])
], LoginPage);

var _a, _b, _c;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swagger_api_employee_service__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupPage = (function () {
    function SignupPage(navCtrl, toastCtrl, empService) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.empService = empService;
        this.credentials = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        };
    }
    SignupPage.prototype.gotoLogin = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SignupPage.prototype._signupSuccess = function () {
        var toast = this.toastCtrl.create({
            message: 'Successfully signed up!',
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    SignupPage.prototype._signupError = function (errMsg) {
        var toast = this.toastCtrl.create({
            message: errMsg,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    SignupPage.prototype.doSignup = function () {
        var _this = this;
        this.empService.employeeCreate(this.credentials).map(function (res) {
            var profile = res;
            _this._signupSuccess();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        }).catch(function (err) {
            _this._signupError(err);
            return err;
        }).subscribe();
    };
    return SignupPage;
}());
SignupPage.title = 'Signup';
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-signup',template:/*ion-inline-start:"/Users/gtgoodwin/projects/blackthorn/src/features/signup/signup.html"*/'<ion-content style="padding-top: 0; width: 100%; height: 100%;" class="splash-bg"  fxLayout="row" fxLayoutAlign="center center">\n  <div style="width: 100%; height: 100%;" fxLayout="column" fxLayoutAlign="start center">\n    <h1 style="font-size: 48px; font-family: \'Arial Rounded MT Bold\', Arial, serif; color: #fff;">signup&deg;</h1>\n    <ion-card style="max-width: 500px; box-shadow: 0 1px 5px rgba(0,0,0,0.07); min-width: 400px;">\n      <ion-card-header>\n        <ion-card-title>Sign up below...</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <form #loginForm="ngForm" autocomplete="off">\n          <ion-list>\n            <ion-item>\n              <ion-label floating>First Name</ion-label>\n              <ion-input color="primary" type="text" #firstName name="firstName" [(ngModel)]="credentials.firstName" autocomplete="new-password"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>Last Name</ion-label>\n              <ion-input color="primary" type="text" #lastName name="lastName" [(ngModel)]="credentials.lastName" autocomplete="new-password"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>Email</ion-label>\n              <ion-input color="primary" type="email" #email name="email" [(ngModel)]="credentials.email" autocomplete="new-password"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>Password</ion-label>\n              <ion-input color="primary" type="password" #password name="password" [(ngModel)]="credentials.password" autocomplete="new-password"></ion-input>\n            </ion-item>\n\n            <div padding>\n              <button ion-button color="primary" (click)="doSignup()" block>Signup</button>\n            </div>\n\n          </ion-list>\n        </form>\n      </ion-card-content>\n      <div style="width: 100%; text-align: center;">\n        <p>Already have an account? Head to our <span (click)="gotoLogin(e)" style="cursor: pointer; text-decoration: underline;">Login</span> page.</p>\n      </div>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/gtgoodwin/projects/blackthorn/src/features/signup/signup.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__swagger_api_employee_service__["a" /* EmployeeService */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rxjs_operators__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configuration__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__env_environment__ = __webpack_require__(43);
/**
 * bt-server
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */







var EmployeeService = (function () {
    function EmployeeService(http, basePath, configuration) {
        this.http = http;
        this.basePath = __WEBPACK_IMPORTED_MODULE_4__env_environment__["a" /* BASE_PATH */];
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_3__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     *
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    EmployeeService.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    EmployeeService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    /**
     *
     * @summary Change a user's password.
     * @param oldPassword
     * @param newPassword
     */
    EmployeeService.prototype.employeeChangePassword = function (oldPassword, newPassword, extraHttpRequestParams) {
        return this.employeeChangePasswordWithHttpInfo(oldPassword, newPassword, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Confirm a user registration with identity verification token.
     * @param uid
     * @param token
     * @param redirect
     */
    EmployeeService.prototype.employeeConfirm = function (uid, token, redirect, extraHttpRequestParams) {
        return this.employeeConfirmWithHttpInfo(uid, token, redirect, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Count instances of the model matched by where from the data source.
     * @param where Criteria to match model instances
     */
    EmployeeService.prototype.employeeCount = function (where, extraHttpRequestParams) {
        return this.employeeCountWithHttpInfo(where, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Create a new instance of the model and persist it into the data source.
     * @param data Model instance data
     */
    EmployeeService.prototype.employeeCreate = function (data, extraHttpRequestParams) {
        return this.employeeCreateWithHttpInfo(data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Create a change stream.
     * @param options
     */
    EmployeeService.prototype.employeeCreateChangeStreamGetEmployeesChangeStream = function (options, extraHttpRequestParams) {
        return this.employeeCreateChangeStreamGetEmployeesChangeStreamWithHttpInfo(options, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.blob();
            }
        });
    };
    /**
     *
     * @summary Create a change stream.
     * @param options
     */
    EmployeeService.prototype.employeeCreateChangeStreamPostEmployeesChangeStream = function (options, extraHttpRequestParams) {
        return this.employeeCreateChangeStreamPostEmployeesChangeStreamWithHttpInfo(options, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.blob();
            }
        });
    };
    /**
     *
     * @summary Delete a model instance by {{id}} from the data source.
     * @param id Model id
     */
    EmployeeService.prototype.employeeDeleteById = function (id, extraHttpRequestParams) {
        return this.employeeDeleteByIdWithHttpInfo(id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Check whether a model instance exists in the data source.
     * @param id Model id
     */
    EmployeeService.prototype.employeeExistsGetEmployeesidExists = function (id, extraHttpRequestParams) {
        return this.employeeExistsGetEmployeesidExistsWithHttpInfo(id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Check whether a model instance exists in the data source.
     * @param id Model id
     */
    EmployeeService.prototype.employeeExistsHeadEmployeesid = function (id, extraHttpRequestParams) {
        return this.employeeExistsHeadEmployeesidWithHttpInfo(id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Find all instances of the model matched by filter from the data source.
     * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    EmployeeService.prototype.employeeFind = function (filter, extraHttpRequestParams) {
        return this.employeeFindWithHttpInfo(filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Find a model instance by {{id}} from the data source.
     * @param id Model id
     * @param filter Filter defining fields and include - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    EmployeeService.prototype.employeeFindById = function (id, filter, extraHttpRequestParams) {
        return this.employeeFindByIdWithHttpInfo(id, filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Find first instance of the model matched by filter from the data source.
     * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    EmployeeService.prototype.employeeFindOne = function (filter, extraHttpRequestParams) {
        return this.employeeFindOneWithHttpInfo(filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Login a user with username/email and password.
     * @param credentials
     * @param include Related objects to include in the response. See the description of return value for more details.
     */
    EmployeeService.prototype.employeeLogin = function (credentials, include, extraHttpRequestParams) {
        return this.employeeLoginWithHttpInfo(credentials, include, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Logout a user with access token.
     */
    EmployeeService.prototype.employeeLogout = function (extraHttpRequestParams) {
        return this.employeeLogoutWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Patch an existing model instance or insert a new one into the data source.
     * @param data Model instance data
     */
    EmployeeService.prototype.employeePatchOrCreate = function (data, extraHttpRequestParams) {
        return this.employeePatchOrCreateWithHttpInfo(data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Counts accessTokens of Employee.
     * @param id Employee id
     * @param where Criteria to match model instances
     */
    EmployeeService.prototype.employeePrototypeCountAccessTokens = function (id, where, extraHttpRequestParams) {
        return this.employeePrototypeCountAccessTokensWithHttpInfo(id, where, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Creates a new instance in accessTokens of this model.
     * @param id Employee id
     * @param data
     */
    EmployeeService.prototype.employeePrototypeCreateAccessTokens = function (id, data, extraHttpRequestParams) {
        return this.employeePrototypeCreateAccessTokensWithHttpInfo(id, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Creates a new instance in address of this model.
     * @param id Employee id
     * @param data
     */
    EmployeeService.prototype.employeePrototypeCreateAddress = function (id, data, extraHttpRequestParams) {
        return this.employeePrototypeCreateAddressWithHttpInfo(id, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Deletes all accessTokens of this model.
     * @param id Employee id
     */
    EmployeeService.prototype.employeePrototypeDeleteAccessTokens = function (id, extraHttpRequestParams) {
        return this.employeePrototypeDeleteAccessTokensWithHttpInfo(id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Deletes address of this model.
     * @param id Employee id
     */
    EmployeeService.prototype.employeePrototypeDestroyAddress = function (id, extraHttpRequestParams) {
        return this.employeePrototypeDestroyAddressWithHttpInfo(id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Delete a related item by id for accessTokens.
     * @param fk Foreign key for accessTokens
     * @param id Employee id
     */
    EmployeeService.prototype.employeePrototypeDestroyByIdAccessTokens = function (fk, id, extraHttpRequestParams) {
        return this.employeePrototypeDestroyByIdAccessTokensWithHttpInfo(fk, id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Find a related item by id for accessTokens.
     * @param fk Foreign key for accessTokens
     * @param id Employee id
     */
    EmployeeService.prototype.employeePrototypeFindByIdAccessTokens = function (fk, id, extraHttpRequestParams) {
        return this.employeePrototypeFindByIdAccessTokensWithHttpInfo(fk, id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Queries accessTokens of Employee.
     * @param id Employee id
     * @param filter
     */
    EmployeeService.prototype.employeePrototypeGetAccessTokens = function (id, filter, extraHttpRequestParams) {
        return this.employeePrototypeGetAccessTokensWithHttpInfo(id, filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Fetches hasOne relation address.
     * @param id Employee id
     * @param refresh
     */
    EmployeeService.prototype.employeePrototypeGetAddress = function (id, refresh, extraHttpRequestParams) {
        return this.employeePrototypeGetAddressWithHttpInfo(id, refresh, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Fetches belongsTo relation company.
     * @param id Employee id
     * @param refresh
     */
    EmployeeService.prototype.employeePrototypeGetCompany = function (id, refresh, extraHttpRequestParams) {
        return this.employeePrototypeGetCompanyWithHttpInfo(id, refresh, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Patch attributes for a model instance and persist it into the data source.
     * @param id Employee id
     * @param data An object of model property name/value pairs
     */
    EmployeeService.prototype.employeePrototypePatchAttributes = function (id, data, extraHttpRequestParams) {
        return this.employeePrototypePatchAttributesWithHttpInfo(id, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Update address of this model.
     * @param id Employee id
     * @param data
     */
    EmployeeService.prototype.employeePrototypeUpdateAddress = function (id, data, extraHttpRequestParams) {
        return this.employeePrototypeUpdateAddressWithHttpInfo(id, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Update a related item by id for accessTokens.
     * @param fk Foreign key for accessTokens
     * @param id Employee id
     * @param data
     */
    EmployeeService.prototype.employeePrototypeUpdateByIdAccessTokens = function (fk, id, data, extraHttpRequestParams) {
        return this.employeePrototypeUpdateByIdAccessTokensWithHttpInfo(fk, id, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Trigger user's identity verification with configured verifyOptions
     * @param id Employee id
     */
    EmployeeService.prototype.employeePrototypeVerify = function (id, extraHttpRequestParams) {
        return this.employeePrototypeVerifyWithHttpInfo(id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Replace attributes for a model instance and persist it into the data source.
     * @param id Model id
     * @param data Model instance data
     */
    EmployeeService.prototype.employeeReplaceByIdPostEmployeesidReplace = function (id, data, extraHttpRequestParams) {
        return this.employeeReplaceByIdPostEmployeesidReplaceWithHttpInfo(id, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Replace attributes for a model instance and persist it into the data source.
     * @param id Model id
     * @param data Model instance data
     */
    EmployeeService.prototype.employeeReplaceByIdPutEmployeesid = function (id, data, extraHttpRequestParams) {
        return this.employeeReplaceByIdPutEmployeesidWithHttpInfo(id, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Replace an existing model instance or insert a new one into the data source.
     * @param data Model instance data
     */
    EmployeeService.prototype.employeeReplaceOrCreatePostEmployeesReplaceOrCreate = function (data, extraHttpRequestParams) {
        return this.employeeReplaceOrCreatePostEmployeesReplaceOrCreateWithHttpInfo(data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Replace an existing model instance or insert a new one into the data source.
     * @param data Model instance data
     */
    EmployeeService.prototype.employeeReplaceOrCreatePutEmployees = function (data, extraHttpRequestParams) {
        return this.employeeReplaceOrCreatePutEmployeesWithHttpInfo(data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Reset password for a user with email.
     * @param options
     */
    EmployeeService.prototype.employeeResetPassword = function (options, extraHttpRequestParams) {
        return this.employeeResetPasswordWithHttpInfo(options, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Reset user's password via a password-reset token.
     * @param newPassword
     */
    EmployeeService.prototype.employeeSetPassword = function (newPassword, extraHttpRequestParams) {
        return this.employeeSetPasswordWithHttpInfo(newPassword, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Update instances of the model matched by {{where}} from the data source.
     * @param where Criteria to match model instances
     * @param data An object of model property name/value pairs
     */
    EmployeeService.prototype.employeeUpdateAll = function (where, data, extraHttpRequestParams) {
        return this.employeeUpdateAllWithHttpInfo(where, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Update an existing model instance or insert a new one into the data source based on the where criteria.
     * @param where Criteria to match model instances
     * @param data An object of model property name/value pairs
     */
    EmployeeService.prototype.employeeUpsertWithWhere = function (where, data, extraHttpRequestParams) {
        return this.employeeUpsertWithWhereWithHttpInfo(where, data, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * Change a user&#39;s password.
     *
     * @param oldPassword
     * @param newPassword
     */
    EmployeeService.prototype.employeeChangePasswordWithHttpInfo = function (oldPassword, newPassword, extraHttpRequestParams) {
        var path = this.basePath + '/Employees/change-password';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'oldPassword' is not null or undefined
        if (oldPassword === null || oldPassword === undefined) {
            throw new Error('Required parameter oldPassword was null or undefined when calling employeeChangePassword.');
        }
        // verify required parameter 'newPassword' is not null or undefined
        if (newPassword === null || newPassword === undefined) {
            throw new Error('Required parameter newPassword was null or undefined when calling employeeChangePassword.');
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json',
            'application/x-www-form-urlencoded',
            'application/xml',
            'text/xml'
        ];
        var canConsumeForm = this.canConsumeForm(consumes);
        var useForm = false;
        var formParams = new (useForm ? FormData : __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */])();
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        if (oldPassword !== undefined) {
            formParams.set('oldPassword', oldPassword);
        }
        if (newPassword !== undefined) {
            formParams.set('newPassword', newPassword);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: formParams.toString(),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Confirm a user registration with identity verification token.
     *
     * @param uid
     * @param token
     * @param redirect
     */
    EmployeeService.prototype.employeeConfirmWithHttpInfo = function (uid, token, redirect, extraHttpRequestParams) {
        var path = this.basePath + '/Employees/confirm';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'uid' is not null or undefined
        if (uid === null || uid === undefined) {
            throw new Error('Required parameter uid was null or undefined when calling employeeConfirm.');
        }
        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new Error('Required parameter token was null or undefined when calling employeeConfirm.');
        }
        if (uid !== undefined) {
            queryParameters.set('uid', uid);
        }
        if (token !== undefined) {
            queryParameters.set('token', token);
        }
        if (redirect !== undefined) {
            queryParameters.set('redirect', redirect);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Count instances of the model matched by where from the data source.
     *
     * @param where Criteria to match model instances
     */
    EmployeeService.prototype.employeeCountWithHttpInfo = function (where, extraHttpRequestParams) {
        var path = this.basePath + '/Employees/count';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (where !== undefined) {
            queryParameters.set('where', where);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Create a new instance of the model and persist it into the data source.
     *
     * @param data Model instance data
     */
    EmployeeService.prototype.employeeCreateWithHttpInfo = function (data, extraHttpRequestParams) {
        var path = this.basePath + '/Employees';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Create a change stream.
     *
     * @param options
     */
    EmployeeService.prototype.employeeCreateChangeStreamGetEmployeesChangeStreamWithHttpInfo = function (options, extraHttpRequestParams) {
        var path = this.basePath + '/Employees/change-stream';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (options !== undefined) {
            queryParameters.set('options', options);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* ResponseContentType */].Blob,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Create a change stream.
     *
     * @param options
     */
    EmployeeService.prototype.employeeCreateChangeStreamPostEmployeesChangeStreamWithHttpInfo = function (options, extraHttpRequestParams) {
        var path = this.basePath + '/Employees/change-stream';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [
            'application/json',
            'application/x-www-form-urlencoded',
            'application/xml',
            'text/xml'
        ];
        var canConsumeForm = this.canConsumeForm(consumes);
        var useForm = false;
        var formParams = new (useForm ? FormData : __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */])();
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        if (options !== undefined) {
            formParams.set('options', options);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: formParams.toString(),
            responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* ResponseContentType */].Blob,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Delete a model instance by {{id}} from the data source.
     *
     * @param id Model id
     */
    EmployeeService.prototype.employeeDeleteByIdWithHttpInfo = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/Employees/${id}'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling employeeDeleteById.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Check whether a model instance exists in the data source.
     *
     * @param id Model id
     */
    EmployeeService.prototype.employeeExistsGetEmployeesidExistsWithHttpInfo = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/Employees/${id}/exists'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling employeeExistsGetEmployeesidExists.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Check whether a model instance exists in the data source.
     *
     * @param id Model id
     */
    EmployeeService.prototype.employeeExistsHeadEmployeesidWithHttpInfo = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/Employees/${id}'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling employeeExistsHeadEmployeesid.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Head,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Find all instances of the model matched by filter from the data source.
     *
     * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    EmployeeService.prototype.employeeFindWithHttpInfo = function (filter, extraHttpRequestParams) {
        var path = this.basePath + '/Employees';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (filter !== undefined) {
            queryParameters.set('filter', filter);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Find a model instance by {{id}} from the data source.
     *
     * @param id Model id
     * @param filter Filter defining fields and include - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    EmployeeService.prototype.employeeFindByIdWithHttpInfo = function (id, filter, extraHttpRequestParams) {
        var path = this.basePath + '/Employees/${id}'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling employeeFindById.');
        }
        if (filter !== undefined) {
            queryParameters.set('filter', filter);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Find first instance of the model matched by filter from the data source.
     *
     * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     */
    EmployeeService.prototype.employeeFindOneWithHttpInfo = function (filter, extraHttpRequestParams) {
        var path = this.basePath + '/Employees/findOne';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (filter !== undefined) {
            queryParameters.set('filter', filter);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Login a user with username/email and password.
     *
     * @param credentials
     * @param include Related objects to include in the response. See the description of return value for more details.
     */
    EmployeeService.prototype.employeeLoginWithHttpInfo = function (credentials, include, extraHttpRequestParams) {
        var path = this.basePath + '/Employees/login';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'credentials' is not null or undefined
        if (credentials === null || credentials === undefined) {
            throw new Error('Required parameter credentials was null or undefined when calling employeeLogin.');
        }
        if (include !== undefined) {
            queryParameters.set('include', include);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: credentials == null ? '' : JSON.stringify(credentials),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Logout a user with access token.
     *
     */
    EmployeeService.prototype.employeeLogoutWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + '/Employees/logout';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param data Model instance data
     */
    EmployeeService.prototype.employeePatchOrCreateWithHttpInfo = function (data, extraHttpRequestParams) {
        var path = this.basePath + '/Employees';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Patch,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Counts accessTokens of Employee.
     *
     * @param id Employee id
     * @param where Criteria to match model instances
     */
    EmployeeService.prototype.employeePrototypeCountAccessTokensWithHttpInfo = function (id, where, extraHttpRequestParams) {
        var path = this.basePath + '/Employees/${id}/accessTokens/count'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling employeePrototypeCountAccessTokens.');
        }
        if (where !== undefined) {
            queryParameters.set('where', where);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Creates a new instance in accessTokens of this model.
     *
     * @param id Employee id
     * @param data
     */
    EmployeeService.prototype.employeePrototypeCreateAccessTokensWithHttpInfo = function (id, data, extraHttpRequestParams) {
        var path = this.basePath + '/Employees/${id}/accessTokens'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling employeePrototypeCreateAccessTokens.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Creates a new instance in address of this model.
     *
     * @param id Employee id
     * @param data
     */
    EmployeeService.prototype.employeePrototypeCreateAddressWithHttpInfo = function (id, data, extraHttpRequestParams) {
        var path = this.basePath + '/Employees/${id}/address'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling employeePrototypeCreateAddress.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Deletes all accessTokens of this model.
     *
     * @param id Employee id
     */
    EmployeeService.prototype.employeePrototypeDeleteAccessTokensWithHttpInfo = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/Employees/${id}/accessTokens'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling employeePrototypeDeleteAccessTokens.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Deletes address of this model.
     *
     * @param id Employee id
     */
    EmployeeService.prototype.employeePrototypeDestroyAddressWithHttpInfo = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/Employees/${id}/address'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling employeePrototypeDestroyAddress.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Delete a related item by id for accessTokens.
     *
     * @param fk Foreign key for accessTokens
     * @param id Employee id
     */
    EmployeeService.prototype.employeePrototypeDestroyByIdAccessTokensWithHttpInfo = function (fk, id, extraHttpRequestParams) {
        var path = this.basePath + '/Employees/${id}/accessTokens/${fk}'
            .replace('${' + 'fk' + '}', String(fk))
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'fk' is not null or undefined
        if (fk === null || fk === undefined) {
            throw new Error('Required parameter fk was null or undefined when calling employeePrototypeDestroyByIdAccessTokens.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling employeePrototypeDestroyByIdAccessTokens.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Find a related item by id for accessTokens.
     *
     * @param fk Foreign key for accessTokens
     * @param id Employee id
     */
    EmployeeService.prototype.employeePrototypeFindByIdAccessTokensWithHttpInfo = function (fk, id, extraHttpRequestParams) {
        var path = this.basePath + '/Employees/${id}/accessTokens/${fk}'
            .replace('${' + 'fk' + '}', String(fk))
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'fk' is not null or undefined
        if (fk === null || fk === undefined) {
            throw new Error('Required parameter fk was null or undefined when calling employeePrototypeFindByIdAccessTokens.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling employeePrototypeFindByIdAccessTokens.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Queries accessTokens of Employee.
     *
     * @param id Employee id
     * @param filter
     */
    EmployeeService.prototype.employeePrototypeGetAccessTokensWithHttpInfo = function (id, filter, extraHttpRequestParams) {
        var path = this.basePath + '/Employees/${id}/accessTokens'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling employeePrototypeGetAccessTokens.');
        }
        if (filter !== undefined) {
            queryParameters.set('filter', filter);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Fetches hasOne relation address.
     *
     * @param id Employee id
     * @param refresh
     */
    EmployeeService.prototype.employeePrototypeGetAddressWithHttpInfo = function (id, refresh, extraHttpRequestParams) {
        var path = this.basePath + '/Employees/${id}/address'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling employeePrototypeGetAddress.');
        }
        if (refresh !== undefined) {
            queryParameters.set('refresh', refresh);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Fetches belongsTo relation company.
     *
     * @param id Employee id
     * @param refresh
     */
    EmployeeService.prototype.employeePrototypeGetCompanyWithHttpInfo = function (id, refresh, extraHttpRequestParams) {
        var path = this.basePath + '/Employees/${id}/company'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling employeePrototypeGetCompany.');
        }
        if (refresh !== undefined) {
            queryParameters.set('refresh', refresh);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param id Employee id
     * @param data An object of model property name/value pairs
     */
    EmployeeService.prototype.employeePrototypePatchAttributesWithHttpInfo = function (id, data, extraHttpRequestParams) {
        var path = this.basePath + '/Employees/${id}'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling employeePrototypePatchAttributes.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Patch,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Update address of this model.
     *
     * @param id Employee id
     * @param data
     */
    EmployeeService.prototype.employeePrototypeUpdateAddressWithHttpInfo = function (id, data, extraHttpRequestParams) {
        var path = this.basePath + '/Employees/${id}/address'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling employeePrototypeUpdateAddress.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Put,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Update a related item by id for accessTokens.
     *
     * @param fk Foreign key for accessTokens
     * @param id Employee id
     * @param data
     */
    EmployeeService.prototype.employeePrototypeUpdateByIdAccessTokensWithHttpInfo = function (fk, id, data, extraHttpRequestParams) {
        var path = this.basePath + '/Employees/${id}/accessTokens/${fk}'
            .replace('${' + 'fk' + '}', String(fk))
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'fk' is not null or undefined
        if (fk === null || fk === undefined) {
            throw new Error('Required parameter fk was null or undefined when calling employeePrototypeUpdateByIdAccessTokens.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling employeePrototypeUpdateByIdAccessTokens.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Put,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Trigger user&#39;s identity verification with configured verifyOptions
     *
     * @param id Employee id
     */
    EmployeeService.prototype.employeePrototypeVerifyWithHttpInfo = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/Employees/${id}/verify'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling employeePrototypeVerify.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Replace attributes for a model instance and persist it into the data source.
     *
     * @param id Model id
     * @param data Model instance data
     */
    EmployeeService.prototype.employeeReplaceByIdPostEmployeesidReplaceWithHttpInfo = function (id, data, extraHttpRequestParams) {
        var path = this.basePath + '/Employees/${id}/replace'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling employeeReplaceByIdPostEmployeesidReplace.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Replace attributes for a model instance and persist it into the data source.
     *
     * @param id Model id
     * @param data Model instance data
     */
    EmployeeService.prototype.employeeReplaceByIdPutEmployeesidWithHttpInfo = function (id, data, extraHttpRequestParams) {
        var path = this.basePath + '/Employees/${id}'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling employeeReplaceByIdPutEmployeesid.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Put,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Replace an existing model instance or insert a new one into the data source.
     *
     * @param data Model instance data
     */
    EmployeeService.prototype.employeeReplaceOrCreatePostEmployeesReplaceOrCreateWithHttpInfo = function (data, extraHttpRequestParams) {
        var path = this.basePath + '/Employees/replaceOrCreate';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Replace an existing model instance or insert a new one into the data source.
     *
     * @param data Model instance data
     */
    EmployeeService.prototype.employeeReplaceOrCreatePutEmployeesWithHttpInfo = function (data, extraHttpRequestParams) {
        var path = this.basePath + '/Employees';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Put,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Reset password for a user with email.
     *
     * @param options
     */
    EmployeeService.prototype.employeeResetPasswordWithHttpInfo = function (options, extraHttpRequestParams) {
        var path = this.basePath + '/Employees/reset';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'options' is not null or undefined
        if (options === null || options === undefined) {
            throw new Error('Required parameter options was null or undefined when calling employeeResetPassword.');
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: options == null ? '' : JSON.stringify(options),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Reset user&#39;s password via a password-reset token.
     *
     * @param newPassword
     */
    EmployeeService.prototype.employeeSetPasswordWithHttpInfo = function (newPassword, extraHttpRequestParams) {
        var path = this.basePath + '/Employees/reset-password';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'newPassword' is not null or undefined
        if (newPassword === null || newPassword === undefined) {
            throw new Error('Required parameter newPassword was null or undefined when calling employeeSetPassword.');
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json',
            'application/x-www-form-urlencoded',
            'application/xml',
            'text/xml'
        ];
        var canConsumeForm = this.canConsumeForm(consumes);
        var useForm = false;
        var formParams = new (useForm ? FormData : __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */])();
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        if (newPassword !== undefined) {
            formParams.set('newPassword', newPassword);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: formParams.toString(),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Update instances of the model matched by {{where}} from the data source.
     *
     * @param where Criteria to match model instances
     * @param data An object of model property name/value pairs
     */
    EmployeeService.prototype.employeeUpdateAllWithHttpInfo = function (where, data, extraHttpRequestParams) {
        var path = this.basePath + '/Employees/update';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (where !== undefined) {
            queryParameters.set('where', where);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Update an existing model instance or insert a new one into the data source based on the where criteria.
     *
     * @param where Criteria to match model instances
     * @param data An object of model property name/value pairs
     */
    EmployeeService.prototype.employeeUpsertWithWhereWithHttpInfo = function (where, data, extraHttpRequestParams) {
        var path = this.basePath + '/Employees/upsertWithWhere';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (where !== undefined) {
            queryParameters.set('where', where);
        }
        // to determine the Accept header
        var produces = [
            'application/json',
            'application/xml',
            'text/xml',
            'application/javascript',
            'text/javascript'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: data == null ? '' : JSON.stringify(data),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__env_environment__["a" /* BASE_PATH */])), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], String, __WEBPACK_IMPORTED_MODULE_3__configuration__["a" /* Configuration */]])
], EmployeeService);

//# sourceMappingURL=employee.service.js.map

/***/ })

},[386]);
//# sourceMappingURL=main.js.map