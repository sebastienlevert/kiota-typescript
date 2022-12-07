import {AppLogUploadState} from './appLogUploadState';
import {AppLogCollectionRequest} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppLogCollectionRequest(writer: SerializationWriter, appLogCollectionRequest: AppLogCollectionRequest | undefined = {}) : void {
        serializeEntity(writer, appLogCollectionRequest)
            writer.writeDateValue("completedDateTime", appLogCollectionRequest.completedDateTime);
            writer.writeCollectionOfPrimitiveValues<string>("customLogFolders", appLogCollectionRequest.customLogFolders);
            writer.writeStringValue("errorMessage", appLogCollectionRequest.errorMessage);
            writer.writeEnumValue<AppLogUploadState>("status", appLogCollectionRequest.status);
}
