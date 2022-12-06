import {BaseCollectionPaginationCountResponse, MeetingTimeSuggestion} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MeetingTimeSuggestionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: MeetingTimeSuggestion[];
}
