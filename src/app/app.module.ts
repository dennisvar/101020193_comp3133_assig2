
import { NgModule } from '@angular/core';
import { ApolloModule } from 'apollo-angular';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Apollo } from 'apollo-angular';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';
import { GraphQLModule } from './graphql/graphql.module';
import { EmployeeService } from './employee.service';
import { UserService } from './user.service';



@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    ApolloModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService, UserService, Apollo],
  bootstrap: [AppComponent]
})
export class AppModule { }
