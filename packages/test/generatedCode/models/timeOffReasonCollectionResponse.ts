import {BaseCollectionPaginationCountResponse, TimeOffReason} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TimeOffReasonCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: TimeOffReason[];
}
