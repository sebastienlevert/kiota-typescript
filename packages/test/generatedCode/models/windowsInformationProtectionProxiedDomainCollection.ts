import {ProxiedDomain} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsInformationProtectionProxiedDomainCollection extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Display name */
    displayName?: string;
    /** The OdataType property */
    odataType?: string;
    /** Collection of proxied domains */
    proxiedDomains?: ProxiedDomain[];
}
