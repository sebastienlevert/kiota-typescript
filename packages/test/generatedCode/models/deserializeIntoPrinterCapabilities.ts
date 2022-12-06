import {deserializeIntoIntegerRange} from './deserializeIntoIntegerRange';
import {PrinterCapabilities} from './index';
import {PrintColorMode} from './printColorMode';
import {PrintDuplexMode} from './printDuplexMode';
import {PrinterFeedOrientation} from './printerFeedOrientation';
import {PrintFinishing} from './printFinishing';
import {PrintMultipageLayout} from './printMultipageLayout';
import {PrintOrientation} from './printOrientation';
import {PrintQuality} from './printQuality';
import {PrintScaling} from './printScaling';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrinterCapabilities(printerCapabilities: PrinterCapabilities | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "bottomMargins": n => { printerCapabilities.bottomMargins = n.getCollectionOfPrimitiveValues<number>() as any ; },
        "collation": n => { printerCapabilities.collation = n.getBooleanValue() as any ; },
        "colorModes": n => { printerCapabilities.colorModes = n.getEnumValues<PrintColorMode>(PrintColorMode) as any ; },
        "contentTypes": n => { printerCapabilities.contentTypes = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "copiesPerJob": n => { printerCapabilities.copiesPerJob = n.getObject(deserializeIntoIntegerRange) as any ; },
        "dpis": n => { printerCapabilities.dpis = n.getCollectionOfPrimitiveValues<number>() as any ; },
        "duplexModes": n => { printerCapabilities.duplexModes = n.getEnumValues<PrintDuplexMode>(PrintDuplexMode) as any ; },
        "feedOrientations": n => { printerCapabilities.feedOrientations = n.getEnumValues<PrinterFeedOrientation>(PrinterFeedOrientation) as any ; },
        "finishings": n => { printerCapabilities.finishings = n.getEnumValues<PrintFinishing>(PrintFinishing) as any ; },
        "inputBins": n => { printerCapabilities.inputBins = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "isColorPrintingSupported": n => { printerCapabilities.isColorPrintingSupported = n.getBooleanValue() as any ; },
        "isPageRangeSupported": n => { printerCapabilities.isPageRangeSupported = n.getBooleanValue() as any ; },
        "leftMargins": n => { printerCapabilities.leftMargins = n.getCollectionOfPrimitiveValues<number>() as any ; },
        "mediaColors": n => { printerCapabilities.mediaColors = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "mediaSizes": n => { printerCapabilities.mediaSizes = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "mediaTypes": n => { printerCapabilities.mediaTypes = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "multipageLayouts": n => { printerCapabilities.multipageLayouts = n.getEnumValues<PrintMultipageLayout>(PrintMultipageLayout) as any ; },
        "@odata.type": n => { printerCapabilities.odataType = n.getStringValue() as any ; },
        "orientations": n => { printerCapabilities.orientations = n.getEnumValues<PrintOrientation>(PrintOrientation) as any ; },
        "outputBins": n => { printerCapabilities.outputBins = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "pagesPerSheet": n => { printerCapabilities.pagesPerSheet = n.getCollectionOfPrimitiveValues<number>() as any ; },
        "qualities": n => { printerCapabilities.qualities = n.getEnumValues<PrintQuality>(PrintQuality) as any ; },
        "rightMargins": n => { printerCapabilities.rightMargins = n.getCollectionOfPrimitiveValues<number>() as any ; },
        "scalings": n => { printerCapabilities.scalings = n.getEnumValues<PrintScaling>(PrintScaling) as any ; },
        "supportsFitPdfToPage": n => { printerCapabilities.supportsFitPdfToPage = n.getBooleanValue() as any ; },
        "topMargins": n => { printerCapabilities.topMargins = n.getCollectionOfPrimitiveValues<number>() as any ; },
    }
}
