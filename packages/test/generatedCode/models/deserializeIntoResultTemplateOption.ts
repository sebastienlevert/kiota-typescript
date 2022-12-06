import {ResultTemplateOption} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoResultTemplateOption(resultTemplateOption: ResultTemplateOption | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "enableResultTemplate": n => { resultTemplateOption.enableResultTemplate = n.getBooleanValue() as any ; },
        "@odata.type": n => { resultTemplateOption.odataType = n.getStringValue() as any ; },
    }
}
