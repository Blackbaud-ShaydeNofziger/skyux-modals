import {
  Component
} from '@angular/core';

import {
  SkyModalInstance
} from '../../public';

@Component({
  selector: 'sky-test-cmp-modal-autofocus',
  templateUrl: './modal-content-autofocus.component.html'
})
export class ModalContentAutofocusComponent {

  constructor(public instance: SkyModalInstance) {}
}
