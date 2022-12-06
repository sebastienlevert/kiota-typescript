import {deserializeIntoEntity} from './deserializeIntoEntity';
import {MobileAppContentFile} from './index';
import {MobileAppContentFileUploadState} from './mobileAppContentFileUploadState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileAppContentFile(mobileAppContentFile: MobileAppContentFile | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(mobileAppContentFile),
        "azureStorageUri": n => { mobileAppContentFile.azureStorageUri = n.getStringValue() as any ; },
        "azureStorageUriExpirationDateTime": n => { mobileAppContentFile.azureStorageUriExpirationDateTime = n.getDateValue() as any ; },
        "createdDateTime": n => { mobileAppContentFile.createdDateTime = n.getDateValue() as any ; },
        "isCommitted": n => { mobileAppContentFile.isCommitted = n.getBooleanValue() as any ; },
        "manifest": n => { mobileAppContentFile.manifest = n.getStringValue() as any ; },
        "name": n => { mobileAppContentFile.name = n.getStringValue() as any ; },
        "size": n => { mobileAppContentFile.size = n.getNumberValue() as any ; },
        "sizeEncrypted": n => { mobileAppContentFile.sizeEncrypted = n.getNumberValue() as any ; },
        "uploadState": n => { mobileAppContentFile.uploadState = n.getEnumValue<MobileAppContentFileUploadState>(MobileAppContentFileUploadState) as any ; },
    }
}
