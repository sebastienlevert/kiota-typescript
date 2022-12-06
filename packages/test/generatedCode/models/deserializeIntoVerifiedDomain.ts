import {VerifiedDomain} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoVerifiedDomain(verifiedDomain: VerifiedDomain | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "capabilities": n => { verifiedDomain.capabilities = n.getStringValue() as any ; },
        "isDefault": n => { verifiedDomain.isDefault = n.getBooleanValue() as any ; },
        "isInitial": n => { verifiedDomain.isInitial = n.getBooleanValue() as any ; },
        "name": n => { verifiedDomain.name = n.getStringValue() as any ; },
        "@odata.type": n => { verifiedDomain.odataType = n.getStringValue() as any ; },
        "type": n => { verifiedDomain.type = n.getStringValue() as any ; },
    }
}
