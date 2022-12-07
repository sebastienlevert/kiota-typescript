import {Entity, WorkbookWorksheetProtectionOptions} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookWorksheetProtection extends Entity, Partial<Parsable> {
    /** The options property */
    options?: WorkbookWorksheetProtectionOptions;
    /** Indicates if the worksheet is protected.  Read-only. */
    protected?: boolean;
}
