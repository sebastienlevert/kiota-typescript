import {AlternativeSecurityId} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAlternativeSecurityId(alternativeSecurityId: AlternativeSecurityId | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "identityProvider": n => { alternativeSecurityId.identityProvider = n.getStringValue() as any ; },
        "key": n => { alternativeSecurityId.key = n.getStringValue() as any ; },
        "type": n => { alternativeSecurityId.type = n.getNumberValue() as any ; },
    }
}
