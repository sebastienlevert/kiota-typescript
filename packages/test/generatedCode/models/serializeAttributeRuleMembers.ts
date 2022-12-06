import {AttributeRuleMembers} from './index';
import {serializeSubjectSet} from './serializeSubjectSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttributeRuleMembers(writer: SerializationWriter, attributeRuleMembers: AttributeRuleMembers | undefined = {}) : void {
        serializeSubjectSet(writer, attributeRuleMembers)
            writer.writeStringValue("description", attributeRuleMembers.description);
            writer.writeStringValue("membershipRule", attributeRuleMembers.membershipRule);
}
