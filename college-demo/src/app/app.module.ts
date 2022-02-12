import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollegeDatabaseComponent } from './components/college-database/college-database.component';
import { LecturersDataTableComponent } from './components/college-database/lecturers-data-table/lecturers-data-table.component';
import { StudentCreateUpdateDailogBoxComponent } from './components/college-database/students-data-table/create-update-dailog-box/create-update-dailog-box.component';
import { LecturerCreateUpdateDailogBoxComponent } from './components/college-database/lecturers-data-table/create-update-dailog-box/create-update-dailog-box.component';
import { StudentsDataTableComponent } from './components/college-database/students-data-table/students-data-table.component';
import { InMemoryDataService } from './services/data/in-memory-data.service';
import { MatIconModule } from '@angular/material/icon';
import { DeletePromptDailogComponent } from './components/college-database/delete-prompt-dailog/delete-prompt-dailog.component';
import { CollegeCreateUpdateDailogBoxComponent } from './components/college-database/create-update-dailog-box/create-update-dailog-box.component';
import { MyInterceptor } from './interceptors/TestInterceptor';
import { environment } from 'src/environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent,
    CollegeDatabaseComponent,
    LecturersDataTableComponent,
    StudentsDataTableComponent,
    StudentCreateUpdateDailogBoxComponent,
    LecturerCreateUpdateDailogBoxComponent,
    DeletePromptDailogComponent,
    CollegeCreateUpdateDailogBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    environment.production ?
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false, delay: 3000 }) :
      null,
    MatCardModule,
    MatExpansionModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
