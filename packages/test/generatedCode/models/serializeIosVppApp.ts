import {IosVppApp} from './index';
import {serializeIosDeviceType} from './serializeIosDeviceType';
import {serializeMobileApp} from './serializeMobileApp';
import {serializeVppLicensingType} from './serializeVppLicensingType';
import {VppTokenAccountType} from './vppTokenAccountType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosVppApp(writer: SerializationWriter, iosVppApp: IosVppApp | undefined = {}) : void {
        serializeMobileApp(writer, iosVppApp)
            writer.writeObjectValueFromMethod("applicableDeviceType", iosVppApp.applicableDeviceType as any, serializeIosDeviceType);
            writer.writeStringValue("appStoreUrl", iosVppApp.appStoreUrl);
            writer.writeStringValue("bundleId", iosVppApp.bundleId);
            writer.writeObjectValueFromMethod("licensingType", iosVppApp.licensingType as any, serializeVppLicensingType);
            writer.writeDateValue("releaseDateTime", iosVppApp.releaseDateTime);
            writer.writeNumberValue("totalLicenseCount", iosVppApp.totalLicenseCount);
            writer.writeNumberValue("usedLicenseCount", iosVppApp.usedLicenseCount);
            writer.writeEnumValue<VppTokenAccountType>("vppTokenAccountType", iosVppApp.vppTokenAccountType);
            writer.writeStringValue("vppTokenAppleId", iosVppApp.vppTokenAppleId);
            writer.writeStringValue("vppTokenOrganizationName", iosVppApp.vppTokenOrganizationName);
}
