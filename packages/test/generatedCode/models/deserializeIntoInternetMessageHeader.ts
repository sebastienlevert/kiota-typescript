import {InternetMessageHeader} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInternetMessageHeader(internetMessageHeader: InternetMessageHeader | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "name": n => { internetMessageHeader.name = n.getStringValue() as any ; },
        "@odata.type": n => { internetMessageHeader.odataType = n.getStringValue() as any ; },
        "value": n => { internetMessageHeader.value = n.getStringValue() as any ; },
    }
}
