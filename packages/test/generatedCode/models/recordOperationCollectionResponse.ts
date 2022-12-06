import {BaseCollectionPaginationCountResponse, RecordOperation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RecordOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: RecordOperation[];
}
