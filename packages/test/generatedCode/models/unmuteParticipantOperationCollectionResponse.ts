import {BaseCollectionPaginationCountResponse, UnmuteParticipantOperation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnmuteParticipantOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: UnmuteParticipantOperation[];
}
