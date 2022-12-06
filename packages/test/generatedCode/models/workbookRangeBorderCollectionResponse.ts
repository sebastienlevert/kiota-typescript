import {BaseCollectionPaginationCountResponse, WorkbookRangeBorder} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookRangeBorderCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: WorkbookRangeBorder[];
}
