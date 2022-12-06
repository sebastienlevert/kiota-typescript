import {Entity, Json} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookTableRow extends Entity, Partial<Parsable> {
    /** Returns the index number of the row within the rows collection of the table. Zero-indexed. Read-only. */
    index?: number;
    /** Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string. */
    values?: Json;
}
