import {BaseCollectionPaginationCountResponse} from '../../../models/';
import {DirectRoutingLogRow} from '../../../models/callRecords/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DirectRoutingLogRow[];
}
