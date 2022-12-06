import {BaseCollectionPaginationCountResponse, MessageSecurityState} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MessageSecurityStateCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: MessageSecurityState[];
}
