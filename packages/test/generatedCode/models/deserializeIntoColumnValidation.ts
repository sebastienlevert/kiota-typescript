import {deserializeIntoDisplayNameLocalization} from './deserializeIntoDisplayNameLocalization';
import {ColumnValidation} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoColumnValidation(columnValidation: ColumnValidation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "defaultLanguage": n => { columnValidation.defaultLanguage = n.getStringValue() as any ; },
        "descriptions": n => { columnValidation.descriptions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDisplayNameLocalization) as any ; },
        "formula": n => { columnValidation.formula = n.getStringValue() as any ; },
    }
}
