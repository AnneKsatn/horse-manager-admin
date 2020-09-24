import { Component, OnInit } from '@angular/core';
import { VeterinaryService } from '../services/veterinary.service';
import { IStableVetInfo } from '../../../shared/model/stable-vet-info.model';
import { HttpResponse } from '@angular/common/http';
import localeRu from '@angular/common/locales/ru';



@Component({
  selector: 'app-inspections',
  templateUrl: './inspections.component.html',
  styleUrls: ['./inspections.component.scss']
})
export class InspectionsComponent implements OnInit {

  constructor(private veterinaryService: VeterinaryService){}

  stableVetInfos?: IStableVetInfo[];

  ngOnInit(): void {
    this.veterinaryService.get().subscribe((data: HttpResponse<IStableVetInfo[]>) => (
      this.stableVetInfos = data.body || []));
  }
}
