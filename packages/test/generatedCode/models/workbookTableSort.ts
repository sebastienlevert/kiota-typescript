import {Entity, WorkbookSortField} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookTableSort extends Entity, Partial<Parsable> {
    /** The fields property */
    fields?: WorkbookSortField[];
    /** Represents whether the casing impacted the last sort of the table. Read-only. */
    matchCase?: boolean;
    /** Represents Chinese character ordering method last used to sort the table. Possible values are: PinYin, StrokeCount. Read-only. */
    method?: string;
}
