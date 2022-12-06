import {BaseCollectionPaginationCountResponse, TimeOffRequest} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TimeOffRequestCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: TimeOffRequest[];
}
