import {Entity, Json} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookTableRow extends Entity, Partial<Parsable> {
    /** Returns the index number of the row within the rows collection of the table. Zero-indexed. Read-only. */
    index?: number;
    /** The values property */
    values?: Json;
}
