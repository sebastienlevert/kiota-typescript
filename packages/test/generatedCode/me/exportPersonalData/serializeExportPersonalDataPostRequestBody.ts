import {ExportPersonalDataPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExportPersonalDataPostRequestBody(writer: SerializationWriter, exportPersonalDataPostRequestBody: ExportPersonalDataPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("storageLocation", exportPersonalDataPostRequestBody.storageLocation);
}
