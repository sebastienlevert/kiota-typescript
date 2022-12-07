import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {PolicyBase} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPolicyBase(policyBase: PolicyBase | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(policyBase),
        "description": n => { policyBase.description = n.getStringValue() as any ; },
        "displayName": n => { policyBase.displayName = n.getStringValue() as any ; },
    }
}
