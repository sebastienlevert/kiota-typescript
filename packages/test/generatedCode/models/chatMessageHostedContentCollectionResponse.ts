import {BaseCollectionPaginationCountResponse, ChatMessageHostedContent} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChatMessageHostedContentCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ChatMessageHostedContent[];
}
