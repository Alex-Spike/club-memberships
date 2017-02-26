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
import { Inject, Injectable } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
export var UploadFile = (function () {
    function UploadFile(firebaseApp) {
        this.storageRef = firebaseApp.storage().ref();
    }
    UploadFile.prototype.uploadFile = function (fbsPath, targetFile) {
        var _this = this;
        var promise = new Promise(function (res, rej) {
            _this.targetRef = _this.storageRef.child(fbsPath);
            var task = _this.targetRef.put(targetFile);
            task.on('state_changed', function (snapshot) {
                //console.log(snapshot.state);
            }, function (error) {
                console.log(error.code);
                rej(error);
            }, function () {
                var downloadUrl = task.snapshot.downloadURL;
                //console.log(downloadUrl);
                res(downloadUrl);
            });
        });
        return promise;
    };
    UploadFile = __decorate([
        Injectable(),
        __param(0, Inject(FirebaseApp)), 
        __metadata('design:paramtypes', [Object])
    ], UploadFile);
    return UploadFile;
}());
//# sourceMappingURL=D:/Work/MyApplication/task/src/app/shared/upload-file.js.map