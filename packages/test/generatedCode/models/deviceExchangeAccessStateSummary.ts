import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceExchangeAccessStateSummary extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Total count of devices with Exchange Access State: Allowed. */
    allowedDeviceCount?: number;
    /** Total count of devices with Exchange Access State: Blocked. */
    blockedDeviceCount?: number;
    /** The OdataType property */
    odataType?: string;
    /** Total count of devices with Exchange Access State: Quarantined. */
    quarantinedDeviceCount?: number;
    /** Total count of devices for which no Exchange Access State could be found. */
    unavailableDeviceCount?: number;
    /** Total count of devices with Exchange Access State: Unknown. */
    unknownDeviceCount?: number;
}
