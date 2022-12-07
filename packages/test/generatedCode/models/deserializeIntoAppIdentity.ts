import {AppIdentity} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppIdentity(appIdentity: AppIdentity | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "appId": n => { appIdentity.appId = n.getStringValue() as any ; },
        "displayName": n => { appIdentity.displayName = n.getStringValue() as any ; },
        "servicePrincipalId": n => { appIdentity.servicePrincipalId = n.getStringValue() as any ; },
        "servicePrincipalName": n => { appIdentity.servicePrincipalName = n.getStringValue() as any ; },
    }
}
