"use strict";angular.module("ayo5566App",["ngCookies","ngResource","ngSanitize"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("ayo5566App").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["那一年默默無言　只能選擇離開","無邪的笑容已經不再精彩","你害怕結局所以拚命傷害","說是我擋住你的美好未來"]}]);