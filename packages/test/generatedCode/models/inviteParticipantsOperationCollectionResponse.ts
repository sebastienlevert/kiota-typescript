import {BaseCollectionPaginationCountResponse, InviteParticipantsOperation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface InviteParticipantsOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: InviteParticipantsOperation[];
}
