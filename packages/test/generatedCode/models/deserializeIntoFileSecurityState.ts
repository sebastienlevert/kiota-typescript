import {deserializeIntoFileHash} from './deserializeIntoFileHash';
import {FileSecurityState} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFileSecurityState(fileSecurityState: FileSecurityState | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "fileHash": n => { fileSecurityState.fileHash = n.getObject(deserializeIntoFileHash) as any ; },
        "name": n => { fileSecurityState.name = n.getStringValue() as any ; },
        "@odata.type": n => { fileSecurityState.odataType = n.getStringValue() as any ; },
        "path": n => { fileSecurityState.path = n.getStringValue() as any ; },
        "riskScore": n => { fileSecurityState.riskScore = n.getStringValue() as any ; },
    }
}
