import {BaseCollectionPaginationCountResponse, UserSecurityState} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserSecurityStateCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: UserSecurityState[];
}
