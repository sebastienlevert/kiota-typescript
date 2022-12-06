import {FileHashType} from './fileHashType';
import {FileHash} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFileHash(fileHash: FileHash | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "hashType": n => { fileHash.hashType = n.getEnumValue<FileHashType>(FileHashType) as any ; },
        "hashValue": n => { fileHash.hashValue = n.getStringValue() as any ; },
        "@odata.type": n => { fileHash.odataType = n.getStringValue() as any ; },
    }
}
