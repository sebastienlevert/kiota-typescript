import {BaseCollectionPaginationCountResponse, UriClickSecurityState} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UriClickSecurityStateCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: UriClickSecurityState[];
}
