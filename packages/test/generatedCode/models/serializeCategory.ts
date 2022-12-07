import {Category} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCategory(writer: SerializationWriter, category: Category | undefined = {}) : void {
            writer.writeNumberValue("id", category.id);
            writer.writeStringValue("name", category.name);
}
