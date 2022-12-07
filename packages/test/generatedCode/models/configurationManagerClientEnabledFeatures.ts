import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ConfigurationManagerClientEnabledFeatures extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Whether compliance policy is managed by Intune */
    compliancePolicy?: boolean;
    /** Whether device configuration is managed by Intune */
    deviceConfiguration?: boolean;
    /** Whether Endpoint Protection is managed by Intune */
    endpointProtection?: boolean;
    /** Whether inventory is managed by Intune */
    inventory?: boolean;
    /** Whether modern application is managed by Intune */
    modernApps?: boolean;
    /** Whether Office application is managed by Intune */
    officeApps?: boolean;
    /** Whether resource access is managed by Intune */
    resourceAccess?: boolean;
    /** Whether Windows Update for Business is managed by Intune */
    windowsUpdateForBusiness?: boolean;
}
