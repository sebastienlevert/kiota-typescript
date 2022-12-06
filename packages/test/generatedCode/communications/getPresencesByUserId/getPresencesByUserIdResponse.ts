import {BaseCollectionPaginationCountResponse, Presence} from '../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetPresencesByUserIdResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Presence[];
}
