import {deserializeIntoEntity} from './deserializeIntoEntity';
import {PrintUsage} from './index';
import {DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintUsage(printUsage: PrintUsage | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(printUsage),
        "completedBlackAndWhiteJobCount": n => { printUsage.completedBlackAndWhiteJobCount = n.getNumberValue() as any ; },
        "completedColorJobCount": n => { printUsage.completedColorJobCount = n.getNumberValue() as any ; },
        "incompleteJobCount": n => { printUsage.incompleteJobCount = n.getNumberValue() as any ; },
        "usageDate": n => { printUsage.usageDate = n.getDateOnlyValue() as any ; },
    }
}
