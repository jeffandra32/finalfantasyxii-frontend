import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { PostService } from './../../core/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  modalRef: BsModalRef;
  @ViewChild('create_post', { static: true }) template: TemplateRef<any>;

  constructor(
    private modalService: BsModalService,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.getAllPosts();
  }

  /**
   * @todo Inserir método para carregas os posts do usuário e amigos.
   */
  getAllPosts() {
    this.postService.getAll().subscribe(
      (res: any) => {},
      (err) => {}
    );
  }

  openCreatePost(template: TemplateRef<any>) {
    this.modalService.show(template);
  }
}
