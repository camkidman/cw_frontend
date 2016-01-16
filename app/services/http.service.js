System.register(['angular2/http', "angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1;
    var HttpClient;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HttpClient = (function () {
                function HttpClient(http) {
                    this.http = http;
                    this.token = '';
                    this.headers = new http_1.Headers();
                    this.headers.append('Content-Type', 'application/json');
                    this.headers.append('Accept', 'application/vnd.calendarworkouts.v1');
                    this.headers.append("Access-Control-Allow-Origin", "*");
                    this.headers.append("Access-Control-Allow-Headers", "X-Requested-With");
                    this.headers.append("Access-Control-Allow-Methods", "GET, POST", "PUT", "DELETE");
                }
                HttpClient.prototype.setToken = function (token) {
                    this.token = token;
                    console.log(this.token);
                    this.headers.append('client', this.token);
                };
                HttpClient.prototype.get = function (url) {
                    return this.http.get(url, { headers: this.headers });
                };
                HttpClient.prototype.post = function (url, data) {
                    return this.http.post(url, data, { headers: this.headers });
                };
                HttpClient.prototype.patch = function (url, data) {
                    return this.http.patch(url, data, { headers: this.headers });
                };
                HttpClient = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HttpClient);
                return HttpClient;
            })();
            exports_1("HttpClient", HttpClient);
        }
    }
});
//# sourceMappingURL=http.service.js.map