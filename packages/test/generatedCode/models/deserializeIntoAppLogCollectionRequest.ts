import {AppLogUploadState} from './appLogUploadState';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {AppLogCollectionRequest} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppLogCollectionRequest(appLogCollectionRequest: AppLogCollectionRequest | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(appLogCollectionRequest),
        "completedDateTime": n => { appLogCollectionRequest.completedDateTime = n.getDateValue() as any ; },
        "customLogFolders": n => { appLogCollectionRequest.customLogFolders = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "errorMessage": n => { appLogCollectionRequest.errorMessage = n.getStringValue() as any ; },
        "status": n => { appLogCollectionRequest.status = n.getEnumValue<AppLogUploadState>(AppLogUploadState) as any ; },
    }
}
