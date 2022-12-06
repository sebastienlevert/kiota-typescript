import {BaseCollectionPaginationCountResponse, Message} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MessageCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Message[];
}
