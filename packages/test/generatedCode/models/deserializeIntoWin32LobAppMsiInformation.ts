import {Win32LobAppMsiInformation} from './index';
import {Win32LobAppMsiPackageType} from './win32LobAppMsiPackageType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWin32LobAppMsiInformation(win32LobAppMsiInformation: Win32LobAppMsiInformation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { win32LobAppMsiInformation.odataType = n.getStringValue() as any ; },
        "packageType": n => { win32LobAppMsiInformation.packageType = n.getEnumValue<Win32LobAppMsiPackageType>(Win32LobAppMsiPackageType) as any ; },
        "productCode": n => { win32LobAppMsiInformation.productCode = n.getStringValue() as any ; },
        "productName": n => { win32LobAppMsiInformation.productName = n.getStringValue() as any ; },
        "productVersion": n => { win32LobAppMsiInformation.productVersion = n.getStringValue() as any ; },
        "publisher": n => { win32LobAppMsiInformation.publisher = n.getStringValue() as any ; },
        "requiresReboot": n => { win32LobAppMsiInformation.requiresReboot = n.getBooleanValue() as any ; },
        "upgradeCode": n => { win32LobAppMsiInformation.upgradeCode = n.getStringValue() as any ; },
    }
}
