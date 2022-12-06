import {FileHashType} from './fileHashType';
import {FileHash} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFileHash(writer: SerializationWriter, fileHash: FileHash | undefined = {}) : void {
            writer.writeEnumValue<FileHashType>("hashType", fileHash.hashType);
            writer.writeStringValue("hashValue", fileHash.hashValue);
            writer.writeStringValue("@odata.type", fileHash.odataType);
}
