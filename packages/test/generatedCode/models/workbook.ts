import {Entity, WorkbookApplication, WorkbookComment, WorkbookFunctions, WorkbookNamedItem, WorkbookOperation, WorkbookTable, WorkbookWorksheet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Workbook extends Entity, Partial<Parsable> {
    /** The application property */
    application?: WorkbookApplication;
    /** The comments property */
    comments?: WorkbookComment[];
    /** The functions property */
    functions?: WorkbookFunctions;
    /** Represents a collection of workbooks scoped named items (named ranges and constants). Read-only. */
    names?: WorkbookNamedItem[];
    /** The status of Workbook operations. Getting an operation collection is not supported, but you can get the status of a long-running operation if the Location header is returned in the response. Read-only. Nullable. */
    operations?: WorkbookOperation[];
    /** Represents a collection of tables associated with the workbook. Read-only. */
    tables?: WorkbookTable[];
    /** Represents a collection of worksheets associated with the workbook. Read-only. */
    worksheets?: WorkbookWorksheet[];
}
