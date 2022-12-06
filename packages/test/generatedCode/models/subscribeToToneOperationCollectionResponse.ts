import {BaseCollectionPaginationCountResponse, SubscribeToToneOperation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SubscribeToToneOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SubscribeToToneOperation[];
}
