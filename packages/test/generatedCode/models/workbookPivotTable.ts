import {Entity, WorkbookWorksheet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookPivotTable extends Entity, Partial<Parsable> {
    /** Name of the PivotTable. */
    name?: string;
    /** The worksheet containing the current PivotTable. Read-only. */
    worksheet?: WorkbookWorksheet;
}
