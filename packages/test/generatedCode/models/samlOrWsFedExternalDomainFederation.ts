import {ExternalDomainName, SamlOrWsFedProvider} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SamlOrWsFedExternalDomainFederation extends Partial<Parsable>, SamlOrWsFedProvider {
    /** Collection of domain names of the external organizations that the tenant is federating with. Supports $filter (eq). */
    domains?: ExternalDomainName[];
}
