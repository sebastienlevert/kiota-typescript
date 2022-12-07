import {OutlookGeoCoordinates, PhysicalAddress} from './index';
import {LocationType} from './locationType';
import {LocationUniqueIdType} from './locationUniqueIdType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Location extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The address property */
    address?: PhysicalAddress;
    /** The coordinates property */
    coordinates?: OutlookGeoCoordinates;
    /** The name associated with the location. */
    displayName?: string;
    /** Optional email address of the location. */
    locationEmailAddress?: string;
    /** The locationType property */
    locationType?: LocationType;
    /** Optional URI representing the location. */
    locationUri?: string;
    /** For internal use only. */
    uniqueId?: string;
    /** The uniqueIdType property */
    uniqueIdType?: LocationUniqueIdType;
}
