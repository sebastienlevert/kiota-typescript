import {Package} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPackage(package: Package | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { package.odataType = n.getStringValue() as any ; },
        "type": n => { package.type = n.getStringValue() as any ; },
    }
}
