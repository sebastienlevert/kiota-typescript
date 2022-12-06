import {BaseCollectionPaginationCountResponse, InternalDomainFederation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface InternalDomainFederationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: InternalDomainFederation[];
}
