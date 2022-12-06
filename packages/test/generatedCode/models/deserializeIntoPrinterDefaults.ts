import {PrinterDefaults} from './index';
import {PrintColorMode} from './printColorMode';
import {PrintDuplexMode} from './printDuplexMode';
import {PrintFinishing} from './printFinishing';
import {PrintMultipageLayout} from './printMultipageLayout';
import {PrintOrientation} from './printOrientation';
import {PrintQuality} from './printQuality';
import {PrintScaling} from './printScaling';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrinterDefaults(printerDefaults: PrinterDefaults | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "colorMode": n => { printerDefaults.colorMode = n.getEnumValue<PrintColorMode>(PrintColorMode) as any ; },
        "contentType": n => { printerDefaults.contentType = n.getStringValue() as any ; },
        "copiesPerJob": n => { printerDefaults.copiesPerJob = n.getNumberValue() as any ; },
        "dpi": n => { printerDefaults.dpi = n.getNumberValue() as any ; },
        "duplexMode": n => { printerDefaults.duplexMode = n.getEnumValue<PrintDuplexMode>(PrintDuplexMode) as any ; },
        "finishings": n => { printerDefaults.finishings = n.getEnumValues<PrintFinishing>(PrintFinishing) as any ; },
        "fitPdfToPage": n => { printerDefaults.fitPdfToPage = n.getBooleanValue() as any ; },
        "inputBin": n => { printerDefaults.inputBin = n.getStringValue() as any ; },
        "mediaColor": n => { printerDefaults.mediaColor = n.getStringValue() as any ; },
        "mediaSize": n => { printerDefaults.mediaSize = n.getStringValue() as any ; },
        "mediaType": n => { printerDefaults.mediaType = n.getStringValue() as any ; },
        "multipageLayout": n => { printerDefaults.multipageLayout = n.getEnumValue<PrintMultipageLayout>(PrintMultipageLayout) as any ; },
        "@odata.type": n => { printerDefaults.odataType = n.getStringValue() as any ; },
        "orientation": n => { printerDefaults.orientation = n.getEnumValue<PrintOrientation>(PrintOrientation) as any ; },
        "outputBin": n => { printerDefaults.outputBin = n.getStringValue() as any ; },
        "pagesPerSheet": n => { printerDefaults.pagesPerSheet = n.getNumberValue() as any ; },
        "quality": n => { printerDefaults.quality = n.getEnumValue<PrintQuality>(PrintQuality) as any ; },
        "scaling": n => { printerDefaults.scaling = n.getEnumValue<PrintScaling>(PrintScaling) as any ; },
    }
}
