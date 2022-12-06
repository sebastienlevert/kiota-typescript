import {SelfServiceSignUpAuthenticationFlowConfiguration} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSelfServiceSignUpAuthenticationFlowConfiguration(writer: SerializationWriter, selfServiceSignUpAuthenticationFlowConfiguration: SelfServiceSignUpAuthenticationFlowConfiguration | undefined = {}) : void {
            writer.writeBooleanValue("isEnabled", selfServiceSignUpAuthenticationFlowConfiguration.isEnabled);
            writer.writeStringValue("@odata.type", selfServiceSignUpAuthenticationFlowConfiguration.odataType);
}
