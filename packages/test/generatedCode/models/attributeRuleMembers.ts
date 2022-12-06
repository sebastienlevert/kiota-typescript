import {SubjectSet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AttributeRuleMembers extends Partial<Parsable>, SubjectSet {
    /** A description of the membership rule. */
    description?: string;
    /** Determines the allowed target users for this policy. For more information about the syntax of the membership rule, see Membership Rules syntax. */
    membershipRule?: string;
}
