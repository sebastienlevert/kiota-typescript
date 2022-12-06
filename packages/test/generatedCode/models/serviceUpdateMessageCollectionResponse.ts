import {BaseCollectionPaginationCountResponse, ServiceUpdateMessage} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ServiceUpdateMessageCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ServiceUpdateMessage[];
}
