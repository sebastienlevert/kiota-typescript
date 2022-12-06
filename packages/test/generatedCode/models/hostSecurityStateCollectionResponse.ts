import {BaseCollectionPaginationCountResponse, HostSecurityState} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface HostSecurityStateCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: HostSecurityState[];
}
