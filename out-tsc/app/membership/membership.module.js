var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MebershipRouting } from './membership.routing';
import { MembershipItemComponent } from './item/membership-item.component';
import { MembershipDialogComponent } from './dialog/membership-dialog.component';
import { MembershipAddComponent } from './add/membership-add.component';
import { MembershipDetailComponent } from './detail/membership-detail.component';
export var MembershipModule = (function () {
    function MembershipModule() {
    }
    MembershipModule = __decorate([
        NgModule({
            imports: [
                BrowserModule,
                MaterialModule,
                FormsModule,
                ReactiveFormsModule,
                MebershipRouting
            ],
            declarations: [
                MembershipItemComponent,
                MembershipDialogComponent,
                MembershipAddComponent,
                MembershipDetailComponent
            ],
            exports: [
                MembershipItemComponent
            ],
            entryComponents: [
                MembershipDialogComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], MembershipModule);
    return MembershipModule;
}());
//# sourceMappingURL=D:/Work/MyApplication/task/src/app/membership/membership.module.js.map