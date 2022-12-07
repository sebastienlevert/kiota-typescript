import {PrinterDocumentConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrinterDocumentConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrinterDocumentConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrinterDocumentConfiguration();
}
