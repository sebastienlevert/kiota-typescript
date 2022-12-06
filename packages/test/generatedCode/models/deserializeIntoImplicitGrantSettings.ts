import {ImplicitGrantSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImplicitGrantSettings(implicitGrantSettings: ImplicitGrantSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "enableAccessTokenIssuance": n => { implicitGrantSettings.enableAccessTokenIssuance = n.getBooleanValue() as any ; },
        "enableIdTokenIssuance": n => { implicitGrantSettings.enableIdTokenIssuance = n.getBooleanValue() as any ; },
        "@odata.type": n => { implicitGrantSettings.odataType = n.getStringValue() as any ; },
    }
}
