import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpolicyComponent } from '../addpolicy/addpolicy.component';
import { AdminsearchComponent } from '../adminsearch/adminsearch.component';
import { LoginComponent } from "../login/login.component";
import { MemberComponent } from '../member/member.component';
import { MembersearchComponent } from '../membersearch/membersearch.component';
import { RegisterComponent } from '../register/register.component';
import { UpdatepolicyComponent } from '../updatepolicy/updatepolicy.component';

const routes: Routes = [{path : 'login' , component : LoginComponent},
{path : 'register' , component : RegisterComponent},
{path : 'member' , component : MemberComponent},
{path : 'memberSearch' , component : MembersearchComponent},
{path : 'addpolicy' , component : AddpolicyComponent},
{path : 'adminSearch',component : AdminsearchComponent},
{path : 'updatepolicy' , component : UpdatepolicyComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }

