import {InformationalUrl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInformationalUrl(informationalUrl: InformationalUrl | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "logoUrl": n => { informationalUrl.logoUrl = n.getStringValue() as any ; },
        "marketingUrl": n => { informationalUrl.marketingUrl = n.getStringValue() as any ; },
        "privacyStatementUrl": n => { informationalUrl.privacyStatementUrl = n.getStringValue() as any ; },
        "supportUrl": n => { informationalUrl.supportUrl = n.getStringValue() as any ; },
        "termsOfServiceUrl": n => { informationalUrl.termsOfServiceUrl = n.getStringValue() as any ; },
    }
}
