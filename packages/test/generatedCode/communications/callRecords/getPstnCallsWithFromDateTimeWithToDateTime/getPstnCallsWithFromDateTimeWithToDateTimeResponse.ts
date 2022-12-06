import {BaseCollectionPaginationCountResponse} from '../../../models/';
import {PstnCallLogRow} from '../../../models/callRecords/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetPstnCallsWithFromDateTimeWithToDateTimeResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: PstnCallLogRow[];
}
