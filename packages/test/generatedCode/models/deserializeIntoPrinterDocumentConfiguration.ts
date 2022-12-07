import {deserializeIntoIntegerRange} from './deserializeIntoIntegerRange';
import {deserializeIntoPrintMargin} from './deserializeIntoPrintMargin';
import {PrinterDocumentConfiguration} from './index';
import {PrintColorMode} from './printColorMode';
import {PrintDuplexMode} from './printDuplexMode';
import {PrinterFeedDirection} from './printerFeedDirection';
import {PrinterFeedOrientation} from './printerFeedOrientation';
import {PrintFinishing} from './printFinishing';
import {PrintMultipageLayout} from './printMultipageLayout';
import {PrintOrientation} from './printOrientation';
import {PrintQuality} from './printQuality';
import {PrintScaling} from './printScaling';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrinterDocumentConfiguration(printerDocumentConfiguration: PrinterDocumentConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "collate": n => { printerDocumentConfiguration.collate = n.getBooleanValue() as any ; },
        "colorMode": n => { printerDocumentConfiguration.colorMode = n.getEnumValue<PrintColorMode>(PrintColorMode) as any ; },
        "copies": n => { printerDocumentConfiguration.copies = n.getNumberValue() as any ; },
        "dpi": n => { printerDocumentConfiguration.dpi = n.getNumberValue() as any ; },
        "duplexMode": n => { printerDocumentConfiguration.duplexMode = n.getEnumValue<PrintDuplexMode>(PrintDuplexMode) as any ; },
        "feedDirection": n => { printerDocumentConfiguration.feedDirection = n.getEnumValue<PrinterFeedDirection>(PrinterFeedDirection) as any ; },
        "feedOrientation": n => { printerDocumentConfiguration.feedOrientation = n.getEnumValue<PrinterFeedOrientation>(PrinterFeedOrientation) as any ; },
        "finishings": n => { printerDocumentConfiguration.finishings = n.getEnumValues<PrintFinishing>(PrintFinishing) as any ; },
        "fitPdfToPage": n => { printerDocumentConfiguration.fitPdfToPage = n.getBooleanValue() as any ; },
        "inputBin": n => { printerDocumentConfiguration.inputBin = n.getStringValue() as any ; },
        "margin": n => { printerDocumentConfiguration.margin = n.getObject(deserializeIntoPrintMargin) as any ; },
        "mediaSize": n => { printerDocumentConfiguration.mediaSize = n.getStringValue() as any ; },
        "mediaType": n => { printerDocumentConfiguration.mediaType = n.getStringValue() as any ; },
        "multipageLayout": n => { printerDocumentConfiguration.multipageLayout = n.getEnumValue<PrintMultipageLayout>(PrintMultipageLayout) as any ; },
        "orientation": n => { printerDocumentConfiguration.orientation = n.getEnumValue<PrintOrientation>(PrintOrientation) as any ; },
        "outputBin": n => { printerDocumentConfiguration.outputBin = n.getStringValue() as any ; },
        "pageRanges": n => { printerDocumentConfiguration.pageRanges = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIntegerRange) as any ; },
        "pagesPerSheet": n => { printerDocumentConfiguration.pagesPerSheet = n.getNumberValue() as any ; },
        "quality": n => { printerDocumentConfiguration.quality = n.getEnumValue<PrintQuality>(PrintQuality) as any ; },
        "scaling": n => { printerDocumentConfiguration.scaling = n.getEnumValue<PrintScaling>(PrintScaling) as any ; },
    }
}
