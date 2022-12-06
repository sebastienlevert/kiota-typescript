import {UriClickSecurityState} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUriClickSecurityState(uriClickSecurityState: UriClickSecurityState | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "clickAction": n => { uriClickSecurityState.clickAction = n.getStringValue() as any ; },
        "clickDateTime": n => { uriClickSecurityState.clickDateTime = n.getDateValue() as any ; },
        "id": n => { uriClickSecurityState.id = n.getStringValue() as any ; },
        "@odata.type": n => { uriClickSecurityState.odataType = n.getStringValue() as any ; },
        "sourceId": n => { uriClickSecurityState.sourceId = n.getStringValue() as any ; },
        "uriDomain": n => { uriClickSecurityState.uriDomain = n.getStringValue() as any ; },
        "verdict": n => { uriClickSecurityState.verdict = n.getStringValue() as any ; },
    }
}
