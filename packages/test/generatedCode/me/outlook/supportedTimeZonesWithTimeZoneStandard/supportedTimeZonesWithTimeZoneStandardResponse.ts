import {BaseCollectionPaginationCountResponse, TimeZoneInformation} from '../../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SupportedTimeZonesWithTimeZoneStandardResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: TimeZoneInformation[];
}
