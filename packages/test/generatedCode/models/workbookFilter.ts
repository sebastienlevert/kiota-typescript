import {Entity, WorkbookFilterCriteria} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookFilter extends Entity, Partial<Parsable> {
    /** The currently applied filter on the given column. Read-only. */
    criteria?: WorkbookFilterCriteria;
}
