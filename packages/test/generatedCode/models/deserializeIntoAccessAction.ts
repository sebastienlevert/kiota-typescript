import {AccessAction} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessAction(accessAction: AccessAction | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { accessAction.odataType = n.getStringValue() as any ; },
    }
}
