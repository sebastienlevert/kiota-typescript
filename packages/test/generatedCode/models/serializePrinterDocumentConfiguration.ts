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
import {serializeIntegerRange} from './serializeIntegerRange';
import {serializePrintMargin} from './serializePrintMargin';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrinterDocumentConfiguration(writer: SerializationWriter, printerDocumentConfiguration: PrinterDocumentConfiguration | undefined = {}) : void {
            writer.writeBooleanValue("collate", printerDocumentConfiguration.collate);
            writer.writeEnumValue<PrintColorMode>("colorMode", printerDocumentConfiguration.colorMode);
            writer.writeNumberValue("copies", printerDocumentConfiguration.copies);
            writer.writeNumberValue("dpi", printerDocumentConfiguration.dpi);
            writer.writeEnumValue<PrintDuplexMode>("duplexMode", printerDocumentConfiguration.duplexMode);
            writer.writeEnumValue<PrinterFeedDirection>("feedDirection", printerDocumentConfiguration.feedDirection);
            writer.writeEnumValue<PrinterFeedOrientation>("feedOrientation", printerDocumentConfiguration.feedOrientation);
           // writer.writeEnumValue<PrintFinishing>("finishings", printerDocumentConfiguration.finishings);
            writer.writeBooleanValue("fitPdfToPage", printerDocumentConfiguration.fitPdfToPage);
            writer.writeStringValue("inputBin", printerDocumentConfiguration.inputBin);
            writer.writeObjectValueFromMethod("margin", printerDocumentConfiguration.margin as any, serializePrintMargin);
            writer.writeStringValue("mediaSize", printerDocumentConfiguration.mediaSize);
            writer.writeStringValue("mediaType", printerDocumentConfiguration.mediaType);
            writer.writeEnumValue<PrintMultipageLayout>("multipageLayout", printerDocumentConfiguration.multipageLayout);
            writer.writeEnumValue<PrintOrientation>("orientation", printerDocumentConfiguration.orientation);
            writer.writeStringValue("outputBin", printerDocumentConfiguration.outputBin);
            writer.writeCollectionOfObjectValuesFromMethod("pageRanges", printerDocumentConfiguration.pageRanges as any, serializeIntegerRange);
            writer.writeNumberValue("pagesPerSheet", printerDocumentConfiguration.pagesPerSheet);
            writer.writeEnumValue<PrintQuality>("quality", printerDocumentConfiguration.quality);
            writer.writeEnumValue<PrintScaling>("scaling", printerDocumentConfiguration.scaling);
}
