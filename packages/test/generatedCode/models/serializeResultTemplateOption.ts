import {ResultTemplateOption} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeResultTemplateOption(writer: SerializationWriter, resultTemplateOption: ResultTemplateOption | undefined = {}) : void {
            writer.writeBooleanValue("enableResultTemplate", resultTemplateOption.enableResultTemplate);
            writer.writeStringValue("@odata.type", resultTemplateOption.odataType);
}
