import {IdentitySet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChatMessageReactionIdentitySet extends IdentitySet, Partial<Parsable> {
}
