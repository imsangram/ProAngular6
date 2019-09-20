import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuard } from "./auth.guard";

//specific to this module

let routing = RouterModule.forChild([
  { path: "auth", component: AuthComponent },
  { path: "main", component: AdminComponent, canActivate: [AuthGuard] },
  { path: "**", redirectTo: "auth" }
]);

@NgModule({
  imports: [
    CommonModule, FormsModule, routing
  ],
  declarations: [AdminComponent, AuthComponent],
  providers: [AuthGuard]
})
export class AdminModule { }
