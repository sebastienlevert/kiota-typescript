import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsInformationProtectionApp extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** If true, app is denied protection or exemption. */
    denied?: boolean;
    /** The app's description. */
    description?: string;
    /** App display name. */
    displayName?: string;
    /** The OdataType property */
    odataType?: string;
    /** The product name. */
    productName?: string;
    /** The publisher name */
    publisherName?: string;
}
