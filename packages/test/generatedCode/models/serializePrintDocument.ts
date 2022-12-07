import {PrintDocument} from './index';
import {serializeEntity} from './serializeEntity';
import {serializePrinterDocumentConfiguration} from './serializePrinterDocumentConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintDocument(writer: SerializationWriter, printDocument: PrintDocument | undefined = {}) : void {
        serializeEntity(writer, printDocument)
            writer.writeObjectValueFromMethod("configuration", printDocument.configuration as any, serializePrinterDocumentConfiguration);
            writer.writeStringValue("contentType", printDocument.contentType);
            writer.writeStringValue("displayName", printDocument.displayName);
            writer.writeDateValue("downloadedDateTime", printDocument.downloadedDateTime);
            writer.writeNumberValue("size", printDocument.size);
            writer.writeDateValue("uploadedDateTime", printDocument.uploadedDateTime);
}
