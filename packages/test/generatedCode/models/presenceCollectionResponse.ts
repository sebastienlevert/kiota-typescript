import {BaseCollectionPaginationCountResponse, Presence} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PresenceCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Presence[];
}
