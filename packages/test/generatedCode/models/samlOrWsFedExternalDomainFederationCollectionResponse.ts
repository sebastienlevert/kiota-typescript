import {BaseCollectionPaginationCountResponse, SamlOrWsFedExternalDomainFederation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SamlOrWsFedExternalDomainFederationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SamlOrWsFedExternalDomainFederation[];
}
