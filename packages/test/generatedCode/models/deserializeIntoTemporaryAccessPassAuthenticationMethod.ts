import {deserializeIntoAuthenticationMethod} from './deserializeIntoAuthenticationMethod';
import {TemporaryAccessPassAuthenticationMethod} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTemporaryAccessPassAuthenticationMethod(temporaryAccessPassAuthenticationMethod: TemporaryAccessPassAuthenticationMethod | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAuthenticationMethod(temporaryAccessPassAuthenticationMethod),
        "createdDateTime": n => { temporaryAccessPassAuthenticationMethod.createdDateTime = n.getDateValue() as any ; },
        "isUsable": n => { temporaryAccessPassAuthenticationMethod.isUsable = n.getBooleanValue() as any ; },
        "isUsableOnce": n => { temporaryAccessPassAuthenticationMethod.isUsableOnce = n.getBooleanValue() as any ; },
        "lifetimeInMinutes": n => { temporaryAccessPassAuthenticationMethod.lifetimeInMinutes = n.getNumberValue() as any ; },
        "methodUsabilityReason": n => { temporaryAccessPassAuthenticationMethod.methodUsabilityReason = n.getStringValue() as any ; },
        "startDateTime": n => { temporaryAccessPassAuthenticationMethod.startDateTime = n.getDateValue() as any ; },
        "temporaryAccessPass": n => { temporaryAccessPassAuthenticationMethod.temporaryAccessPass = n.getStringValue() as any ; },
    }
}
