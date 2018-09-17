import { Component, OnInit } from '@angular/core';
import { ClassDataService } from '../class-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.page.html',
  styleUrls: ['./class-detail.page.scss'],
})
export class ClassDetailPage implements OnInit {
  classRoster: any[];
  currentClass: any;

  constructor(private classDataService: ClassDataService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const classId = this.route.snapshot.paramMap.get('id');
    this.currentClass = this.classDataService.getClassbyId(classId);
    this.classRoster = this.classDataService.getClassRoster(classId);
  }

  onDelete(id) {
    this.classDataService.deleteClass(id);
  }

}
