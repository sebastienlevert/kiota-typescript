import {OmaSetting} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOmaSetting(omaSetting: OmaSetting | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "description": n => { omaSetting.description = n.getStringValue() as any ; },
        "displayName": n => { omaSetting.displayName = n.getStringValue() as any ; },
        "@odata.type": n => { omaSetting.odataType = n.getStringValue() as any ; },
        "omaUri": n => { omaSetting.omaUri = n.getStringValue() as any ; },
    }
}
