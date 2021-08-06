import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Message} from 'primeng//api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [MessageService]
})
export class SidebarComponent implements OnInit {

  // customers: Customer[];

  // selectedCustomers: Customer[];

  representatives: any;

  statuses: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  menuItems = [
    { title: "HJ" },
  ]

  items: MenuItem[];



  constructor(private messageService: MessageService) { }

  ngOnInit() {
    // this.customerService.getCustomersLarge().then(customers => {
    //     this.customers = customers;
    //     this.loading = false;

    //     this.customers.forEach(customer => customer.date = new Date(customer.date));
    // });

    this.representatives = [
      { name: "Amy Elsner", image: 'amyelsner.png' },
      { name: "Anna Fali", image: 'annafali.png' },
      { name: "Asiya Javayant", image: 'asiyajavayant.png' },
      { name: "Bernardo Dominic", image: 'bernardodominic.png' },
      { name: "Elwin Sharvill", image: 'elwinsharvill.png' },
      { name: "Ioni Bowcher", image: 'ionibowcher.png' },
      { name: "Ivan Magalhaes", image: 'ivanmagalhaes.png' },
      { name: "Onyama Limba", image: 'onyamalimba.png' },
      { name: "Stephen Shaw", image: 'stephenshaw.png' },
      { name: "Xuxue Feng", image: 'xuxuefeng.png' }
    ];

    this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' }
    ]

    this.items = [
      {
        label: 'Основное',
        items: [{
          label: 'Профиль КСК',
          icon: 'pi pi-external-link',
          routerLink: '/system/dashboard'
        }]
      },
      {
        label: 'Настройки',
        items: [
          {
            label: 'Инфраструктура',
            icon: 'pi pi-upload',
            routerLink: '/system/infrastructure'
          },
          {
            label: 'Категории постоя',
            icon: 'pi pi-upload',
            routerLink: '/system/category'
          },
          {
            label: 'Рацион',
            icon: 'pi pi-upload',
            routerLink: '/system/feed'
          }
        ]
      },

      {
        label: 'Содержание лошадей',
        items: [{
          label: 'Частные лошади',
          icon: 'pi pi-external-link',
          routerLink: '/system/maintenance/clients'
        }
        ]
      },
      {
        label: 'Ветеринария',
        items: [
          {
            label: 'Ветеринария',
            icon: 'pi pi-upload',
            routerLink: '/system/vet/inspection'
          },
        ]
      },
    ];
  }


  update() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
  }

  delete() {
    this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
  }

}
