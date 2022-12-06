import {deserializeIntoDetailsInfo} from './deserializeIntoDetailsInfo';
import {deserializeIntoIdentity} from './deserializeIntoIdentity';
import {ProvisionedIdentity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProvisionedIdentity(provisionedIdentity: ProvisionedIdentity | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentity(provisionedIdentity),
        "details": n => { provisionedIdentity.details = n.getObject(deserializeIntoDetailsInfo) as any ; },
        "identityType": n => { provisionedIdentity.identityType = n.getStringValue() as any ; },
    }
}
