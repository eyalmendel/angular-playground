import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable()
export class TableSelectionService<T> {
    private _data: T[] = [];
    
    selectable = false;
    
    readonly selected: WritableSignal<Set<T>> = signal(new Set<T>());
    readonly selectedCount: Signal<number> = computed(() => this.selected().size)

    setData(data: T[]): void {
        this._data = data;
        this.selected.update(() => new Set())
    }

    isRowSelected(row: T): boolean {
        return this.selected().has(row);
    }

    toggleRowSelection(row: T): void {
        if (this.selected().has(row)) {
            this.selected.update(previouslySelected => {
                const copy = new Set(previouslySelected);
                copy.delete(row);
                return copy;
            })
        } else {
            this.selected.update(previouslySelected => 
                new Set([...previouslySelected, row])
            );
        }
    }

    isAllRowsSelected(): boolean {
        return this._data.length === this.selected().size;
    }

    toggleAllRowsSelection(): void {
        if (this.isAllRowsSelected()) {
            this.selected.update(() => new Set())
        } else {
            this._data.forEach(row => 
                this.selected.update(previouslySelected => 
                    new Set([...previouslySelected, row])
                )
            );
        }
    }

    isIndeterminate(): boolean {
        return this.selected().size > 0 && !this.isAllRowsSelected();
    }
}