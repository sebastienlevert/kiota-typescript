import {MobileAppIntentAndState} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeMobileAppIntentAndStateDetail} from './serializeMobileAppIntentAndStateDetail';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMobileAppIntentAndState(writer: SerializationWriter, mobileAppIntentAndState: MobileAppIntentAndState | undefined = {}) : void {
        serializeEntity(writer, mobileAppIntentAndState)
            writer.writeStringValue("managedDeviceIdentifier", mobileAppIntentAndState.managedDeviceIdentifier);
            writer.writeCollectionOfObjectValuesFromMethod("mobileAppList", mobileAppIntentAndState.mobileAppList as any, serializeMobileAppIntentAndStateDetail);
            writer.writeStringValue("userId", mobileAppIntentAndState.userId);
}
