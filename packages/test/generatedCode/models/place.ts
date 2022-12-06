import {Entity, OutlookGeoCoordinates, PhysicalAddress} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Place extends Entity, Partial<Parsable> {
    /** The street address of the place. */
    address?: PhysicalAddress;
    /** The name associated with the place. */
    displayName?: string;
    /** Specifies the place location in latitude, longitude and (optionally) altitude coordinates. */
    geoCoordinates?: OutlookGeoCoordinates;
    /** The phone number of the place. */
    phone?: string;
}
