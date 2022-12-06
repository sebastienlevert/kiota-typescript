import {BaseCollectionPaginationCountResponse, PrintServiceEndpoint} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintServiceEndpointCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: PrintServiceEndpoint[];
}
