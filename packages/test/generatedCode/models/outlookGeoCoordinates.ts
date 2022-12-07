import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface OutlookGeoCoordinates extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** The accuracy of the latitude and longitude. As an example, the accuracy can be measured in meters, such as the latitude and longitude are accurate to within 50 meters. */
    accuracy?: number;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The altitude of the location. */
    altitude?: number;
    /** The accuracy of the altitude. */
    altitudeAccuracy?: number;
    /** The latitude of the location. */
    latitude?: number;
    /** The longitude of the location. */
    longitude?: number;
}
