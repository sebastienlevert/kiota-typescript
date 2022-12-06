import {ProvisionChannelEmailResult} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProvisionChannelEmailResult(provisionChannelEmailResult: ProvisionChannelEmailResult | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "email": n => { provisionChannelEmailResult.email = n.getStringValue() as any ; },
        "@odata.type": n => { provisionChannelEmailResult.odataType = n.getStringValue() as any ; },
    }
}
