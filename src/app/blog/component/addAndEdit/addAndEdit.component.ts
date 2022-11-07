import {Component, OnInit} from '@angular/core';
import {ValidationService} from '../../../services/validation.service'
import {BlogAdd} from '../../../interface/blog-add'
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-addAndEdit',
  templateUrl: './addAndEdit.component.html',
  styleUrls: ['./addAndEdit.component.scss']
})
export class AddAndEditComponent implements OnInit {
  localGetItem:any = JSON.parse(<any>localStorage.getItem("blog"))
  addBlog:BlogAdd = {
    id : 1,
    title : "" ,
    description : "" ,
    date : new Date().toLocaleDateString('fa-IR') ,
    view : Math.floor(Math.random() * 100) + 1,
  }
  isRoute : boolean = false;
  blogId:string="";
  editItem:any;

  constructor(private AuthValidationService:ValidationService,private router: Router,private getId: ActivatedRoute,) {
    getId.params.subscribe((params) => {
      this.blogId = params["id"]
    })
  }

  ngOnInit(): void {
    if (this.router.url !== "/blog/add") {
      this.isRoute = true;
      this.editItem = this.localGetItem.filter((id:any) => id.id == this.blogId)
      this.addBlog.id = this.editItem[0].id;
      this.addBlog.title = this.editItem[0].title;
      this.addBlog.view = this.editItem[0].view;
      this.addBlog.date = this.editItem[0].date;
      this.addBlog.description = this.editItem[0].description;
    }
  }

  clickAdd(){
    if (!this.AuthValidationService.isEmpty(this.addBlog.title) ||
      !this.AuthValidationService.isEmpty(this.addBlog.description)){
      alert("فیلد ها را پر کنید !")
    } else {
      if (this.localGetItem && Array.isArray(this.localGetItem)){
        this.addBlog.id = this.localGetItem[0].id + 1
        this.localGetItem.unshift(this.addBlog)
        localStorage.setItem("blog" , JSON.stringify(this.localGetItem))
      }else {
        this.localGetItem = []
        this.localGetItem.push(this.addBlog)
        localStorage.setItem("blog" , JSON.stringify(this.localGetItem))
      }
      this.router.navigate(['/blog'])
    }
  }

  clickEdit(){
    if (!this.AuthValidationService.isEmpty(this.addBlog.title) ||
      !this.AuthValidationService.isEmpty(this.addBlog.description)){
      alert("فیلد ها را پر کنید !")
    } else {
      this.editItem[0].title = this.addBlog.title;
      this.addBlog.description = this.editItem[0].description;
      localStorage.setItem("blog" , JSON.stringify(this.localGetItem))
      this.router.navigate(['/blog'])
    }
  }




}
