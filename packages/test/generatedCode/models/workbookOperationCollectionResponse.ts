import {BaseCollectionPaginationCountResponse, WorkbookOperation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: WorkbookOperation[];
}
