import { Component, OnInit } from '@angular/core';
import { MemberRegister } from '../models/memberpage';
import { memberService } from '../service/member.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-addpolicy',
  templateUrl: './addpolicy.component.html',
  styleUrls: ['./addpolicy.component.css']
})
export class AddpolicyComponent implements OnInit {
  title = "Add Policy";
  users: any = {};
  user : MemberRegister = {
    
    policyId:0,
    policyStatus:'',
    policyType:'',
    premiumAmount:'',
    policyEffectiveDate:new Date,
    userName:'',
    firstName:'',
    lastName:'',
    dob:new Date,
    address:'',
    state:'',
    email:'',
    memberId: localStorage.getItem("example")?.toString(),
  }
  constructor(private memberService: memberService,private router : Router) { }

  ngOnInit(): void {
  }
  response:any;
  EmpMsg='';
  success:boolean = false;
  showField : boolean =false;
  onSubmit(){ 
    debugger;
    if(this.user.policyStatus!=''&&this.user.policyType!=''&&this.user.premiumAmount!=''&&this.user.policyEffectiveDate!='') 
    {
      this.memberService.AddPolicy(this.user)
    .subscribe(
      response => {
        this.users = response;
         console.log(this.users);
         localStorage.setItem("UserId",this.user.memberId.toString());
         console.log(localStorage.getItem("UserId")?.toString());
         this.success = true;
         this.showField = true;
      }
    );
    }
    if(this.user.policyStatus=='' && this.user.policyType=='' && this.user.premiumAmount=='' && this.user.policyEffectiveDate=='')
    {
      this.EmpMsg = 'please provide all details to add policy';
      return;
    } 
     
 }
 onAddUpdate()
 {
 this.router.navigate(['/memberSearch'])
 }
}
