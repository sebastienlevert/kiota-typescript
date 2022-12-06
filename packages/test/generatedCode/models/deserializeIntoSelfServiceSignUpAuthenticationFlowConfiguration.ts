import {SelfServiceSignUpAuthenticationFlowConfiguration} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSelfServiceSignUpAuthenticationFlowConfiguration(selfServiceSignUpAuthenticationFlowConfiguration: SelfServiceSignUpAuthenticationFlowConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "isEnabled": n => { selfServiceSignUpAuthenticationFlowConfiguration.isEnabled = n.getBooleanValue() as any ; },
        "@odata.type": n => { selfServiceSignUpAuthenticationFlowConfiguration.odataType = n.getStringValue() as any ; },
    }
}
