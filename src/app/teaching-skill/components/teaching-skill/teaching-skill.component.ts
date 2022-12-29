import { Component, OnInit } from '@angular/core';
import {TeachingSkillService} from "../../../services/teaching-skill.service";
import {AppService} from "../../../services/app.service";

@Component({
  selector: 'app-teaching-skill',
  templateUrl: './teaching-skill.component.html',
  styleUrls: ['./teaching-skill.component.scss']
})
export class TeachingSkillComponent implements OnInit {

  constructor(private TeachingSkillService:TeachingSkillService , private AppService:AppService) { }
  isLoader:boolean = true;
  data:any;
  ngOnInit(): void {
    this.TeachingSkillService.TeachingSkill(this.AppService.TeacherId).subscribe({
      next:data => {
        this.data = data.Data
        this.isLoader = false;
        console.log("TeachingSkill" , data.Data)
      },
      error:err => {
        console.log(err)
      }
    })
  }

}
