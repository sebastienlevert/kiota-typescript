import {BaseCollectionPaginationCountResponse, Endpoint} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EndpointCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Endpoint[];
}
