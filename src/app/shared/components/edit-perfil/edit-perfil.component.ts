import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrMessage } from 'src/app/core/enums/toastr';
import { ToastrService } from 'ngx-toastr';
import { UserProfileDTO } from 'src/app/core/interfaces/user-profile';
import { UserService } from './../../../core/services/user.service';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.css'],
})
export class EditPerfilComponent implements OnInit {
  modalRef: BsModalRef;
  editPerfilForm: FormGroup;
  @Input() userId: string;
  @Input() userInfo: UserProfileDTO[];
  @Output() user = new EventEmitter<any[]>();

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    const user = this.userInfo;
    this.editPerfilForm = this.formBuilder.group({
      title: [user['title'], Validators.required],
      linkedin: [user['linkedin'], Validators.required],
      github: [user['github'], Validators.required],
      bio: [user['bio'], Validators.required],
    });
  }

  /**
   * @todo Inserir método para atualizar o perfil do usuário.
   * @memberof EditPerfilComponent
   */
  onUpdate() {
    const data = this.editPerfilForm.value;
    this.userService.updateUser(data).subscribe(
      () => {
        this.toastr.success('', ToastrMessage.SUCESS_UPDATE_PROFILE, {
          timeOut: 2000,
        });
        this.user.emit();
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
