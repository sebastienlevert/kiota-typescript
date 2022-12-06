import {ResourceData} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoResourceData(resourceData: ResourceData | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { resourceData.odataType = n.getStringValue() as any ; },
    }
}
