import {BaseCollectionPaginationCountResponse, PinnedChatMessageInfo} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PinnedChatMessageInfoCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: PinnedChatMessageInfo[];
}
