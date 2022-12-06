import {Entity, WorkbookSortField} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookTableSort extends Entity, Partial<Parsable> {
    /** Represents the current conditions used to last sort the table. Read-only. */
    fields?: WorkbookSortField[];
    /** Represents whether the casing impacted the last sort of the table. Read-only. */
    matchCase?: boolean;
    /** Represents Chinese character ordering method last used to sort the table. The possible values are: PinYin, StrokeCount. Read-only. */
    method?: string;
}
