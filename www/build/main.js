webpackJsonp([0],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__payment_payment_component__ = __webpack_require__(120);
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
        selector: 'page-menu',template:/*ion-inline-start:"/Users/gtgoodwin/projects/blackthorn/src/pages/menu/menu.html"*/'<ion-menu [content]="content">\n  <ion-header no-border style="box-shadow: none;">\n    <ion-navbar color="primary" no-border style="box-shadow: none !important; border-bottom: 1px solid #fff;">\n      <ion-title><span style="font-weight: 400 !important;">Menu</span></ion-title>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-navbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #content [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/gtgoodwin/projects/blackthorn/src/pages/menu/menu.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], MenuPage);

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 119:
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
        selector: 'app-dash',template:/*ion-inline-start:"/Users/gtgoodwin/projects/blackthorn/src/pages/dashboard/dashboard.template.html"*/'<ion-header no-border style="box-shadow: none;">\n  <ion-navbar color="primary" no-border style="box-shadow: none !important; border-bottom: 1px solid #fff;">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title><span style="font-weight: 400 !important;">{{ title }}</span></ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row align-items-center justify-content-center>\n      <ion-col align-self-center col-md-4>\n        <ion-card class="dash-card" style="height: 100%; background-color: #fff;">\n          <ion-card-title style="color: #666; font-weight: 300;">Monthly Expenses</ion-card-title>\n          <ion-card-content>\n            <div style="display: block;">\n              <canvas baseChart [datasets]="lineChartData" [labels]="lineChartLabels" [options]="lineChartOptions"\n                [colors]="lineChartColors" [legend]="lineChartLegend" [chartType]="lineChartType" (chartHover)="chartHovered($event)"\n                (chartClick)="chartClicked($event)"></canvas>\n            </div>\n          </ion-card-content>\n          <div fxLayout="row" fxLayoutAlign="end end">\n            <button ion-button color="secondary" (click)="randomize()">Randomize</button>\n          </div>\n        </ion-card>\n      </ion-col>\n      <ion-col align-self-center col-md-4>\n        <ion-card class="dash-card" style="background-color: #fff;">\n          <ion-card-title style="color: #666; font-weight: 300;">Payment Types</ion-card-title>\n          <ion-card-content>\n            <div style="display: block">\n              <canvas baseChart [colors]="doughnutChartColors" [data]="doughnutChartData" [labels]="doughnutChartLabels" [chartType]="doughnutChartType"\n                (chartHover)="chartHovered($event)" (chartClick)="chartClicked($event)"></canvas>\n            </div>\n          </ion-card-content>\n          <div fxLayout="row" fxLayoutAlign="end end">\n            <button ion-button color="secondary" (click)="updatePieChart()">Update Data</button>\n          </div>\n        </ion-card>\n      </ion-col>\n      <ion-col align-self-center col-md-4>\n        <ion-card class="dash-card" style="width: 100%; background-color: #fff;" >\n          <ion-card-title style="color: #666; font-weight: 300;">Quarterly Sales</ion-card-title>\n          <ion-card-content>\n            <div style="display: block">\n              <canvas baseChart [datasets]="barChartData" [colors]="barChartColors" [labels]="barChartLabels" [options]="barChartOptions"\n                [legend]="barChartLegend" [chartType]="barChartType" (chartHover)="chartHovered($event)" (chartClick)="chartClicked($event)"></canvas>\n            </div>\n          </ion-card-content>\n          <div fxLayout="row" fxLayoutAlign="end end">\n            <button ion-button color="secondary" (click)="updateBarChart()">Update Data</button>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n\n'/*ion-inline-end:"/Users/gtgoodwin/projects/blackthorn/src/pages/dashboard/dashboard.template.html"*/
    })
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(130);
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
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        selector: 'app-payment',template:/*ion-inline-start:"/Users/gtgoodwin/projects/blackthorn/src/pages/payment/payment.template.html"*/'<ion-header no-border style="box-shadow: none;">\n  <ion-navbar color="primary" no-border style="box-shadow: none !important; border-bottom: 1px solid #fff;">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title><span style="font-weight: 400 !important;">{{ title }}</span></ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n\n<div fxLayout="column" fxLayoutAlign="stretch center">\n  <ion-card style="width: 100%; max-width: 400px; min-height: 300px; background-color: #fff; box-shadow: 0 1px 5px rgba(0,0,0,0.07);">\n  <ion-card-content>\n  <ion-card-header>\n    <ion-card-title><h1 style="color: #666;">{{title}}</h1></ion-card-title>\n  </ion-card-header>\n    <form #cardForm="ngForm" (ngSubmit)="createToken()">\n      <div fxLayout="column" fxLayoutAlign="start start" style="margin-top: 30px">\n        <div fxLayout="row" fxLayoutAlign="start center" style="margin: 5px; width: 100%;">\n          <label for="number">Card&nbsp;number</label>\n          <div fxLayout="row" fxLayoutAlign="end center" style="width: 100%;">\n            <input name="number" style="width: 200px; background-color: #fff9dd; border: 1px solid #f1f1f1; border-radius: 4px;" placeholder="4242 4242 4242 4242" type="tel" id="number" [(ngModel)]="formCard.number" ccNumber>\n          </div>\n        </div>\n        <div fxLayout="row" fxLayoutAlign="start center" style="margin: 5px; width: 100%;">\n          <label for="exp_month">Expiration&nbsp;Date</label>\n          <div fxLayout="row" fxLayoutAlign="end center" style="width: 100%;">\n          <input  name="exp_month" placeholder="01/2019" style="width: 200px; background-color: #fff9dd; border: 1px solid #f1f1f1; border-radius: 4px;" id="exp_month" type="tel"  [(ngModel)]="formCard.exp_month" ccExp >\n          </div>\n        </div>\n        <div fxLayout="row" fxLayoutAlign="start center" style="margin: 5px; width: 100%;">\n          <label for="cvc">CVC</label>\n          <div fxLayout="row" fxLayoutAlign="end center" style="width: 100%;">\n            <input name="cvc" maxlength="4" style="width: 200px; background-color: #fff9dd; border: 1px solid #f1f1f1; border-radius: 4px;"\n              placeholder="123" id="cvc" autocomplete="off" type="tel" [(ngModel)]="formCard.cvc" ccCVC>\n          </div>\n\n\n        </div>\n        <div style="width: 100%; " fxLayout="row" fxLayoutAlign="end end">\n          <button color="grass" style="margin-right: 45px; margin-top: 30px;" ion-button type="submit">Submit Payment</button>\n        </div>\n\n      </div>\n    </form>\n\n  </ion-card-content>\n\n\n  </ion-card>\n  <div *ngIf="diag2" style="max-width: 400px; color: #444; margin-top: 8px; overflow: scroll;">\n    Request:\n    <div *ngFor="let items of diag2.split(\',\')">\n      {{ items }}\n    </div>\n  </div>\n  <div *ngIf="diag" style="max-width: 400px; color: #444; margin-top: 4px; overflow: scroll;">\n    Response:\n    <div *ngFor="let items of diag.split(\',\')">\n        {{ items }}\n    </div>\n  </div>\n\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/gtgoodwin/projects/blackthorn/src/pages/payment/payment.template.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], PaymentComponent);

//# sourceMappingURL=payment.component.js.map

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 129;

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 172;

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(51);
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
        selector: 'page-welcome',template:/*ion-inline-start:"/Users/gtgoodwin/projects/blackthorn/src/pages/welcome/welcome.html"*/'<ion-content scroll="false">\n  <div class="splash-bg"></div>\n  <div class="splash-info">\n    <div class="splash-logo"></div>\n    <div class="splash-intro">\n      <h6>blackthorn.io</h6>\n    </div>\n  </div>\n  <div fxLayout="row" fxLayoutAlign="center start">\n    <div fxLayout="column" fxLayoutAlign="space-around center">\n      <button ion-button (click)="login()" style="min-width: 300px;" color="primary">Login</button>\n      <button ion-button (click)="signup()" style="min-width: 300px; " color="sky">Signup</button>\n\n    </div>\n\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/gtgoodwin/projects/blackthorn/src/pages/welcome/welcome.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(367);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_cc_library__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_cc_library___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular_cc_library__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_menu_menu__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_welcome_welcome__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_settings__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_google_maps__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_dashboard_dashboard_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_payment_payment_component__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















function provideSettings(storage) {
    return new __WEBPACK_IMPORTED_MODULE_13__providers_settings__["a" /* Settings */](storage, {
        option1: true,
        option2: 'Ionitron J. Framework',
        option3: '3',
        option4: 'Hello'
    });
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_19__pages_payment_payment_component__["a" /* PaymentComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_7_angular_cc_library__["CreditCardDirectivesModule"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_19__pages_payment_payment_component__["a" /* PaymentComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_google_maps__["a" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
            { provide: __WEBPACK_IMPORTED_MODULE_13__providers_settings__["a" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]] },
            // Keep this to enable Ionic's runtime error handling during development
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] }
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_18__pages_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_19__pages_payment_payment_component__["a" /* PaymentComponent */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_7_angular_cc_library__["CreditCardDirectivesModule"]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 229,
	"./af.js": 229,
	"./ar": 230,
	"./ar-dz": 231,
	"./ar-dz.js": 231,
	"./ar-kw": 232,
	"./ar-kw.js": 232,
	"./ar-ly": 233,
	"./ar-ly.js": 233,
	"./ar-ma": 234,
	"./ar-ma.js": 234,
	"./ar-sa": 235,
	"./ar-sa.js": 235,
	"./ar-tn": 236,
	"./ar-tn.js": 236,
	"./ar.js": 230,
	"./az": 237,
	"./az.js": 237,
	"./be": 238,
	"./be.js": 238,
	"./bg": 239,
	"./bg.js": 239,
	"./bn": 240,
	"./bn.js": 240,
	"./bo": 241,
	"./bo.js": 241,
	"./br": 242,
	"./br.js": 242,
	"./bs": 243,
	"./bs.js": 243,
	"./ca": 244,
	"./ca.js": 244,
	"./cs": 245,
	"./cs.js": 245,
	"./cv": 246,
	"./cv.js": 246,
	"./cy": 247,
	"./cy.js": 247,
	"./da": 248,
	"./da.js": 248,
	"./de": 249,
	"./de-at": 250,
	"./de-at.js": 250,
	"./de-ch": 251,
	"./de-ch.js": 251,
	"./de.js": 249,
	"./dv": 252,
	"./dv.js": 252,
	"./el": 253,
	"./el.js": 253,
	"./en-au": 254,
	"./en-au.js": 254,
	"./en-ca": 255,
	"./en-ca.js": 255,
	"./en-gb": 256,
	"./en-gb.js": 256,
	"./en-ie": 257,
	"./en-ie.js": 257,
	"./en-nz": 258,
	"./en-nz.js": 258,
	"./eo": 259,
	"./eo.js": 259,
	"./es": 260,
	"./es-do": 261,
	"./es-do.js": 261,
	"./es.js": 260,
	"./et": 262,
	"./et.js": 262,
	"./eu": 263,
	"./eu.js": 263,
	"./fa": 264,
	"./fa.js": 264,
	"./fi": 265,
	"./fi.js": 265,
	"./fo": 266,
	"./fo.js": 266,
	"./fr": 267,
	"./fr-ca": 268,
	"./fr-ca.js": 268,
	"./fr-ch": 269,
	"./fr-ch.js": 269,
	"./fr.js": 267,
	"./fy": 270,
	"./fy.js": 270,
	"./gd": 271,
	"./gd.js": 271,
	"./gl": 272,
	"./gl.js": 272,
	"./gom-latn": 273,
	"./gom-latn.js": 273,
	"./he": 274,
	"./he.js": 274,
	"./hi": 275,
	"./hi.js": 275,
	"./hr": 276,
	"./hr.js": 276,
	"./hu": 277,
	"./hu.js": 277,
	"./hy-am": 278,
	"./hy-am.js": 278,
	"./id": 279,
	"./id.js": 279,
	"./is": 280,
	"./is.js": 280,
	"./it": 281,
	"./it.js": 281,
	"./ja": 282,
	"./ja.js": 282,
	"./jv": 283,
	"./jv.js": 283,
	"./ka": 284,
	"./ka.js": 284,
	"./kk": 285,
	"./kk.js": 285,
	"./km": 286,
	"./km.js": 286,
	"./kn": 287,
	"./kn.js": 287,
	"./ko": 288,
	"./ko.js": 288,
	"./ky": 289,
	"./ky.js": 289,
	"./lb": 290,
	"./lb.js": 290,
	"./lo": 291,
	"./lo.js": 291,
	"./lt": 292,
	"./lt.js": 292,
	"./lv": 293,
	"./lv.js": 293,
	"./me": 294,
	"./me.js": 294,
	"./mi": 295,
	"./mi.js": 295,
	"./mk": 296,
	"./mk.js": 296,
	"./ml": 297,
	"./ml.js": 297,
	"./mr": 298,
	"./mr.js": 298,
	"./ms": 299,
	"./ms-my": 300,
	"./ms-my.js": 300,
	"./ms.js": 299,
	"./my": 301,
	"./my.js": 301,
	"./nb": 302,
	"./nb.js": 302,
	"./ne": 303,
	"./ne.js": 303,
	"./nl": 304,
	"./nl-be": 305,
	"./nl-be.js": 305,
	"./nl.js": 304,
	"./nn": 306,
	"./nn.js": 306,
	"./pa-in": 307,
	"./pa-in.js": 307,
	"./pl": 308,
	"./pl.js": 308,
	"./pt": 309,
	"./pt-br": 310,
	"./pt-br.js": 310,
	"./pt.js": 309,
	"./ro": 311,
	"./ro.js": 311,
	"./ru": 312,
	"./ru.js": 312,
	"./sd": 313,
	"./sd.js": 313,
	"./se": 314,
	"./se.js": 314,
	"./si": 315,
	"./si.js": 315,
	"./sk": 316,
	"./sk.js": 316,
	"./sl": 317,
	"./sl.js": 317,
	"./sq": 318,
	"./sq.js": 318,
	"./sr": 319,
	"./sr-cyrl": 320,
	"./sr-cyrl.js": 320,
	"./sr.js": 319,
	"./ss": 321,
	"./ss.js": 321,
	"./sv": 322,
	"./sv.js": 322,
	"./sw": 323,
	"./sw.js": 323,
	"./ta": 324,
	"./ta.js": 324,
	"./te": 325,
	"./te.js": 325,
	"./tet": 326,
	"./tet.js": 326,
	"./th": 327,
	"./th.js": 327,
	"./tl-ph": 328,
	"./tl-ph.js": 328,
	"./tlh": 329,
	"./tlh.js": 329,
	"./tr": 330,
	"./tr.js": 330,
	"./tzl": 331,
	"./tzl.js": 331,
	"./tzm": 332,
	"./tzm-latn": 333,
	"./tzm-latn.js": 333,
	"./tzm.js": 332,
	"./uk": 334,
	"./uk.js": 334,
	"./ur": 335,
	"./ur.js": 335,
	"./uz": 336,
	"./uz-latn": 337,
	"./uz-latn.js": 337,
	"./uz.js": 336,
	"./vi": 338,
	"./vi.js": 338,
	"./x-pseudo": 339,
	"./x-pseudo.js": 339,
	"./yo": 340,
	"./yo.js": 340,
	"./zh-cn": 341,
	"./zh-cn.js": 341,
	"./zh-hk": 342,
	"./zh-hk.js": 342,
	"./zh-tw": 343,
	"./zh-tw.js": 343
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
webpackContext.id = 459;

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_pages__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_payment_payment_component__ = __webpack_require__(120);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_pages__["a" /* FirstRunPage */];
        this.pages = [
            { title: 'Dashboard', component: __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard_component__["a" /* DashboardComponent */] },
            { title: 'Payment', component: __WEBPACK_IMPORTED_MODULE_8__pages_payment_payment_component__["a" /* PaymentComponent */] },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */] },
            { title: 'Signup', component: __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__["a" /* SignupPage */] }
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstRunPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__welcome_welcome__ = __webpack_require__(348);

// The page the user lands on after opening the app and without a session
var FirstRunPage = __WEBPACK_IMPORTED_MODULE_0__welcome_welcome__["a" /* WelcomePage */];
//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * A simple settings/config class for storing key/value pairs with persistence.
 */
var Settings = (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_settings';
        this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    return Settings;
}());
Settings = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
], Settings);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.credentials = {
            email: '',
            password: ''
        };
    }
    LoginPage.prototype.gotoSignup = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.doLogin = function () {
        // this.user.login(this.credentials).subscribe((resp) => {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* MenuPage */]);
        // }, (err) => {
        //    this.navCtrl.push(MainPage);
        // Unable to log in
        //    let toast = this.toastCtrl.create({
        //     message: this.loginErrorString,
        //     duration: 3000,
        //     position: 'top'
        //    });
        //    toast.present();
        //  });
    };
    return LoginPage;
}());
LoginPage.title = 'Login';
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/gtgoodwin/projects/blackthorn/src/pages/login/login.html"*/'<ion-content style="background-image: url(\'../../assets/img/bg-soon.png\'); background-repeat: no-repeat; background-position: center top; background-size: cover; padding-top: 0; width: 100%; height: 100%;" fxLayout="row" fxLayoutAlign="center center">\n  <div style="width: 100%; height: 100%;" fxLayout="column" fxLayoutAlign="start center">\n    <h1 style="font-size: 48px; font-family: \'Arial Rounded MT Bold\', Arial, serif; color: #fff;">login&deg;</h1>\n  <ion-card style="max-width: 500px; box-shadow: 0 1px 5px rgba(0,0,0,0.07); min-width: 400px;">\n    <ion-card-header>\n      <ion-card-title>Please sign in...</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <form #loginForm="ngForm" autocomplete="off">\n        <ion-list>\n\n          <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input color="primary" type="email" #email name="email" [(ngModel)]="credentials.email" autocomplete="new-password" ></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Password</ion-label>\n            <ion-input color="primary" type="password" #password name="password" [(ngModel)]="credentials.password" value="" autocomplete="new-password" ></ion-input>\n          </ion-item>\n\n          <div padding>\n            <button ion-button color="primary" (click)="doLogin()" block>Login</button>\n          </div>\n\n        </ion-list>\n      </form>\n    </ion-card-content>\n    <div style="width: 100%; text-align: center;">\n      <p>New user? Please <span (click)="gotoSignup(e)" style="cursor: pointer; text-decoration: underline;">Signup</span> first.</p>\n    </div>\n  </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/gtgoodwin/projects/blackthorn/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(118);
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
    function SignupPage(navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
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
    SignupPage.prototype.doSignup = function () {
        // Attempt to login in through our User service
        //  this.user.signup(this.account).subscribe((resp) => {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* MenuPage */]);
        //  }, (err) => {
        //    this.navCtrl.push(MainPage); // TODO: Remove this when you add your signup endpoint
        // Unable to sign up
        //    let toast = this.toastCtrl.create({
        //     message: this.signupErrorString,
        //     duration: 3000,
        //      position: 'top'
        //    });
        //   toast.present();
        //   });
    };
    return SignupPage;
}());
SignupPage.title = 'Signup';
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-signup',template:/*ion-inline-start:"/Users/gtgoodwin/projects/blackthorn/src/pages/signup/signup.html"*/'<ion-content style="background-image: url(\'../../assets/img/bg-soon.png\'); background-repeat: no-repeat; background-position: center top; background-size: cover; padding-top: 0; width: 100%; height: 100%;"\n  fxLayout="row" fxLayoutAlign="center center">\n  <div style="width: 100%; height: 100%;" fxLayout="column" fxLayoutAlign="start center">\n    <h1 style="font-size: 48px; font-family: \'Arial Rounded MT Bold\', Arial, serif; color: #fff;">signup&deg;</h1>\n    <ion-card style="max-width: 500px; box-shadow: 0 1px 5px rgba(0,0,0,0.07); min-width: 400px;">\n      <ion-card-header>\n        <ion-card-title>Sign up below...</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <form #loginForm="ngForm" autocomplete="off">\n          <ion-list>\n            <ion-item>\n              <ion-label floating>First Name</ion-label>\n              <ion-input color="primary" type="text" #firstName name="firstName" [(ngModel)]="credentials.firstName" autocomplete="new-password"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>Last Name</ion-label>\n              <ion-input color="primary" type="text" #lastName name="lastName" [(ngModel)]="credentials.lastName" autocomplete="new-password"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>Email</ion-label>\n              <ion-input color="primary" type="email" #email name="email" [(ngModel)]="credentials.email" autocomplete="new-password"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>Password</ion-label>\n              <ion-input color="primary" type="password" #password name="password" [(ngModel)]="credentials.password" autocomplete="new-password"></ion-input>\n            </ion-item>\n\n            <div padding>\n              <button ion-button color="primary" (click)="doSignup()" block>Signup</button>\n            </div>\n\n          </ion-list>\n        </form>\n      </ion-card-content>\n      <div style="width: 100%; text-align: center;">\n        <p>Already have an account? Head to our <span (click)="gotoLogin(e)" style="cursor: pointer; text-decoration: underline;">Login</span> page.</p>\n      </div>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/gtgoodwin/projects/blackthorn/src/pages/signup/signup.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ })

},[349]);
//# sourceMappingURL=main.js.map