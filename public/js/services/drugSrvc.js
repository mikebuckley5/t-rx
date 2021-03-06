app.service('drugSrvc', function ($http) {
    this.addDrug = function (data) {
        return $http({
            method: 'POST',
            url: 'http://localhost:8555/api/drugs',
            data: data
        })
            .then(function (response) {
                return response;
            });
    };

    this.getDrugs = function () {
        return $http({
            method: 'GET',
            url: 'http://localhost:8555/api/drugs'
        })
            .then(function (response) {
                return response.data;
            });
    };
});