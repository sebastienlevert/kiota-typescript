import {BaseCollectionPaginationCountResponse, MeetingParticipantInfo} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MeetingParticipantInfoCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: MeetingParticipantInfo[];
}
