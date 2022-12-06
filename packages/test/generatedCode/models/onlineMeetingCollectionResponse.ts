import {BaseCollectionPaginationCountResponse, OnlineMeeting} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OnlineMeetingCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: OnlineMeeting[];
}
