import { Component, OnInit } from '@angular/core';
import { MemberRegister } from '../models/memberpage';
import { memberService } from '../service/member.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-adminsearch',
  templateUrl: './adminsearch.component.html',
  styleUrls: ['./adminsearch.component.css']
})
export class AdminsearchComponent implements OnInit {
  title = "Search Admin";
  //users:MemberRegister[] ;
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
     memberId: 0
   }
   constructor(private memberService : memberService,private router : Router) { }
 
   ngOnInit(): void {
   }
   onSubmit(){
     this.memberService.SearchMember(this.user)
     .subscribe(
       response =>{
        this.users = response;
         console.log(this.users)
  
       }
     )
   }
 
   onRedirect(user : MemberRegister){
         // this.users=Object.values(response);
         debugger;
         console.log(this.users);
          localStorage.setItem("UserId",user.memberId.toString());
          console.log(localStorage.getItem("UserId")?.toString());
          localStorage.setItem("policyStatus",this.user.policyStatus.toString());
          console.log(localStorage.getItem("policyStatus")?.toString());
          localStorage.setItem("premiumAmount",this.user.premiumAmount.toString());
          console.log(localStorage.getItem("premiumAmount")?.toString());
          this.router.navigate(['/updatepolicy']);
       }
    
 
 
 }
