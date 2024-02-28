import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { orderBy } from 'lodash';
import { catchError } from 'rxjs';
import { restApiService } from 'src/app/core/services/rest-api.service';
 

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss']
})

/**
 * Starter Component
 */
export class StarterComponent implements OnInit {
  allData!:{items: [], links:{}, meta: {} };
  allUsers:any[] = [];
  // bread crumb items
  breadCrumbItems!: Array<{}>;

  constructor(private restApi: restApiService, private router: Router) { }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
     this.breadCrumbItems = [
      { label: 'לוח בקרה' },
      { label: 'משתמשים', active: true }
    ];

    this.restApi.getCustomerData().subscribe(
      (data) => {
        this.allData = JSON.parse(data)
        this.allUsers = this.allData.items
      },
      (error) => {
        this.router.navigate(['/'])
      }
      
    );

  }



}
