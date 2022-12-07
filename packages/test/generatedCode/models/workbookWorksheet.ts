import {Entity, WorkbookChart, WorkbookNamedItem, WorkbookPivotTable, WorkbookTable, WorkbookWorksheetProtection} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookWorksheet extends Entity, Partial<Parsable> {
    /** Returns collection of charts that are part of the worksheet. Read-only. */
    charts?: WorkbookChart[];
    /** The display name of the worksheet. */
    name?: string;
    /** Returns collection of names that are associated with the worksheet. Read-only. */
    names?: WorkbookNamedItem[];
    /** Collection of PivotTables that are part of the worksheet. */
    pivotTables?: WorkbookPivotTable[];
    /** The zero-based position of the worksheet within the workbook. */
    position?: number;
    /** The protection property */
    protection?: WorkbookWorksheetProtection;
    /** Collection of tables that are part of the worksheet. Read-only. */
    tables?: WorkbookTable[];
    /** The Visibility of the worksheet. The possible values are: Visible, Hidden, VeryHidden. */
    visibility?: string;
}
