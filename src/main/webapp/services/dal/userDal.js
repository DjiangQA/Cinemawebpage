"use strict";

(function () {

    angular.module("apolloCinema").service("userDal", ["dal", UserDal]);

    function UserDal (dal) {

        this.getUser = function () {
            return dal.http.GET("rest/customer/json");
        };

        this.verify = function (userToCheck) {
            return dal.http.POST("rest/customer/json", userToCheck);
        };

        this.add = function (userToAdd) {
            return dal.http.PUT("rest/customer/json", userToAdd);
        };

        this.deleteUser = function (userToDelete) {
            return dal.http.DELETE("/rest/customer/json/", userToDelete);
        };
    }
}());
