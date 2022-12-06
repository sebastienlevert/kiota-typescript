import {deserializeIntoSubjectSet} from './deserializeIntoSubjectSet';
import {AttributeRuleMembers} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttributeRuleMembers(attributeRuleMembers: AttributeRuleMembers | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSubjectSet(attributeRuleMembers),
        "description": n => { attributeRuleMembers.description = n.getStringValue() as any ; },
        "membershipRule": n => { attributeRuleMembers.membershipRule = n.getStringValue() as any ; },
    }
}
