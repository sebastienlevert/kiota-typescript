import {deserializeIntoMobileLobApp} from './deserializeIntoMobileLobApp';
import {WindowsMobileMSI} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsMobileMSI(windowsMobileMSI: WindowsMobileMSI | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileLobApp(windowsMobileMSI),
        "commandLine": n => { windowsMobileMSI.commandLine = n.getStringValue() as any ; },
        "ignoreVersionDetection": n => { windowsMobileMSI.ignoreVersionDetection = n.getBooleanValue() as any ; },
        "productCode": n => { windowsMobileMSI.productCode = n.getStringValue() as any ; },
        "productVersion": n => { windowsMobileMSI.productVersion = n.getStringValue() as any ; },
    }
}
