import {deserializeIntoDetailsInfo} from './deserializeIntoDetailsInfo';
import {deserializeIntoIdentity} from './deserializeIntoIdentity';
import {ProvisioningSystem} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProvisioningSystem(provisioningSystem: ProvisioningSystem | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentity(provisioningSystem),
        "details": n => { provisioningSystem.details = n.getObject(deserializeIntoDetailsInfo) as any ; },
    }
}
