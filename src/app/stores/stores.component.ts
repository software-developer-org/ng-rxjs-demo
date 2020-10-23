import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BackendService, Entity } from '../backend.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

  entities: Entity[];

  constructor(private backendService: BackendService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.backendService.getStores().subscribe(stores => {
      this.spinner.show();
      this.entities = [];
      stores.forEach((store, index) => {
        setTimeout(() => {
          this.entities.push(store);
          if (stores.length === index + 1) {
            this.spinner.hide();
          }
        }, index * 500 + 500);
      });
    });
  }

  loadAdditionalData(): void {
    this.backendService.addNewStore();
    this.loadData();
  }

}
