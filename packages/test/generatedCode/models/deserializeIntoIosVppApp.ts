import {deserializeIntoIosDeviceType} from './deserializeIntoIosDeviceType';
import {deserializeIntoMobileApp} from './deserializeIntoMobileApp';
import {deserializeIntoVppLicensingType} from './deserializeIntoVppLicensingType';
import {IosVppApp} from './index';
import {VppTokenAccountType} from './vppTokenAccountType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosVppApp(iosVppApp: IosVppApp | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileApp(iosVppApp),
        "applicableDeviceType": n => { iosVppApp.applicableDeviceType = n.getObject(deserializeIntoIosDeviceType) as any ; },
        "appStoreUrl": n => { iosVppApp.appStoreUrl = n.getStringValue() as any ; },
        "bundleId": n => { iosVppApp.bundleId = n.getStringValue() as any ; },
        "licensingType": n => { iosVppApp.licensingType = n.getObject(deserializeIntoVppLicensingType) as any ; },
        "releaseDateTime": n => { iosVppApp.releaseDateTime = n.getDateValue() as any ; },
        "totalLicenseCount": n => { iosVppApp.totalLicenseCount = n.getNumberValue() as any ; },
        "usedLicenseCount": n => { iosVppApp.usedLicenseCount = n.getNumberValue() as any ; },
        "vppTokenAccountType": n => { iosVppApp.vppTokenAccountType = n.getEnumValue<VppTokenAccountType>(VppTokenAccountType) as any ; },
        "vppTokenAppleId": n => { iosVppApp.vppTokenAppleId = n.getStringValue() as any ; },
        "vppTokenOrganizationName": n => { iosVppApp.vppTokenOrganizationName = n.getStringValue() as any ; },
    }
}
