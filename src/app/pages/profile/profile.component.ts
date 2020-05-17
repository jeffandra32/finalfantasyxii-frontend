import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { pipe, throwError } from 'rxjs';

import { ToastrMessage } from 'src/app/core/enums/toastr';
import { ToastrService } from 'ngx-toastr';
import { UserDTO } from '../../core/interfaces/user';
import { UserProfileDTO } from 'src/app/core/interfaces/user-profile';
import { UserService } from 'src/app/core/services/user.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userId: string;
  avatar: string;
  title: string;
  github: string;
  linkedin: string;
  bio: string;
  userInfo: UserProfileDTO;
  selectedFile: File = null;
  modalRef: BsModalRef;
  @ViewChild('edite_perfil', { static: true }) template: TemplateRef<any>;

  /**
   * Creates an instance of ProfileComponent.
   * @param {UserService} userService
   * @memberof ProfileComponent
   */
  constructor(
    private userService: UserService,
    private modalService: BsModalService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    const userInfor: UserProfileDTO = JSON.parse(
      localStorage.getItem('currentUser')
    );
    this.userId = userInfor.id;
    this.getUserById(this.userId);
  }

  /**
   * Retorna informações do usuário logado.
   * @param {string} userId
   * @memberof ProfileComponent
   */
  getUserById(userId: string): void {
    this.userService.getUserById(userId).subscribe(
      (user: UserProfileDTO) => {
        this.userInfo = user[0];
        this.avatar = user[0].avatar;
        this.title = user[0].title;
        this.github = user[0].github;
        this.linkedin = user[0].linkedin;
        this.bio = user[0].bio;
      },
      pipe(
        catchError((error) => {
          return throwError(error);
        })
      )
    );
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.onUpdateAvatar();
  }

  onUpdateAvatar() {
    this.userService.updateUserAvatar(this.selectedFile).subscribe(
      () => {
        this.toastr.success('', ToastrMessage.SUCESS_UPDATE_PROFILE, {
          timeOut: 2000,
        });
        this.getUserById(this.userId);
      },
      (err) => {
        console.error(err);
      }
    );
  }

  /**
   * Abrir modal para edição de Perfil.
   * @param {TemplateRef<any>} template
   * @memberof ProfileComponent
   */
  openEditProfile(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  /**
   * Fecha o modal de edição.
   * @param {TemplateRef<any>} template
   * @memberof ProfileComponent
   */
  closeToEditModal() {
    this.modalRef.hide();
  }
}
