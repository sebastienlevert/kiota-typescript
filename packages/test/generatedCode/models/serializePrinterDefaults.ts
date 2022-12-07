import {PrinterDefaults} from './index';
import {PrintColorConfiguration} from './printColorConfiguration';
import {PrintColorMode} from './printColorMode';
import {PrintDuplexConfiguration} from './printDuplexConfiguration';
import {PrintDuplexMode} from './printDuplexMode';
import {PrintFinishing} from './printFinishing';
import {PrintMultipageLayout} from './printMultipageLayout';
import {PrintOrientation} from './printOrientation';
import {PrintPresentationDirection} from './printPresentationDirection';
import {PrintQuality} from './printQuality';
import {PrintScaling} from './printScaling';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrinterDefaults(writer: SerializationWriter, printerDefaults: PrinterDefaults | undefined = {}) : void {
            writer.writeEnumValue<PrintColorMode>("colorMode", printerDefaults.colorMode);
            writer.writeStringValue("contentType", printerDefaults.contentType);
            writer.writeNumberValue("copiesPerJob", printerDefaults.copiesPerJob);
            writer.writeStringValue("documentMimeType", printerDefaults.documentMimeType);
            writer.writeNumberValue("dpi", printerDefaults.dpi);
            writer.writeEnumValue<PrintDuplexConfiguration>("duplexConfiguration", printerDefaults.duplexConfiguration);
            writer.writeEnumValue<PrintDuplexMode>("duplexMode", printerDefaults.duplexMode);
           // writer.writeEnumValue<PrintFinishing>("finishings", printerDefaults.finishings);
            writer.writeBooleanValue("fitPdfToPage", printerDefaults.fitPdfToPage);
            writer.writeStringValue("inputBin", printerDefaults.inputBin);
            writer.writeStringValue("mediaColor", printerDefaults.mediaColor);
            writer.writeStringValue("mediaSize", printerDefaults.mediaSize);
            writer.writeStringValue("mediaType", printerDefaults.mediaType);
            writer.writeEnumValue<PrintMultipageLayout>("multipageLayout", printerDefaults.multipageLayout);
            writer.writeEnumValue<PrintOrientation>("orientation", printerDefaults.orientation);
            writer.writeStringValue("outputBin", printerDefaults.outputBin);
            writer.writeNumberValue("pagesPerSheet", printerDefaults.pagesPerSheet);
            writer.writeBooleanValue("pdfFitToPage", printerDefaults.pdfFitToPage);
            writer.writeEnumValue<PrintPresentationDirection>("presentationDirection", printerDefaults.presentationDirection);
            writer.writeEnumValue<PrintColorConfiguration>("printColorConfiguration", printerDefaults.printColorConfiguration);
            writer.writeEnumValue<PrintQuality>("printQuality", printerDefaults.printQuality);
            writer.writeEnumValue<PrintQuality>("quality", printerDefaults.quality);
            writer.writeEnumValue<PrintScaling>("scaling", printerDefaults.scaling);
}
