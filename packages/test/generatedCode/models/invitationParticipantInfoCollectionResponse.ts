import {BaseCollectionPaginationCountResponse, InvitationParticipantInfo} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface InvitationParticipantInfoCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: InvitationParticipantInfo[];
}
