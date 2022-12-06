import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CrossTenantAccessPolicyInboundTrust extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Specifies whether compliant devices from external Azure AD organizations are trusted. */
    isCompliantDeviceAccepted?: boolean;
    /** Specifies whether hybrid Azure AD joined devices from external Azure AD organizations are trusted. */
    isHybridAzureADJoinedDeviceAccepted?: boolean;
    /** Specifies whether MFA from external Azure AD organizations is trusted. */
    isMfaAccepted?: boolean;
    /** The OdataType property */
    odataType?: string;
}
