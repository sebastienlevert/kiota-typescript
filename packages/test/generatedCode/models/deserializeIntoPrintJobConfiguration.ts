import {deserializeIntoIntegerRange} from './deserializeIntoIntegerRange';
import {deserializeIntoPrintMargin} from './deserializeIntoPrintMargin';
import {PrintJobConfiguration} from './index';
import {PrintColorMode} from './printColorMode';
import {PrintDuplexMode} from './printDuplexMode';
import {PrinterFeedOrientation} from './printerFeedOrientation';
import {PrintFinishing} from './printFinishing';
import {PrintMultipageLayout} from './printMultipageLayout';
import {PrintOrientation} from './printOrientation';
import {PrintQuality} from './printQuality';
import {PrintScaling} from './printScaling';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintJobConfiguration(printJobConfiguration: PrintJobConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "collate": n => { printJobConfiguration.collate = n.getBooleanValue() as any ; },
        "colorMode": n => { printJobConfiguration.colorMode = n.getEnumValue<PrintColorMode>(PrintColorMode) as any ; },
        "copies": n => { printJobConfiguration.copies = n.getNumberValue() as any ; },
        "dpi": n => { printJobConfiguration.dpi = n.getNumberValue() as any ; },
        "duplexMode": n => { printJobConfiguration.duplexMode = n.getEnumValue<PrintDuplexMode>(PrintDuplexMode) as any ; },
        "feedOrientation": n => { printJobConfiguration.feedOrientation = n.getEnumValue<PrinterFeedOrientation>(PrinterFeedOrientation) as any ; },
        "finishings": n => { printJobConfiguration.finishings = n.getEnumValues<PrintFinishing>(PrintFinishing) as any ; },
        "fitPdfToPage": n => { printJobConfiguration.fitPdfToPage = n.getBooleanValue() as any ; },
        "inputBin": n => { printJobConfiguration.inputBin = n.getStringValue() as any ; },
        "margin": n => { printJobConfiguration.margin = n.getObject(deserializeIntoPrintMargin) as any ; },
        "mediaSize": n => { printJobConfiguration.mediaSize = n.getStringValue() as any ; },
        "mediaType": n => { printJobConfiguration.mediaType = n.getStringValue() as any ; },
        "multipageLayout": n => { printJobConfiguration.multipageLayout = n.getEnumValue<PrintMultipageLayout>(PrintMultipageLayout) as any ; },
        "orientation": n => { printJobConfiguration.orientation = n.getEnumValue<PrintOrientation>(PrintOrientation) as any ; },
        "outputBin": n => { printJobConfiguration.outputBin = n.getStringValue() as any ; },
        "pageRanges": n => { printJobConfiguration.pageRanges = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIntegerRange) as any ; },
        "pagesPerSheet": n => { printJobConfiguration.pagesPerSheet = n.getNumberValue() as any ; },
        "quality": n => { printJobConfiguration.quality = n.getEnumValue<PrintQuality>(PrintQuality) as any ; },
        "scaling": n => { printJobConfiguration.scaling = n.getEnumValue<PrintScaling>(PrintScaling) as any ; },
    }
}
