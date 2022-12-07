import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceKey extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The deviceId property */
    deviceId?: string;
    /** The keyMaterial property */
    keyMaterial?: string;
    /** The keyType property */
    keyType?: string;
}
