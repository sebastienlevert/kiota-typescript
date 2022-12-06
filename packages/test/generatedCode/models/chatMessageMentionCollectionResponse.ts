import {BaseCollectionPaginationCountResponse, ChatMessageMention} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChatMessageMentionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ChatMessageMention[];
}
