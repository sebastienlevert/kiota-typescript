import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoPrinterDocumentConfiguration} from './deserializeIntoPrinterDocumentConfiguration';
import {PrintDocument} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintDocument(printDocument: PrintDocument | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(printDocument),
        "configuration": n => { printDocument.configuration = n.getObject(deserializeIntoPrinterDocumentConfiguration) as any ; },
        "contentType": n => { printDocument.contentType = n.getStringValue() as any ; },
        "displayName": n => { printDocument.displayName = n.getStringValue() as any ; },
        "downloadedDateTime": n => { printDocument.downloadedDateTime = n.getDateValue() as any ; },
        "size": n => { printDocument.size = n.getNumberValue() as any ; },
        "uploadedDateTime": n => { printDocument.uploadedDateTime = n.getDateValue() as any ; },
    }
}
