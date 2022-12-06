import {BaseCollectionPaginationCountResponse, CallRoute} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CallRouteCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: CallRoute[];
}
