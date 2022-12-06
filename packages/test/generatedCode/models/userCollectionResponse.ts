import {BaseCollectionPaginationCountResponse, User} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: User[];
}
