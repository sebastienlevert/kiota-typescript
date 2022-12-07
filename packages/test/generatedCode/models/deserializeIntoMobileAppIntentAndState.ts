import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoMobileAppIntentAndStateDetail} from './deserializeIntoMobileAppIntentAndStateDetail';
import {MobileAppIntentAndState} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileAppIntentAndState(mobileAppIntentAndState: MobileAppIntentAndState | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(mobileAppIntentAndState),
        "managedDeviceIdentifier": n => { mobileAppIntentAndState.managedDeviceIdentifier = n.getStringValue() as any ; },
        "mobileAppList": n => { mobileAppIntentAndState.mobileAppList = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMobileAppIntentAndStateDetail) as any ; },
        "userId": n => { mobileAppIntentAndState.userId = n.getStringValue() as any ; },
    }
}
