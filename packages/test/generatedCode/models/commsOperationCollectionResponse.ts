import {BaseCollectionPaginationCountResponse, CommsOperation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CommsOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: CommsOperation[];
}
