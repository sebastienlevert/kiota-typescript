import {Entity, MessageRuleActions, MessageRulePredicates} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MessageRule extends Entity, Partial<Parsable> {
    /** The actions property */
    actions?: MessageRuleActions;
    /** The conditions property */
    conditions?: MessageRulePredicates;
    /** The display name of the rule. */
    displayName?: string;
    /** The exceptions property */
    exceptions?: MessageRulePredicates;
    /** Indicates whether the rule is in an error condition. Read-only. */
    hasError?: boolean;
    /** Indicates whether the rule is enabled to be applied to messages. */
    isEnabled?: boolean;
    /** Indicates if the rule is read-only and cannot be modified or deleted by the rules REST API. */
    isReadOnly?: boolean;
    /** Indicates the order in which the rule is executed, among other rules. */
    sequence?: number;
}
