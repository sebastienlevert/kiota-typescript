import {ExportPersonalDataPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExportPersonalDataPostRequestBody(exportPersonalDataPostRequestBody: ExportPersonalDataPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "storageLocation": n => { exportPersonalDataPostRequestBody.storageLocation = n.getStringValue() as any ; },
    }
}
