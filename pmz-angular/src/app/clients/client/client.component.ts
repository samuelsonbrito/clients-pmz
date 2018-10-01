import { Component, Input } from "@angular/core";

@Component({
    selector: 'pmz-client',
    templateUrl: './client.component.html'
})
export class ClientComponent {
    @Input() description = '';
    @Input() url = '';
}