import {GeoCoordinates, ItemFacet, PhysicalAddress} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ItemAddress extends ItemFacet, Partial<Parsable> {
    /** The detail property */
    detail?: PhysicalAddress;
    /** Friendly name the user has assigned to this address. */
    displayName?: string;
    /** The geoCoordinates property */
    geoCoordinates?: GeoCoordinates;
}
