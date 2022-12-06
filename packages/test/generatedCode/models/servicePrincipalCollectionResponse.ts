import {BaseCollectionPaginationCountResponse, ServicePrincipal} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ServicePrincipalCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ServicePrincipal[];
}
