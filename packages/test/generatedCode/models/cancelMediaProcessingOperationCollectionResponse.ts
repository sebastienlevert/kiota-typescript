import {BaseCollectionPaginationCountResponse, CancelMediaProcessingOperation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CancelMediaProcessingOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: CancelMediaProcessingOperation[];
}
