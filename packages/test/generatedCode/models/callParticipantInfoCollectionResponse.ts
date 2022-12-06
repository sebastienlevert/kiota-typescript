import {BaseCollectionPaginationCountResponse, CallParticipantInfo} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CallParticipantInfoCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: CallParticipantInfo[];
}
