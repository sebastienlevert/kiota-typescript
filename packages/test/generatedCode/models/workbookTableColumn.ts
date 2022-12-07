import {Entity, Json, WorkbookFilter} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookTableColumn extends Entity, Partial<Parsable> {
    /** The filter property */
    filter?: WorkbookFilter;
    /** Returns the index number of the column within the columns collection of the table. Zero-indexed. Read-only. */
    index?: number;
    /** Returns the name of the table column. */
    name?: string;
    /** The values property */
    values?: Json;
}
