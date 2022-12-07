import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PrinterLocation extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The altitude, in meters, that the printer is located at. */
    altitudeInMeters?: number;
    /** The building that the printer is located in. */
    building?: string;
    /** The city that the printer is located in. */
    city?: string;
    /** The country or region that the printer is located in. */
    countryOrRegion?: string;
    /** The floor that the printer is located on. Only numerical values are supported right now. */
    floor?: string;
    /** The description of the floor that the printer is located on. */
    floorDescription?: string;
    /** The floorNumber property */
    floorNumber?: number;
    /** The latitude that the printer is located at. */
    latitude?: number;
    /** The longitude that the printer is located at. */
    longitude?: number;
    /** The organizational hierarchy that the printer belongs to. The elements should be in hierarchical order. */
    organization?: string[];
    /** The postal code that the printer is located in. */
    postalCode?: string;
    /** The description of the room that the printer is located in. */
    roomDescription?: string;
    /** The room that the printer is located in. Only numerical values are supported right now. */
    roomName?: string;
    /** The roomNumber property */
    roomNumber?: number;
    /** The site that the printer is located in. */
    site?: string;
    /** The state or province that the printer is located in. */
    stateOrProvince?: string;
    /** The street address where the printer is located. */
    streetAddress?: string;
    /** The subdivision that the printer is located in. The elements should be in hierarchical order. */
    subdivision?: string[];
    /** The subunit property */
    subunit?: string[];
}
