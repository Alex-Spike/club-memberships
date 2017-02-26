import { MembershipDetailComponent } from './detail/membership-detail.component';
import { RouterModule } from '@angular/router';
var membershipRoutes = [
    {
        path: 'detail/:id',
        component: MembershipDetailComponent
    }
];
// - Updated Export
export var MebershipRouting = RouterModule.forChild(membershipRoutes);
//# sourceMappingURL=D:/Work/MyApplication/task/src/app/membership/membership.routing.js.map