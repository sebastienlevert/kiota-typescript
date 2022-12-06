import {FileSecurityState} from './index';
import {serializeFileHash} from './serializeFileHash';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFileSecurityState(writer: SerializationWriter, fileSecurityState: FileSecurityState | undefined = {}) : void {
            writer.writeObjectValueFromMethod("fileHash", fileSecurityState.fileHash as any, serializeFileHash);
            writer.writeStringValue("name", fileSecurityState.name);
            writer.writeStringValue("@odata.type", fileSecurityState.odataType);
            writer.writeStringValue("path", fileSecurityState.path);
            writer.writeStringValue("riskScore", fileSecurityState.riskScore);
}
