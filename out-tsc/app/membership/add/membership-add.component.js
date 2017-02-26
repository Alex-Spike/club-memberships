var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { UploadFile } from '../../shared/upload-file';
import { MembershipService } from '../membership.service';
export var MembershipAddComponent = (function () {
    function MembershipAddComponent(fb, dialogRef, uploadFile, membershipService) {
        this.dialogRef = dialogRef;
        this.uploadFile = uploadFile;
        this.membershipService = membershipService;
        this.name = new FormControl("", Validators.required);
        this.description = new FormControl("", Validators.required);
        this.showSpinner = false;
        this.form = fb.group({
            "name": this.name,
            "description": this.description,
            "imgUrl": null
        });
    }
    MembershipAddComponent.prototype.fileChangeEvent = function (fileInput) {
        this.targetFile = fileInput.srcElement.files[0];
        this.fbsPath = this.targetFile.name;
    };
    MembershipAddComponent.prototype.add = function () {
        var _this = this;
        this.showSpinner = true;
        this.uploadFile.uploadFile(this.fbsPath, this.targetFile).then(function (imgUrl) {
            _this.form.value.imgUrl = imgUrl;
            _this.membershipService.addItem(_this.form.value).then(function (data) {
                _this.showSpinner = false;
                _this.dialogRef.close();
            });
        });
    };
    MembershipAddComponent = __decorate([
        Component({
            moduleId: module.id,
            selector: 'membership-add',
            templateUrl: './membership-add.component.html',
            providers: [UploadFile, MembershipService]
        }), 
        __metadata('design:paramtypes', [FormBuilder, MdDialogRef, UploadFile, MembershipService])
    ], MembershipAddComponent);
    return MembershipAddComponent;
}());
//# sourceMappingURL=D:/Work/MyApplication/task/src/app/membership/add/membership-add.component.js.map