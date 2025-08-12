import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";
import { TableColumn } from "../interfaces/table-column.interface";

@Component({
    selector: 'app-table-header',
    imports: [CommonModule],
    templateUrl: './table-header.html',
    styleUrl: './table-header.css'
})
export class TableHeader {

    columns = input<TableColumn[]>([]);
}