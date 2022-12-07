import {ListInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeListInfo(writer: SerializationWriter, listInfo: ListInfo | undefined = {}) : void {
            writer.writeBooleanValue("contentTypesEnabled", listInfo.contentTypesEnabled);
            writer.writeBooleanValue("hidden", listInfo.hidden);
            writer.writeStringValue("template", listInfo.template);
}
