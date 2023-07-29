import { Injectable } from '@angular/core';
import { Modal } from 'bootstrap';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor() {}

  openModal(id: string) {
    const modal = Modal.getOrCreateInstance(id, { backdrop: 'static' });
    modal.show();
  }
  closeModal(id: string) {
    const modal = Modal.getOrCreateInstance(id, { backdrop: 'static' });
    modal.hide();
  }
}
