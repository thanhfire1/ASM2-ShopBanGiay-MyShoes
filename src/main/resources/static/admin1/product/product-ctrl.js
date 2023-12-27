
app.controller("product-ctrl", function($scope, $http) {
    $scope.items = [];
    $scope.cates = [];
    $scope.form = {};

    $scope.initialize = function() {
        $http.get("/rest/products").then(resp => {
            $scope.items = resp.data;
            $scope.items.forEach(item => {
                item.createDate = new Date(item.createDate)
            })
        });
        $http.get("/rest/categories").then(resp => {
            $scope.cates = resp.data;
        });
    }
    $scope.initialize();
    $scope.reset = function() {
        $scope.form = {
            createDate: new Date(),
            image: 'cloud-upload.jpg',
            available: true,


        }
    }
    $scope.edit = function(item) {
        $scope.form = angular.copy(item);
        $(".nav-tabs a:eq(0)").tab('show');
    }
    $scope.create = function() {
        var item = angular.copy($scope.form);
        $http.post(`/rest/products`, item).then(resp => {
            resp.data, createDate = new Date(resp.data.createDate);
            $scope.items.push(resp.data);
            $scope.reset();
            alert("them moi thanh cong");
        }).catch(error => {
            alert("Loi them moi san pham");
            console.log("Error", error);
        })
    }
    $scope.update = function(item) {
        var item = angular.copy($scope.form);
        $http.put(`/rest/products/${item.id}`, item).then(resp => {
            var index = $scope.items.findIndex(p => p.id == item.id);
            $scope.items[index] = item;
            alert("cap nhap thanh cong");
        }).catch(error => {
            alert("Loi them moi san pham");
            console.log("Error", error);
        })
    }
    $scope.delete = function(item) {
        $http.delete(`/rest/products/${item.id}`, item).then(resp => {
            var index = $scope.items.findIndex(p => p.id == item.id);
            $scope.items.splice(index, 1);
            $scope.reset();
            alert("xoa thanh cong");
        }).catch(error => {
            alert("Loi xoa san pham");
            console.log("Error", error);
        })
    }
    $scope.imageChanged = function(files) {
        var data = new FormData();
        data.append('file', files[0]);
        $http.post('/rest/upload/images', data, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        }).then(resp => {
            $scope.form.image = resp.data.name;
        }).catch(error => {
            alert("Loi upload");
            console.log("Error", error);
        })
    }
    $scope.pager = {
        page: 0,
        size: 10,
        get items() {
            var start = this.page * this.size;
            return $scope.items.slice(start, start + this.size);
        },
        get count() {
            return Math.ceil(1 * $scope.items.length / this.size);
        },
        first() {
            this.page = 0;
        },
        prev() {
            this.page--;
            if (this.page < 0) {
                this.last();
            }
        },
        next() {
            this.page++;
            if (this.page >= this.count) {
                this.first();
            }
        },
        last() {
            this.page = this.count - 1;
        }
    }
});