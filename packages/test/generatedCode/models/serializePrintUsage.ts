import {PrintUsage} from './index';
import {serializeEntity} from './serializeEntity';
import {DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintUsage(writer: SerializationWriter, printUsage: PrintUsage | undefined = {}) : void {
        serializeEntity(writer, printUsage)
            writer.writeNumberValue("completedBlackAndWhiteJobCount", printUsage.completedBlackAndWhiteJobCount);
            writer.writeNumberValue("completedColorJobCount", printUsage.completedColorJobCount);
            writer.writeNumberValue("incompleteJobCount", printUsage.incompleteJobCount);
            writer.writeDateOnlyValue("usageDate", printUsage.usageDate);
}
