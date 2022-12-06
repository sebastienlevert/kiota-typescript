import {ConditionalAccessPolicyState} from './conditionalAccessPolicyState';
import {deserializeIntoConditionalAccessConditionSet} from './deserializeIntoConditionalAccessConditionSet';
import {deserializeIntoConditionalAccessGrantControls} from './deserializeIntoConditionalAccessGrantControls';
import {deserializeIntoConditionalAccessSessionControls} from './deserializeIntoConditionalAccessSessionControls';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ConditionalAccessPolicy} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessPolicy(conditionalAccessPolicy: ConditionalAccessPolicy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(conditionalAccessPolicy),
        "conditions": n => { conditionalAccessPolicy.conditions = n.getObject(deserializeIntoConditionalAccessConditionSet) as any ; },
        "createdDateTime": n => { conditionalAccessPolicy.createdDateTime = n.getDateValue() as any ; },
        "description": n => { conditionalAccessPolicy.description = n.getStringValue() as any ; },
        "displayName": n => { conditionalAccessPolicy.displayName = n.getStringValue() as any ; },
        "grantControls": n => { conditionalAccessPolicy.grantControls = n.getObject(deserializeIntoConditionalAccessGrantControls) as any ; },
        "modifiedDateTime": n => { conditionalAccessPolicy.modifiedDateTime = n.getDateValue() as any ; },
        "sessionControls": n => { conditionalAccessPolicy.sessionControls = n.getObject(deserializeIntoConditionalAccessSessionControls) as any ; },
        "state": n => { conditionalAccessPolicy.state = n.getEnumValue<ConditionalAccessPolicyState>(ConditionalAccessPolicyState) as any ; },
    }
}
