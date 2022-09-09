import { Component, OnInit } from '@angular/core';
import { MemberRegister } from '../models/memberpage';
import { memberService } from '../service/member.service';

@Component({
  selector: 'app-addpolicy',
  templateUrl: './addpolicy.component.html',
  styleUrls: ['./addpolicy.component.css']
})
export class AddpolicyComponent implements OnInit {
  title = "Add Policy";
  users: any = {};
  user : MemberRegister = {
    userId:0,
    policyId:0,
    userName:'',
    firstName:'',
    lastName:'',
    dob:new Date,
    address:'',
    state:'',
    email:''
  }
  constructor() { }

  ngOnInit(): void {
  }

}
