import {SearchAlterationOptions} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSearchAlterationOptions(writer: SerializationWriter, searchAlterationOptions: SearchAlterationOptions | undefined = {}) : void {
            writer.writeBooleanValue("enableModification", searchAlterationOptions.enableModification);
            writer.writeBooleanValue("enableSuggestion", searchAlterationOptions.enableSuggestion);
            writer.writeStringValue("@odata.type", searchAlterationOptions.odataType);
}
