import { IBurger } from '../../../shared/interfaces/burger';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ModalComponent } from 'src/app/modules/shared/components/modal/modal.component';
import { HistoryService } from '../../services/history.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'card-burger',
  templateUrl: './card-burger.component.html',
  styleUrls: ['./card-burger.component.scss'],
})
export class CardBurgerComponent implements OnInit {
  @Input('burger') burger!: IBurger;
  @Input('index') index!: number;
  @Input('array') array: any;
  @Output('out') arrayOut = new EventEmitter<any>();
  constructor(private api: HistoryService, private toastr: ToastrService) {}

  ngOnInit(): void {}
  @ViewChild('modal', { static: false }) modal!: ModalComponent;

  openModal() {
    this.modal.open();
  }
  closeModal() {
    this.modal.close();
  }

  deleteBurger(id: number | undefined) {
    if (id !== undefined) {
      this.api.deleteBurger(id).subscribe(() => {
        if (this.index !== -1) {
          this.array.splice(this.index, 1);
          this.arrayOut.emit(this.array);
          this.toastr.success('Another burger in the trash', 'Deleted!', {
            timeOut: 5000,
            easeTime: 500,
            progressBar: true,
            progressAnimation: 'decreasing',
            easing: 'ease-in',
            closeButton: true,
            positionClass: 'toast-bottom-right',
          });
        }
      });
    }
    this.modal.close();
  }
}
