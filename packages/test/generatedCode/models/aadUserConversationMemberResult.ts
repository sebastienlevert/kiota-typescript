import {ActionResultPart} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AadUserConversationMemberResult extends ActionResultPart, Partial<Parsable> {
    /** The userId property */
    userId?: string;
}
