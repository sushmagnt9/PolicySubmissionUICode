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
     memberId:0,
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
     email:''
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
 
   onRedirect(){
     this.memberService.SearchMember(this.user)
     .subscribe(
       response => {
         // this.users=Object.values(response);
         this.users = response;
          console.log(this.users);
          localStorage.setItem("example",this.user.memberId.toString());
          console.log(localStorage.getItem("example")?.toString());
          this.router.navigate(['/updatepolicy']);
       }
     );
 }
 
 
 }
