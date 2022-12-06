import {PrintService} from './index';
import {serializeEntity} from './serializeEntity';
import {serializePrintServiceEndpoint} from './serializePrintServiceEndpoint';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintService(writer: SerializationWriter, printService: PrintService | undefined = {}) : void {
        serializeEntity(writer, printService)
            writer.writeCollectionOfObjectValuesFromMethod("endpoints", printService.endpoints as any, serializePrintServiceEndpoint);
}
