import {IdentitySet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChatMessageFromIdentitySet extends IdentitySet, Partial<Parsable> {
}
