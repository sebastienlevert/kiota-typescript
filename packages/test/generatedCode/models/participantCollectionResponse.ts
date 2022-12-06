import {BaseCollectionPaginationCountResponse, Participant} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ParticipantCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Participant[];
}
