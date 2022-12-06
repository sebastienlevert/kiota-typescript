import {ConditionalAccessSessionControls} from './index';
import {serializeApplicationEnforcedRestrictionsSessionControl} from './serializeApplicationEnforcedRestrictionsSessionControl';
import {serializeCloudAppSecuritySessionControl} from './serializeCloudAppSecuritySessionControl';
import {serializePersistentBrowserSessionControl} from './serializePersistentBrowserSessionControl';
import {serializeSignInFrequencySessionControl} from './serializeSignInFrequencySessionControl';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessSessionControls(writer: SerializationWriter, conditionalAccessSessionControls: ConditionalAccessSessionControls | undefined = {}) : void {
            writer.writeObjectValueFromMethod("applicationEnforcedRestrictions", conditionalAccessSessionControls.applicationEnforcedRestrictions as any, serializeApplicationEnforcedRestrictionsSessionControl);
            writer.writeObjectValueFromMethod("cloudAppSecurity", conditionalAccessSessionControls.cloudAppSecurity as any, serializeCloudAppSecuritySessionControl);
            writer.writeBooleanValue("disableResilienceDefaults", conditionalAccessSessionControls.disableResilienceDefaults);
            writer.writeStringValue("@odata.type", conditionalAccessSessionControls.odataType);
            writer.writeObjectValueFromMethod("persistentBrowser", conditionalAccessSessionControls.persistentBrowser as any, serializePersistentBrowserSessionControl);
            writer.writeObjectValueFromMethod("signInFrequency", conditionalAccessSessionControls.signInFrequency as any, serializeSignInFrequencySessionControl);
}
