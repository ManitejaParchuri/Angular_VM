import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ManitejaComponent } from './maniteja/maniteja.component';
import { Demo2Component } from './demo2/demo2.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { Tw0WayBindingComponent } from './tw0-way-binding/tw0-way-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { ProductComponent } from './product/product.component';
import { PipesComponent } from './pipes/pipes.component';
import { MyuppercasePipe } from './mypipes/myuppercase.pipe';
import { SearchByNamePipe } from './mypipes/search-by-name.pipe';
import { SortpipePipe } from './mypipes/sortpipe.pipe';
import { StructDirectivesComponent } from './struct-directives/struct-directives.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductjsonComponent } from './productjson/productjson.component';
import { MycolorDirective } from './derivatives/mycolor.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Child1Component } from './child1/child1.component';
import { Parent1Component } from './parent1/parent1.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { JavaComponent } from './java/java.component';
import { WebComponent } from './web/web.component';
import { routingComponents, TechRoutingModule } from './tech-routing/tech-routing.module';
import { CoursesearchPipe } from './mypipes/coursesearch.pipe';
import { CoursesortPipe } from './mypipes/coursesort.pipe';

import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { ReactFormsComponent } from './react-forms/react-forms.component';
import { TempDrivenFormComponent } from './temp-driven-form/temp-driven-form.component';
import { CorewebComponent } from './coreweb/coreweb.component';
import { CorejavaComponent } from './corejava/corejava.component';
import { AdvjavaComponent } from './advjava/advjava.component';
import { AdvwebComponent } from './advweb/advweb.component';





@NgModule({
  declarations: [
    AppComponent,
    ManitejaComponent,
    Demo2Component,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    Tw0WayBindingComponent,
    CalculatorComponent,
    ProductComponent,
    PipesComponent,
    MyuppercasePipe,
    SearchByNamePipe,
    SortpipePipe,
    StructDirectivesComponent,
    ProductjsonComponent,
    MycolorDirective,
    ParentComponent,
    ChildComponent,
    Child1Component,
    Parent1Component,
    FirstComponent,
    SecondComponent,
    JavaComponent,
    WebComponent,
    routingComponents,
    CoursesearchPipe,
    CoursesortPipe,
    
    Sibling1Component,
    Sibling2Component,
    ReactFormsComponent,
    TempDrivenFormComponent,
    CorewebComponent,
    CorejavaComponent,
    AdvjavaComponent,
    AdvwebComponent

    
    
   
   
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule ,TechRoutingModule,ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
