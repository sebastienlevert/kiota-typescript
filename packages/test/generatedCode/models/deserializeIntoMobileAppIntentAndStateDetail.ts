import {deserializeIntoMobileAppSupportedDeviceType} from './deserializeIntoMobileAppSupportedDeviceType';
import {MobileAppIntentAndStateDetail} from './index';
import {MobileAppIntent} from './mobileAppIntent';
import {ResultantAppState} from './resultantAppState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileAppIntentAndStateDetail(mobileAppIntentAndStateDetail: MobileAppIntentAndStateDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "applicationId": n => { mobileAppIntentAndStateDetail.applicationId = n.getStringValue() as any ; },
        "displayName": n => { mobileAppIntentAndStateDetail.displayName = n.getStringValue() as any ; },
        "displayVersion": n => { mobileAppIntentAndStateDetail.displayVersion = n.getStringValue() as any ; },
        "installState": n => { mobileAppIntentAndStateDetail.installState = n.getEnumValue<ResultantAppState>(ResultantAppState) as any ; },
        "mobileAppIntent": n => { mobileAppIntentAndStateDetail.mobileAppIntent = n.getEnumValue<MobileAppIntent>(MobileAppIntent) as any ; },
        "supportedDeviceTypes": n => { mobileAppIntentAndStateDetail.supportedDeviceTypes = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMobileAppSupportedDeviceType) as any ; },
    }
}
