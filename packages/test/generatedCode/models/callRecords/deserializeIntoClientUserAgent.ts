import {ClientPlatform} from './clientPlatform';
import {deserializeIntoUserAgent} from './deserializeIntoUserAgent';
import {ClientUserAgent} from './index';
import {ProductFamily} from './productFamily';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoClientUserAgent(clientUserAgent: ClientUserAgent | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoUserAgent(clientUserAgent),
        "azureADAppId": n => { clientUserAgent.azureADAppId = n.getStringValue() as any ; },
        "communicationServiceId": n => { clientUserAgent.communicationServiceId = n.getStringValue() as any ; },
        "platform": n => { clientUserAgent.platform = n.getEnumValue<ClientPlatform>(ClientPlatform) as any ; },
        "productFamily": n => { clientUserAgent.productFamily = n.getEnumValue<ProductFamily>(ProductFamily) as any ; },
    }
}
