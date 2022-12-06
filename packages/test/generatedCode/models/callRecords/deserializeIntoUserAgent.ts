import {UserAgent} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserAgent(userAgent: UserAgent | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "applicationVersion": n => { userAgent.applicationVersion = n.getStringValue() as any ; },
        "headerValue": n => { userAgent.headerValue = n.getStringValue() as any ; },
        "@odata.type": n => { userAgent.odataType = n.getStringValue() as any ; },
    }
}
