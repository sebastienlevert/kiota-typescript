import {BaseCollectionPaginationCountResponse, CloudAppSecurityState} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CloudAppSecurityStateCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: CloudAppSecurityState[];
}
