import { Injectable } from '@angular/core';import { Membership } from '../shared/models/membership';import { AngularFire, FirebaseObjectObservable } from 'angularfire2';@Injectable()export class MembershipService {  constructor(public af: AngularFire) {  }  public getItem(id): FirebaseObjectObservable<Membership> {    return this.af.database.object('/memberships/' + id);  }  public addItem(item) {    return this.af.database.list('/memberships').push(item);  }}