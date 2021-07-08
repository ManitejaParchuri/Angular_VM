import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebComponent } from '../web/web.component';
import { JavaComponent } from '../java/java.component';
import { RouterModule, Routes } from '@angular/router';
import { CorewebComponent } from '../coreweb/coreweb.component';
import { AdvwebComponent } from '../advweb/advweb.component';
import { CorejavaComponent } from '../corejava/corejava.component';
import { AdvjavaComponent } from '../advjava/advjava.component';
import { ProductjsonComponent } from '../productjson/productjson.component';
import { TempDrivenFormComponent } from '../temp-driven-form/temp-driven-form.component';
import { ReactFormsComponent } from '../react-forms/react-forms.component';
const routes:Routes = [
  {path:'web', component:WebComponent, 
  children:[
    {path:'coreweb', component:CorewebComponent },
    {path:'advweb', component:AdvwebComponent},
   ] },
  {path:'java', component:JavaComponent,
   children:[
    {path:'corejava', component:CorejavaComponent },
    {path:'advjava', component:AdvjavaComponent},
   ]
 },
 {path:'products',component:ProductjsonComponent},
 {path:'tdf',component:TempDrivenFormComponent},
 {path:'rf',component:ReactFormsComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class TechRoutingModule { }
export const routingComponents = [WebComponent,JavaComponent,ProductjsonComponent,TempDrivenFormComponent,ReactFormsComponent]



 



