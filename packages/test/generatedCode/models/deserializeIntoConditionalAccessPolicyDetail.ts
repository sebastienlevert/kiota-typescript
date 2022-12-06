import {deserializeIntoConditionalAccessConditionSet} from './deserializeIntoConditionalAccessConditionSet';
import {deserializeIntoConditionalAccessGrantControls} from './deserializeIntoConditionalAccessGrantControls';
import {deserializeIntoConditionalAccessSessionControls} from './deserializeIntoConditionalAccessSessionControls';
import {ConditionalAccessPolicyDetail} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessPolicyDetail(conditionalAccessPolicyDetail: ConditionalAccessPolicyDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "conditions": n => { conditionalAccessPolicyDetail.conditions = n.getObject(deserializeIntoConditionalAccessConditionSet) as any ; },
        "grantControls": n => { conditionalAccessPolicyDetail.grantControls = n.getObject(deserializeIntoConditionalAccessGrantControls) as any ; },
        "@odata.type": n => { conditionalAccessPolicyDetail.odataType = n.getStringValue() as any ; },
        "sessionControls": n => { conditionalAccessPolicyDetail.sessionControls = n.getObject(deserializeIntoConditionalAccessSessionControls) as any ; },
    }
}
