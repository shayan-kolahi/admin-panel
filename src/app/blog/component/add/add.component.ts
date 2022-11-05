import {Component, OnInit} from '@angular/core';
import {ValidationService} from '../../../services/validation.service'
import {BlogAdd} from '../../../interface/blog-add'
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private AuthValidationService:ValidationService,private router: Router,) { }

  ngOnInit(): void {
  }


  addBlog:BlogAdd = {
    id : 1,
    title : "" ,
    description : "" ,
    date : new Date().toLocaleDateString('fa-IR') ,
  }
  clickAdd(){
    if (!this.AuthValidationService.isEmpty(this.addBlog.title) ||
      !this.AuthValidationService.isEmpty(this.addBlog.description)){
      alert("فیلد ها را پر کنید !")
    } else {
      let check = JSON.parse(<any>localStorage.getItem("blog"))
      if (check !== null){
        this.addBlog.id = check[0].id + 1
        console.log(this.addBlog.id , check[0].id)
        check.unshift(this.addBlog)
        localStorage.setItem("blog" , JSON.stringify(check))
      }else {
        localStorage.setItem("blog" , JSON.stringify([this.addBlog]))
      }
      this.router.navigate(['/blog'])
    }
  }



}
