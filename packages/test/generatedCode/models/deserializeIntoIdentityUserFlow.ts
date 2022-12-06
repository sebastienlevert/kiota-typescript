import {deserializeIntoEntity} from './deserializeIntoEntity';
import {IdentityUserFlow} from './index';
import {UserFlowType} from './userFlowType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityUserFlow(identityUserFlow: IdentityUserFlow | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(identityUserFlow),
        "userFlowType": n => { identityUserFlow.userFlowType = n.getEnumValue<UserFlowType>(UserFlowType) as any ; },
        "userFlowTypeVersion": n => { identityUserFlow.userFlowTypeVersion = n.getNumberValue() as any ; },
    }
}
