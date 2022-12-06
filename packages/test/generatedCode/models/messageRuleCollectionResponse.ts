import {BaseCollectionPaginationCountResponse, MessageRule} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MessageRuleCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: MessageRule[];
}
