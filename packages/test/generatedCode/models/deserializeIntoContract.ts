import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {Contract} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoContract(contract: Contract | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(contract),
        "contractType": n => { contract.contractType = n.getStringValue() as any ; },
        "customerId": n => { contract.customerId = n.getStringValue() as any ; },
        "defaultDomainName": n => { contract.defaultDomainName = n.getStringValue() as any ; },
        "displayName": n => { contract.displayName = n.getStringValue() as any ; },
    }
}
