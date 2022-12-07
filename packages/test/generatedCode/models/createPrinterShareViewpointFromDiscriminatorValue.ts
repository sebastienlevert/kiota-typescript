import {PrinterShareViewpoint} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrinterShareViewpointFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrinterShareViewpoint {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrinterShareViewpoint();
}
