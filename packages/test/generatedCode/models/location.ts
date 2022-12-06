import {OutlookGeoCoordinates, PhysicalAddress} from './index';
import {LocationType} from './locationType';
import {LocationUniqueIdType} from './locationUniqueIdType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Location extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The street address of the location. */
    address?: PhysicalAddress;
    /** The geographic coordinates and elevation of the location. */
    coordinates?: OutlookGeoCoordinates;
    /** The name associated with the location. */
    displayName?: string;
    /** Optional email address of the location. */
    locationEmailAddress?: string;
    /** The type of location. The possible values are: default, conferenceRoom, homeAddress, businessAddress,geoCoordinates, streetAddress, hotel, restaurant, localBusiness, postalAddress. Read-only. */
    locationType?: LocationType;
    /** Optional URI representing the location. */
    locationUri?: string;
    /** The OdataType property */
    odataType?: string;
    /** For internal use only. */
    uniqueId?: string;
    /** For internal use only. */
    uniqueIdType?: LocationUniqueIdType;
}
