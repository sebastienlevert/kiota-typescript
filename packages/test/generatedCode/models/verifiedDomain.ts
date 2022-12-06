import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface VerifiedDomain extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** For example, Email, OfficeCommunicationsOnline. */
    capabilities?: string;
    /** true if this is the default domain associated with the tenant; otherwise, false. */
    isDefault?: boolean;
    /** true if this is the initial domain associated with the tenant; otherwise, false. */
    isInitial?: boolean;
    /** The domain name; for example, contoso.onmicrosoft.com. */
    name?: string;
    /** The OdataType property */
    odataType?: string;
    /** For example, Managed. */
    type?: string;
}
