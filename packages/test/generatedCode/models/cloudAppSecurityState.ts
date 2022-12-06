import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CloudAppSecurityState extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Destination IP Address of the connection to the cloud application/service. */
    destinationServiceIp?: string;
    /** Cloud application/service name (for example 'Salesforce', 'DropBox', etc.). */
    destinationServiceName?: string;
    /** The OdataType property */
    odataType?: string;
    /** Provider-generated/calculated risk score of the Cloud Application/Service. Recommended value range of 0-1, which equates to a percentage. */
    riskScore?: string;
}
