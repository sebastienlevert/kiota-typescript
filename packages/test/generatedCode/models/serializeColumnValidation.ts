import {ColumnValidation} from './index';
import {serializeDisplayNameLocalization} from './serializeDisplayNameLocalization';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeColumnValidation(writer: SerializationWriter, columnValidation: ColumnValidation | undefined = {}) : void {
            writer.writeStringValue("defaultLanguage", columnValidation.defaultLanguage);
            writer.writeCollectionOfObjectValuesFromMethod("descriptions", columnValidation.descriptions as any, serializeDisplayNameLocalization);
            writer.writeStringValue("formula", columnValidation.formula);
}
