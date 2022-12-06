import {ResultInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeResultInfo(writer: SerializationWriter, resultInfo: ResultInfo | undefined = {}) : void {
            writer.writeNumberValue("code", resultInfo.code);
            writer.writeStringValue("message", resultInfo.message);
            writer.writeStringValue("@odata.type", resultInfo.odataType);
            writer.writeNumberValue("subcode", resultInfo.subcode);
}
