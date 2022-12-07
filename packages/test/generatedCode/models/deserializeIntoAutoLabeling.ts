import {AutoLabeling} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAutoLabeling(autoLabeling: AutoLabeling | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "message": n => { autoLabeling.message = n.getStringValue() as any ; },
        "sensitiveTypeIds": n => { autoLabeling.sensitiveTypeIds = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
