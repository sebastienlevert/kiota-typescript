import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceGeoLocation extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Altitude, given in meters above sea level */
    altitude?: number;
    /** Heading in degrees from true north */
    heading?: number;
    /** Accuracy of longitude and latitude in meters */
    horizontalAccuracy?: number;
    /** Time at which location was recorded, relative to UTC */
    lastCollectedDateTime?: Date;
    /** Latitude coordinate of the device's location */
    latitude?: number;
    /** Longitude coordinate of the device's location */
    longitude?: number;
    /** The OdataType property */
    odataType?: string;
    /** Speed the device is traveling in meters per second */
    speed?: number;
    /** Accuracy of altitude in meters */
    verticalAccuracy?: number;
}
