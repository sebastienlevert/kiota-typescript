import {BaseCollectionPaginationCountResponse, MuteParticipantOperation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MuteParticipantOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: MuteParticipantOperation[];
}
