import {ListInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeListInfo(writer: SerializationWriter, listInfo: ListInfo | undefined = {}) : void {
            writer.writeBooleanValue("contentTypesEnabled", listInfo.contentTypesEnabled);
            writer.writeBooleanValue("hidden", listInfo.hidden);
            writer.writeStringValue("@odata.type", listInfo.odataType);
            writer.writeStringValue("template", listInfo.template);
}
