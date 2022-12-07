import {MobileAppIntentAndStateDetail} from './index';
import {MobileAppIntent} from './mobileAppIntent';
import {ResultantAppState} from './resultantAppState';
import {serializeMobileAppSupportedDeviceType} from './serializeMobileAppSupportedDeviceType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMobileAppIntentAndStateDetail(writer: SerializationWriter, mobileAppIntentAndStateDetail: MobileAppIntentAndStateDetail | undefined = {}) : void {
            writer.writeStringValue("applicationId", mobileAppIntentAndStateDetail.applicationId);
            writer.writeStringValue("displayName", mobileAppIntentAndStateDetail.displayName);
            writer.writeStringValue("displayVersion", mobileAppIntentAndStateDetail.displayVersion);
            writer.writeEnumValue<ResultantAppState>("installState", mobileAppIntentAndStateDetail.installState);
            writer.writeEnumValue<MobileAppIntent>("mobileAppIntent", mobileAppIntentAndStateDetail.mobileAppIntent);
            writer.writeCollectionOfObjectValuesFromMethod("supportedDeviceTypes", mobileAppIntentAndStateDetail.supportedDeviceTypes as any, serializeMobileAppSupportedDeviceType);
}
