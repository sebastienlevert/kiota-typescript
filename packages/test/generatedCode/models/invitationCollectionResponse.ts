import {BaseCollectionPaginationCountResponse, Invitation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface InvitationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Invitation[];
}
