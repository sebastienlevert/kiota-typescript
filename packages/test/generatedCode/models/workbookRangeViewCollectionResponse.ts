import {BaseCollectionPaginationCountResponse, WorkbookRangeView} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookRangeViewCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: WorkbookRangeView[];
}
