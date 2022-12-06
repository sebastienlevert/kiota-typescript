import {ExternalItemContentType} from './externalItemContentType';
import {ExternalItemContent} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExternalItemContent(externalItemContent: ExternalItemContent | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { externalItemContent.odataType = n.getStringValue() as any ; },
        "type": n => { externalItemContent.type = n.getEnumValue<ExternalItemContentType>(ExternalItemContentType) as any ; },
        "value": n => { externalItemContent.value = n.getStringValue() as any ; },
    }
}
