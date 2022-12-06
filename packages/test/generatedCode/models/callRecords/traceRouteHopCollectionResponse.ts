import {BaseCollectionPaginationCountResponse} from '../';
import {TraceRouteHop} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TraceRouteHopCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: TraceRouteHop[];
}
